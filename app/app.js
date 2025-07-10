import express from "express";
import usersRoute from "../routes/usersRoutes.js";
import dotenv from "dotenv";
import globalErrorHandler from "../middlewares/globalErrorHandler.js";
import connectDB from "../config/dbConnect.js";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { notFound, errorMiddleware } from "../src/middleware/error.middleware.js";
import routes from "../src/routes/index.route.js";
// import hostelRoutes from "../src/routes/hostel.routes.js";
// import bookingRoutes from "../src/routes/booking.routes.js";
// import connectCloudinary from "../src/config/cloudinary.js";
import { connectCloudinary } from "../src/config/cloudinary.js";
dotenv.config();

connectDB();
// connectCloudinary();
connectCloudinary()

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(compression());
app.use(helmet());

// Rate Limiting
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Too many requests from this IP, please try again later",
  })
);

// Static folder for uploads
app.use("/uploads", express.static("uploads"));

// Health check endpoint
app.get("/health", (_, res) => {
  res.send("server is up");
});

// API Routes
app.use("/api/users/", usersRoute);
app.use("/api/v1", routes);


// Error Handlers
app.use(globalErrorHandler);
app.use(notFound);
app.use(errorMiddleware);

export default app;
