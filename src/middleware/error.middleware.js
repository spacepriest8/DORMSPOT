import { CustomError } from '../lib/errors.js';

// Middleware to handle 404 Not Found errors
export const notFound = (req, res, next) => {
  // Create a custom error with the requested URL and 404 status
  const error = new CustomError(`Not Found - ${req.originalUrl}`, 404);
  // Pass the error to the next middleware
  next(error);
};

// General error handling middleware
export const errorMiddleware = (err, req, res, next) => {
  // Set default status code and message
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Internal Server Error';

  // Handle MongoDB CastError (e.g., invalid ObjectId)
  if (err.name === 'CastError') {
    statusCode = 400;
    message = `Invalid ID format: ${err.value}`;
  }

  // Handle Mongoose duplicate key error
  if (err.code && err.code === 11000) {
    statusCode = 400;
    message = 'Duplicate field value entered';
  }

  // Send error response as JSON
  res.status(statusCode).json({
    success: false,
    message,
    // Show stack trace only in non-production environments
    stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
  });
};