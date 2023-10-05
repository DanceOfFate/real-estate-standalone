import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {IUser} from "./types.ts";

export const signup = createAsyncThunk(
    "auth/signup",
    async ({
        username,
        email,
        password
    }: IUser) => {

        const response = await axios.post("/api/auth/signup", {
            username,
            email,
            password
        });

        return response.data;
    }
)