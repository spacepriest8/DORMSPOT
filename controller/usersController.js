import asyncHandler from "express-async-handler";
import User from "../models/user.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export const registerUser = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password, role } = req.body;
    
    // Check for missing required fields
    const missingFields = [];
    if (!firstName) missingFields.push('firstName');
    if (!lastName) missingFields.push('lastName');
    if (!email) missingFields.push('email');
    if (!password) missingFields.push('password');
    
    if (missingFields.length > 0) {
        res.status(400);
        throw new Error(`Missing required field(s): ${missingFields.join(', ')}`);
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        ...(role && { role }), // Only include role if it's provided
    });
    res.status(201).json({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        // token: generateToken(user._id),
    });
});


export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
        res.status(400);
        throw new Error("Please provide email and password");
    }
    
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        // Check if user account is active
        if (user.status === 0) {
            res.status(401);
            throw new Error('Your account has been deactivated');
        }

        res.status(200).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role,
            token: generateToken(user._id)
        });
    } else {
        res.status(401);
        throw new Error("Invalid email or password");
    }
});