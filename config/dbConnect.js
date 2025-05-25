import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", {
            message: error.message,
            code: error.code,
            name: error.name
        });
        // Exit process with failure if this is a critical database connection
        process.exit(1);
    }
};

export default connectDB;