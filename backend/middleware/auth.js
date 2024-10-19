const catchAsyncErrors = require('./catchAsyncErrors');
const ErrorHandler = require('../utils/errorHandler');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
    let token;
    token = req.cookies.token;
    console.log("adsas "+token);

    if(token){
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id);
            console.log("user"+req.user);
            next();
        } catch (error) {
            console.log(error);
            return next(new ErrorHandler('Token failed, you can\'t have access.', 401));
        }
    }else{
        return next(new ErrorHandler('Login first to access this resource.', 401));
    }
});

// Handling user roles
const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(new ErrorHandler(`Role ${req.user.role} is not allowed to access this resource.`, 403));
        }
        next();
    }
}

module.exports = {
    isAuthenticatedUser,
    authorizeRoles
};
