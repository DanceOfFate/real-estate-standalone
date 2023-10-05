import express, {NextFunction} from "express";
import User from "../models/user.model";
import bcryptjs from "bcryptjs";
import {IUser} from "../types";

const signup = async (req: express.Request, res: express.Response, next: NextFunction) => {
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

export default signup;