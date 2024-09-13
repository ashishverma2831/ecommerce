const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        default: 0
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
        type: Number,
        default: 9999999999,
        unique: true
    }
}, {
    timestamps: true
})

module.exports = model('user', userSchema);