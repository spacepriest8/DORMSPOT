import express from "express";
import usersRoute from "../routes/usersRoutes.js";
import dotenv from "dotenv";
import globalErrorHandler from "../middlewares/globalErrorHandler.js";
import connectDB from "../config/dbConnect.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use("/api/users/", usersRoute);


app.use(globalErrorHandler);

export default app;
