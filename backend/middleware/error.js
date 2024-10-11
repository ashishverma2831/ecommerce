const ErrorHandler = require('../utils/errorHandler');

module.exports = (err, req, res, next) => {
  let error = {
    statusCode: err?.statusCode || 500,
    message: err?.message || "Internal Server Error",
  };

  // Handle Invalid Mongoose ID Error
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err?.path}`;
    error = new ErrorHandler(message, 404);
  }

  // Handle Validation Error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((value) => value.message);
    error = new ErrorHandler(message, 400);
  }

  // Handle wrong JWT Error
  if (err.name === "JsonWebTokenError") {
    const message = `JSON Web Token is invalid. Try Again!!!`;
    error = new ErrorHandler(message, 400);
  }

  // Handle expired JWT Error
  if (err.name === "TokenExpiredError") {
    const message = `JSON Web Token is expired. Try Again!!!`;
    error = new ErrorHandler(message, 400);
  }
}