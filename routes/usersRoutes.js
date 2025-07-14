import express from "express";
import { registerUser, loginUser, getProfile } from "../controller/usersController.js";
import { protect } from "../middlewares/authMiddleware.js";

const usersRoute = express.Router();

usersRoute.post("/register", registerUser);
usersRoute.post("/login", loginUser);
usersRoute.get("/profile", protect, getProfile); // ✅ Secure profile route

export default usersRoute;
