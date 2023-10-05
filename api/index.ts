import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route";
import authRouter from "./routes/auth.route";

dotenv.config();

const app = express();

app.use(express.json());

// @ts-ignore
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected to MongoDB")
}).catch(error => {
    console.log(error)
})


app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);