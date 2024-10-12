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
            if (user) return res.status(400).json({ msg: "The email already exists." });
            if (password.length < 6) return res.status(400).json({ msg: "Password is at least 6 characters long." });

            // Password Encryption
            const passwordHash = await bcrypt.hash(password, 10);
            // const newUser = new User({
            //     name, email, password: passwordHash
            // });
            // const newUser = new User({ ...req.body, password: passwordHash });
            // save to mongodb
            // await newUser.save();

            const newUser = await User.create({ name, email, password: passwordHash });

            // create jsonwebtoken to authentication
            // const accesstoken = createAccessToken({ id: newUser._id });
            // const refreshToken = createRefreshToken({ id: newUser._id });
            // const token = newUser.getJWTToken();

            // res.cookie('refreshtoken', refreshToken, {
            //     httpOnly: true,
            //     path: '/api/users/refresh_token',
            //     secure: true,
            // });
            // res.json({ msg: 'register success', token: token });

            sendToken(newUser, 201, res);

        } catch (error) {
            return res.status(500).json({ msg: error.message });
            // return next(new ErrorHandler(error.message, 500));
        }
    }),
    // refreshToken: async (req, res) => {
    //     try {
    //         const rf_token = req.cookies.refreshtoken;
    //         if (!rf_token) return res.status(400).json({ msg: "Please Login or Register!" });
    //         jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    //             if (err) return res.status(400).json({ msg: "Please Login or Register" });
    //             const accesstoken = createAccessToken({ id: user.id });
    //             res.json({ user, accesstoken });
    //         });
    //     } catch (error) {
    //         return res.status(500).json({ msg: error.message });
    //     }
    // },
    forgotPassword: catchAsyncErrors(async (req, res, next) => {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(404).json({ msg: "User does not exist with this email." });

        // Get reset token
        const resetToken = user.getResetPasswordToken();
        await user.save();

        // Create reset password url
        // const resetUrl = `${process.env.CLIENT_URL}/api/users/password/reset/${resetToken}`;
        const resetUrl = `http://localhost:3000/api/users/password/reset/${resetToken}`;
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
            // return next(new ErrorHandler(error.message, 500));
            return res.status(500).json({ msg: error.message });     
        }
    }),
    // resetPassword
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
            // return next(new ErrorHandler('Password reset token is invalid or has expired',400));
            return res.status(400).json({ msg: "Password reset token is invalid or has expired." });
        }
        if(req.body.password !== req.body.confirmPassword){
            // return next(new ErrorHandler('Password does not match',400));
            return res.status(400).json({ msg: "Password does not match." });
        }
        // setup new password
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
            if(!email || !password) return res.status(400).json({ msg: "Please enter all fields." });
            
            const user = await User.findOne({ email }).select('+password');
            if (!user) return res.status(401).json({ msg: "User does not exist." });
            // if (!user) return next(new ErrorHandler('Invalid Email or Password', 401));

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(401).json({ msg: "Incorrect Password." });

            // If login success, create access token and refresh token
            // const accesstoken = createAccessToken({ id: user._id });
            // const refreshToken = createRefreshToken({ id: user._id });

            // res.cookie('refreshtoken', refreshToken, {
            //     httpOnly: true,
            //     path: '/api/users/refresh_token',
            // });

            // const token = user.getJWTToken();
            // res.status(200).json({ msg: 'Login Success', token });

            sendToken(user, 200, res);

        } catch (error) {
            return res.status(500).json({ msg: error.message });
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

        // Check previous user password
        const isMatch = await bcrypt.compare(req.body.oldPassword, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Old password is incorrect." });

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
    // get all users
    allUsers: catchAsyncErrors(async (req, res, next) => {
        const users = await User.find();
        res.status(200).json({
            users
        });
    }),
    getUserDetails: catchAsyncErrors(async (req, res, next) => {
        const user = await User.findById(req.params.id);
        // if (!user) return next(new ErrorHandler('User not found with this ID', 400));
        // if (!user) return res.status(404).json({ msg: `User not found with this id: " + ${req.params.id}`});

        if (!user) return res.status(404).json({ msg: 'User does not exist with this id.' });
       
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
        if (!user) return res.status(404).json({ msg: `User not found with this id: " + ${req.params.id}` });
        await user.deleteOne();
        res.status(200).json({
            message: 'User deleted successfully.'
        });
    }),
    // getAllUsers: async (req, res) => {
    //     try {
    //         const users = await User.find().select('-password');
    //         if (!users) return res.status(400).json({ msg: "User does not exist." });
    //         res.json(users);
    //     } catch (error) {
    //         return res.status(500).json({ msg: error.message });
    //     }
    // },
    // updateUser: async (req, res) => {
    //     try {
    //         const user = await User.findByIdAndUpdate(req.user.id, req.body, { new: true, merge: { address: req.body.address, phone: req.body.phone } });
    //         res.json(user);
    //     } catch (error) {
    //         return res.status(500).json({ msg: error.message });
    //     }
    //     console.log('req.body:', req.body);
    // },
    // deleteUser: async (req, res) => {
    //     try {
    //         await User.findByIdAndDelete(req.user.id);
    //         res.json({ msg: "Delete Success!" });
    //     } catch (error) {
    //         return res.status(500).json({ msg: error.message });
    //     }
    // },
    // addToCart: async (req, res) => {
    //     const { productId, quantity, price,size, color,image,description } = req.body;
    //     const id = req.user._id;
    //     console.log('req.body:', req.body);
    //     try {
    //         let newCart = await new Cart({
    //             userId: id, productId, quantity, price,size, color,image,description 
    //         }).save();
    //         res.json(newCart);
    //     } catch (error) {
    //         return res.status(500).json({ msg: error.message });
    //     }
    // },
    // getUserCart: async (req, res) => {
    //     const id = req.user._id;
    //     try {
    //         const cart = await Cart.find({ userId: id });
    //         if (!cart) return res.status(400).json({ msg: "User does not exist." });
    //         res.json(cart);
    //     } catch (error) {
    //         return res.status(500).json({ msg: error.message });
    //     }
    // },
    // updateUserCart: async (req, res) => {
    //     const { productId, quantity, price,size, color,image,description } = req.body;
    //     const id = req.user._id;
    //     try {
    //         const cart = await Cart.findOneAndUpdate({ userId: id, productId }, { quantity, price,size, color,image,description });
    //         res.json(cart);
    //     } catch (error) {
    //         return res.status(500).json({ msg: error.message });
    //     }
    // },
    // deleteUserCartItem: async (req, res) => {
    //     const id = req.user._id;
    //     const productId = req.params.id;
    //     try {
    //         await Cart.findOneAndDelete({ userId: id, productId });
    //         res.json({ msg: "Delete Success!" });
    //     } catch (error) {
    //         return res.status(500).json({ msg: error.message });
    //     }
    // },
    // deleteUserCart: async (req, res) => {
    //     const id = req.user._id;
    //     try {
    //         await Cart.findOneAndDelete({ userId: id });
    //         res.json({ msg: "Delete Success!" });
    //     } catch (error) {
    //         return res.status(500).json({ msg: error.message });
    //     }
    // }
}

// const createAccessToken = (payload) => {
//     return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' });
// }
// const createRefreshToken = (payload) => {
//     return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
// }

module.exports = userController;