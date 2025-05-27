// Import the winston logging library
import winston from 'winston';

// Custom format to enumerate error stack traces in log messages
const enumerateErrorFormat = winston.format((info) => {
  if (info instanceof Error) {
    // If the log info is an Error, include its message and stack trace
    return Object.assign({}, info, {
      message: `${info.message}\n${info.stack}`,
    });
  }
  return info;
});

// Create a logger instance with specified configuration
const logger = winston.createLogger({
  level: 'info', // Default log level
  format: winston.format.combine(
    enumerateErrorFormat(), // Apply custom error formatting
    winston.format.timestamp(), // Add timestamp to each log entry
    winston.format.printf(({ timestamp, level, message }) => {
      // Define the log message format
      return `${timestamp} [${level}]: ${message}`;
    })
  ),
  transports: [
    // Output logs to the console
    new winston.transports.Console(),
    // Write error-level logs to a file
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    // Write all logs to a combined file
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

// Export the logger instance for use in other modules
export default logger;