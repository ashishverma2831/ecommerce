const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Order = require("../models/orderModel");
const ErrorHandler = require("../utils/errorHandler");
const Product = require("../models/productModel");

const orderController = {
    newOrder: catchAsyncErrors(async (req, res, next) => {
        const {
            orderItems,
            shippingInfo,
            itemsPrice,
            taxAmount,
            shippingAmount,
            totalAmount,
            paymentMethod,
            paymentInfo,
        } = req.body;

        const order = await Order.create({
            orderItems,
            shippingInfo,
            itemsPrice,
            taxAmount,
            shippingAmount,
            totalAmount,
            paymentMethod,
            paymentInfo,
            user: req.user._id,
        });

        res.status(200).json({
            order,
        });
    }),
    myOrders: catchAsyncErrors(async (req, res, next) => { }),
    getOrderDetails: catchAsyncErrors(async (req, res, next) => { }),
    allOrders: catchAsyncErrors(async (req, res, next) => { }),
    updateOrder: catchAsyncErrors(async (req, res, next) => { }),
    deleteOrder: catchAsyncErrors(async (req, res, next) => { }),
}

module.exports = orderController;