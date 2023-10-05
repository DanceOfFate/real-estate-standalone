import express, {NextFunction, response} from "express";
import User from "../models/user.model";
import bcryptjs from "bcryptjs";
import {IUser} from "../types";
import {errorHandler} from "../utils/error";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";


export const signup = async (req: express.Request, res: express.Response, next: NextFunction) => {
    const { username, email, password } = req.body;

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User<IUser>({ username, email, password: hashedPassword });


    try {
        await newUser.save()
        res.status(201).json("User created successfully");
    } catch (error) {
        next(error);
    }

}

export const signin = async(req: express.Request, res: express.Response, next: NextFunction) => {
    const {email, password} = req.body;

    try {
        const validUser = await User.findOne({ email });
        if (!validUser) return errorHandler(404, "User not  found");


        const validPassword = bcryptjs.compareSync(password, validUser.password)
        if (!validPassword) return errorHandler(401, "Invalid password");

        const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET as string)

        const { password: pass, ...rest } = validUser._doc;

        res
            .cookie('access_token', token, { httpOnly: true })
            .status(200)
            .json(rest)

    } catch (error) {
        next(error)
    }
}

