import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// @ts-ignore
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected to MongoDB")
}).catch(error => {
    console.log(error)
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})