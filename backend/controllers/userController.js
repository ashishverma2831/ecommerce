const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { get } = require('mongoose');

const userController = {
    register: async (req, res) => {
        try {
            const {name, email, password} = req.body;
            const user = await User.findOne({email});
            if(user) return res.status(400).json({msg: "The email already exists."});
            if(password.length < 6) return res.status(400).json({msg: "Password is at least 6 characters long."});

            // Password Encryption
            const passwordHash = await bcrypt.hash(password, 10);
            const newUser = new User({
                name, email, password: passwordHash
            });

            // save to mongodb
            await newUser.save();

            // create jsonwebtoken to authentication
            const accesstoken = createAccessToken({id: newUser._id});
            const refreshToken = createRefreshToken({id: newUser._id});

            res.cookie('refreshtoken', refreshToken, {
                httpOnly: true,
                path: '/api/users/refresh_token',
                // maxAge: 7*24*60*60*1000 // 7d
            });

            // res.json({msg: "Register Success!"});
            res.json({accesstoken});

        } catch (error) {
            return res.status(500).json({msg: error.message});
        }
    },
    refreshToken: async (req, res) => {
        try {
            const rf_token = req.cookies.refreshtoken;
            if(!rf_token) return res.status(400).json({msg: "Please Login or Register"});

            jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
                if(err) return res.status(400).json({msg: "Please Login or Register"});
                const accesstoken = createAccessToken({id: user.id});
                res.json({user,accesstoken});
            });
        } catch (error) {
            return res.status(500).json({msg: error.message});
        }
    },
    login: async(req, res) => {
        try {
            const {email, password} = req.body;
            const user = await User.findOne({email});
            if(!user) return res.status(400).json({msg: "User does not exist."});

            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch) return res.status(401).json({msg: "Incorrect password."});

            // If login success, create access token and refresh token
            const accesstoken = createAccessToken({id: user._id});
            const refreshToken = createRefreshToken({id: user._id});

            res.cookie('refreshtoken', refreshToken, {
                httpOnly: true,
                path: '/api/users/refresh_token',
            });

            res.json({accesstoken});

        } catch (error) {
            return res.status(500).json({msg: error.message});  
        }
    },
    logout: async(req, res) => {
        try {
            res.clearCookie('refreshtoken', {path: '/api/users/refresh_token'});
            return res.json({msg: "Logged out"});
        } catch (error) {
            return res.status(500).json({msg: error.message});
        }
    },
    getUser: async(req, res) => {
        try {
            const user = await User.findById(req.user.id).select('-password');
            if(!user) return res.status(400).json({msg: "User does not exist."});
            res.json(user);
        } catch (error) {
            return res.status(500).json({msg: error.message});
        }
    },
    // getAllUsers: async(req, res) => {
    //     try {
    //         const users = await User.find().select('-password');
    //         if(!users) return res.status(400).json({msg: "User does not exist."});
    //         res.json(users);
    //     } catch (error) {
    //         return res.status(500).json({msg: error.message});
    //     }
    // },
    // updateUser: async(req, res) => {
    //     try {
    //         const {name, avatar} = req.body;
    //         await User.findByIdAndUpdate({_id: req.user.id}, {
    //             name, avatar
    //         });
    //         res.json({msg: "Update Success!"});
    //     } catch (error) {
    //         return res.status(500).json({msg: error.message});
    //     }
    // },
    // deleteUser: async(req, res) => {
    //     try {
    //         await User.findByIdAndDelete(req.user.id);
    //         res.json({msg: "Delete Success!"});
    //     } catch (error) {
    //         return res.status(500).json({msg: error.message});
    //     }
    // }

}

const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1d'});
}
const createRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'});
}

module.exports = userController;