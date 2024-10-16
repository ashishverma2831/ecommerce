const User = require('../models/userModel');
const Cart = require('../models/cartModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const ErrorHandler = require('../utils/errorHandler');
const sendToken = require('../utils/sendToken');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');
const getResetPasswordTemplate = require('../utils/emailTemplate');

const userController = {
    register: catchAsyncErrors( async (req, res, next) => {
        try {
            const { name, email, password } = req.body;
            const user = await User.findOne({ email });
            if (user) return next(new ErrorHandler('User already exists', 400));
            if (password.length < 6) return next(new ErrorHandler('Password must be at least 6 characters', 400));

            const passwordHash = await bcrypt.hash(password, 10);
            const newUser = await User.create({ name, email, password: passwordHash });
            sendToken(newUser, 201, res);
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    }),
    forgotPassword: catchAsyncErrors(async (req, res, next) => {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return next(new ErrorHandler('User not found with this email', 404));

        const resetToken = user.getResetPasswordToken();
        await user.save();

        const resetUrl = `http://localhost:5173/api/users/password/reset/${resetToken}`;
        const message = getResetPasswordTemplate(user?.name,resetUrl);

        try {
            await sendEmail({
                email: user.email,
                subject: 'THub Password Recovery',
                message
            });
            res.status(200).json({ msg: `Email sent to: ${user.email}` });
        } catch (error) {
            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;

            await user.save();
            return next(new ErrorHandler(error.message, 500));
        }
    }),
    resetPassword: catchAsyncErrors(async (req,res,next)=>{
        const resetPasswordToken = crypto
        .createHash('sha256')
        .update(req.params.token)
        .digest('hex');

        const user = await User.findOne({
            resetPasswordToken,
            resetPasswordExpire: {$gt: Date.now()}
        })
        if(!user){
            return next(new ErrorHandler('Password reset token is invalid or has expired',400));
        }
        if(req.body.password !== req.body.confirmPassword){
            return next(new ErrorHandler('Password does not match',400));
        }
        const passwordHash = await bcrypt.hash(req.body.password,10);
        user.password = passwordHash;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save();
        sendToken(user,200,res);
    }),
    login: catchAsyncErrors(async (req, res,next) => {
        try {
            const { email, password } = req.body;
            if(!email || !password) return next(new ErrorHandler('Please enter email & password', 400));
            
            const user = await User.findOne({ email }).select('+password');
            if (!user) return next(new ErrorHandler('Invalid Email or Password', 401));

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return next(new ErrorHandler('Incorrect Password', 401));
            sendToken(user, 200, res);
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    }),
    logout: catchAsyncErrors( async (req, res, next) => {
        res.cookie('token',null,{
            expires: new Date(Date.now()),
            httpOnly: true
        });

        res.status(200).json({
            message: 'Logged out'
        });
    }),
    getUserProfile: catchAsyncErrors(async (req, res, next) => {
        const user = await User.findById(req?.user?._id);
        res.status(200).json({
            user
        });
    }),
    updatePassword: catchAsyncErrors(async (req, res, next) => {
        const user = await User.findById(req?.user?._id).select('+password');
        const isMatch = await bcrypt.compare(req.body.oldPassword, user.password);
        if (!isMatch) return next(new ErrorHandler('Old password is incorrect', 400));
        const passwordHash = await bcrypt.hash(req.body.password, 10);
        user.password = passwordHash;
        await user.save();

        res.status(200).json({
            message: 'Password updated successfully.'
        });
    }),
    updateProfile: catchAsyncErrors(async (req, res, next) => {
        const newUserData = {
            name: req.body.name,
            email: req.body.email
        }
        const user = await User.findByIdAndUpdate(req?.user?._id,newUserData,{
            new: true,
        });
        res.status(200).json({
            user
        });
    }),
    allUsers: catchAsyncErrors(async (req, res, next) => {
        const users = await User.find();
        res.status(200).json({
            users
        });
    }),
    getUserDetails: catchAsyncErrors(async (req, res, next) => {
        const user = await User.findById(req.params.id);
        if (!user) return next(new ErrorHandler(`User does not exist with id: ${req.params.id}`, 400));
        res.status(200).json({
            user
        });
    }),
    updateUser: catchAsyncErrors(async (req, res, next) => {
        const newUserData = {
            name: req.body.name,
            email: req.body.email,
            role: req.body.role
        }
        const user = await User.findByIdAndUpdate(req.params.id,newUserData,{
            new: true,
        });
        res.status(200).json({
            user
        });
    }),
    deleteUser: catchAsyncErrors(async (req, res, next) => {
        const user = await User.findById(req.params.id);
        if (!user) return next(new ErrorHandler(`User does not exist with id: ${req.params.id}`, 400));
        await user.deleteOne();
        res.status(200).json({
            message: 'User deleted successfully.'
        });
    }),
   
}

module.exports = userController;