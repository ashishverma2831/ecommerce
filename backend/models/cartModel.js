const { Schema, model } = require("mongoose");

const cartSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    productId:{
        type: Schema.Types.ObjectId,
        ref: 'product'
    },
    quantity:{
        type: Number,
        default: 1,
    },
    price:{
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true,
        ref: 'color'
    },
    size: {
        type: String,
        required: true,
        ref: 'size'
    }
},{timestamps: true})

module.exports = model('cart', cartSchema);