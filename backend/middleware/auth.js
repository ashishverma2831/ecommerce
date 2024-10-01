// const jwt = require('jsonwebtoken');

// const auth = (req, res, next) => {
//     try {
//         const token = req.header("Authorization");
//         if(!token) return res.status(400).json({msg: "Invalid Authentication"});

//         jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//             if(err) return res.status(400).json({msg: "Invalid Authentication"});
//             req.user = user;
//             next();
//         });
//     } catch (error) {
//         return res.status(500).json({msg: error.message});
//     }
// }

// module.exports = auth;

const catchAsyncErrors = require('./catchAsyncErrors');
const ErrorHandler = require('../utils/errorHandler.js');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        // return next(new ErrorHandler('Login first to access this resource.', 401));
        return res.status(401).json({ msg: "Login first to access this resource." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(decoded);
    req.user = await User.findById(decoded.id);
    
    // req.user = user;
    next();
});

// Handling user roles
const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ msg: `Role ${req.user.role} is not allowed to access this resource.` });
        }
        next();
    }
}

module.exports = {
    isAuthenticatedUser,
    authorizeRoles
};
