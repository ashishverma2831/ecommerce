const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const Product = require('../models/productModel');

const productController = {
    getProducts: catchAsyncErrors(async (req, res) => {
        // res.send('getProducts');
        const products = await Product.find({});
        res.status(200).json({ products });
    }),
    createProduct: catchAsyncErrors(async (req, res) => {
        // res.send('createProduct');

        // const { name } = req.body;
        // const existingProduct = await Product.findOne({name});
        // if (existingProduct) {
        //     return next(new ErrorHandler('Product already exists', 400));
        // }

        const product = await Product.create(req.body);
        res.status(201).json({
            product
        });
    }),
    updateProduct: catchAsyncErrors(async (req, res) => {
        // res.send('updateProduct');
        let product = await Product.findById(req?.params?.id);
        if (!product) {
            return next(new ErrorHandler('Product not found', 404));
        }
        product = await Product.findByIdAndUpdate(req?.params?.id, req.body, {
            new: true,
        });
        res.status(200).json({
            product
        });
    }),
    deleteProduct: catchAsyncErrors(async (req, res) => {
        // res.send('deleteProduct');
        const product = await Product.findById(req?.params?.id);
        if (!product) {
            return next(new ErrorHandler('Product not found', 404));
        }
        await product.deleteOne();
        res.status(200).json({
            message: "Product Deleted",
        });
    }),
    getProductDetails: catchAsyncErrors(async (req, res) => {
        // res.send('getProductDetails');
        const product = await Product.findById(req?.params?.id);
        if (!product) {
            return next(new ErrorHandler('Product not found', 404));
        }
        res.status(200).json({ product });
    }),

}

module.exports = productController;