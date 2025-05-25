import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["admin", "landlord", "student"],
        default: "student",
    },
    status: {
        type: Number,
        enum: [0, 1],
        default: 1,
    },
    profilePicture: {
        type: String,
        default: "",
    },
    
}, {
    timestamps: true
});

const User = mongoose.model("User", UserSchema);

export default User;
