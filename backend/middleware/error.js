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
}