const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const Product = require('../models/productModel');
const APIFilters = require('../utils/apiFilters');

const productController = {
    getProducts: catchAsyncErrors(async (req, res, next) => {
        const resPerPage = 4;
        const apiFilters = new APIFilters(Product, req.query).search().filters();
        let products = await apiFilters.query;
        let filteredProductsCount = products.length;

        apiFilters.pagination(resPerPage);
        products = await apiFilters.query.clone();

        res.status(200).json({
            resPerPage, 
            filteredProductsCount,
            products,
        });
    }),
    createProduct: catchAsyncErrors(async (req, res,next) => {
        req.body.user = req.user._id;
        const product = await Product.create(req.body);
        res.status(201).json({
            product
        });
    }),
    updateProduct: catchAsyncErrors(async (req, res,next) => {
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
    deleteProduct: catchAsyncErrors(async (req, res,next) => {
        const product = await Product.findById(req?.params?.id);
        if (!product) {
            return next(new ErrorHandler('Product not found', 404));
        }
        await product.deleteOne();
        res.status(200).json({
            message: "Product Deleted",
        });
    }),
    getProductDetails: catchAsyncErrors(async (req, res, next) => {
        const product = await Product.findById(req?.params?.id);

        if (!product) {
            return next(new ErrorHandler('Product not found', 404));
        }
        res.status(200).json({ product });
    }),
    createProductReview: catchAsyncErrors(async (req, res,next) => {
        const { rating, comment, productId } = req.body;
        const review = {
            user: req?.user?._id,
            rating: Number(rating),
            comment,
        };
        const product = await Product.findById(productId);
        if (!product) {
            return next(new ErrorHandler("Product not found", 404));
        }
        const isReviewed = product?.reviews?.find(
            (r) => r.user.toString() === req?.user?._id.toString()
        );
        if (isReviewed) {
            product.reviews.forEach((review) => {
                if (review?.user?.toString() === req?.user?._id.toString()) {
                    review.comment = comment;
                    review.rating = rating;
                }
            });
        } else {
            product.reviews.push(review);
            product.numOfReviews = product.reviews.length;
        }
        product.ratings =
            product.reviews.reduce((acc, item) => item.rating + acc, 0) /
            product.reviews.length;

        await product.save({ validateBeforeSave: false });
        res.status(200).json({
            success: true,
        });
    }),
    getProductReviews: catchAsyncErrors(async (req, res,next) => {
        const product = await Product.findById(req.query.id);
        if (!product) {
            return next(new ErrorHandler("Product not found", 404));
        }
        res.status(200).json({
            reviews: product.reviews,
        });
    }),
    deleteReview: catchAsyncErrors(async (req, res,next) => {
        let product = await Product.findById(req.query.productId);
        if (!product) {
            return next(new ErrorHandler("Product not found", 404));
        }
        const reviews = product?.reviews?.filter(
            (review) => review._id.toString() !== req?.query?.id.toString()
        );
        const numOfReviews = reviews.length;
        const ratings =
            numOfReviews === 0
                ? 0
                : product.reviews.reduce((acc, item) => item.rating + acc, 0) /
                numOfReviews;

        product = await Product.findByIdAndUpdate(
            req.query.productId,
            { reviews, numOfReviews, ratings },
            { new: true }
        );

        res.status(200).json({
            success: true,
            product,
        });
    })
}

module.exports = productController;