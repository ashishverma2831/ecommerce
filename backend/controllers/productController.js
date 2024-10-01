const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const Product = require('../models/productModel');
const APIFilters = require('../utils/apiFilters');

const productController = {
    getProducts: catchAsyncErrors(async (req, res) => {
        // res.send('getProducts');
        
        const resPerPage = 1;
        const apiFilters = new APIFilters(Product,req.query).search().filters();
        let products = await apiFilters.query;
        let filteredProductsCount = products.length;
        // const products = await Product.find({});
        apiFilters.pagination(resPerPage);
        products = await apiFilters.query.clone();

        res.status(200).json({ 
            filteredProductsCount,
            products,
        });
    }),
    createProduct: catchAsyncErrors(async (req, res) => {
        // res.send('createProduct');

        // const { name } = req.body;
        // const existingProduct = await Product.findOne({name});
        // if (existingProduct) {
        //     return next(new ErrorHandler('Product already exists', 400));
        // }
        req.body.user = req.user._id;
        const product = await Product.create(req.body);
        res.status(201).json({
            product
        });
    }),
    updateProduct: catchAsyncErrors(async (req, res) => {
        // res.send('updateProduct');
        let product = await Product.findById(req?.params?.id);
        if (!product) {
            // return next(new ErrorHandler('Product not found', 404));
            return res.status(404).json({ msg: "Product not found" });
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
            // return next(new ErrorHandler('Product not found', 404));
            return res.status(404).json({ msg: "Product not found" });
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
            // return next(new ErrorHandler('Product not found', 404));
            return res.status(404).json({ msg: "Product not found" });
        }
        res.status(200).json({ product });
    }),

}

module.exports = productController;