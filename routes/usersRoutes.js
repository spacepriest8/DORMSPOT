import express from "express";
import { registerUser, loginUser } from "../controller/usersController.js";

const usersRoute = express.Router();

usersRoute.post("/register", registerUser);
usersRoute.post("/login", loginUser);

export default usersRoute;