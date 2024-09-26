const { Schema, model } = require("mongoose");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
        trim: true,
        maxLength: [100, 'Your name cannot exceed 100 characters']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true,
        trim: true,
        maxLength: [100, 'Your email cannot exceed 100 characters']
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
        minLength: [6, 'Your password must be longer than 6 characters'],
        select: false
    },
    avatar: {
        public_id: String,
        url:String
    },
    role: {
        type: String,
        default: 'user'
    },
    cart: {
        type: Array,
        default: []
    },
    address: {
        type: String,
        default: ''
    },
    phone: {
        type: String,
        default: '',
        unique: true,
        maxLength: [10, 'Your phone number cannot exceed 10 numbers']
    },
    // wishlist: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Product'
    // }],
    resetPasswordToken: String,
    resetPasswordExpire: Date
}, {
    timestamps: true
})


userSchema.methods.getJWTToken = function() {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRATION
    });
}

module.exports = model('user', userSchema);