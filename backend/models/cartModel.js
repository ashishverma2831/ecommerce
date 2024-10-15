// const { Schema, model } = require("mongoose");

// const cartSchema = new Schema({
//     userId:{
//         type: String,
//         ref: 'user'
//     },
//     productId:{
//         type: String,
//         ref: 'product'
//     },
//     quantity:{
//         type: Number,
//         default: 1,
//     },
//     price:{
//         type: Number,
//         required: true
//     },
//     color: {
//         type: String,
//         required: true,
//         ref: 'color'
//     },
//     size: {
//         type: String,
//         required: true,
//         ref: 'size'
//     },
//     status: {
//         type: String,
//         default: 'pending'
//     },
//     payment: {
//         type: String,
//         default: 'pending'
//     },
//     address: {
//         type: String,
//         default: ''
//     },
//     phone: {
//         type: String,
//         default: ''
//     },
//     note: {
//         type: String,
//         default: ''
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now
//     },
//     updatedAt: {
//         type: Date,
//         default: Date.now
//     },
//     deletedAt: {
//         type: Date,
//         default: null
//     },
//     deleted: {
//         type: Boolean,
//         default: false
//     },
//     image: {
//         type: String,
//         default: ''
//     },
//     description: {
//         type: String,
//         default: ''
//     }

// },{timestamps: true})

// module.exports = model('cart', cartSchema);