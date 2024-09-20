const productController = {
    getProducts: async (req, res) => {
        // res.send('getProducts');
        const products = await Product.find({});
        res.status(200).json({ products });
    },
    createProduct: async (req, res) => {
        // res.send('createProduct');
        const newProduct = await Product.create(req.body);
        res.status(201).json({ newProduct });
    },
    updateProduct: async (req, res) => {
        // res.send('updateProduct');
        let product = await Product.findById(req?.params?.id);
        if (!product) {
            return res.status(404).json({
                error: "Product not found",
            });
        }
        product = await Product.findByIdAndUpdate(req?.params?.id, req.body, {
            new: true,
        });
        res.status(200).json({
            product,
        });
    },
    deleteProduct: async (req, res) => {
        // res.send('deleteProduct');
        const product = await Product.findById(req?.params?.id);
        if (!product) {
            return res.status(404).json({
                error: "Product not found",
            });
        }
        await product.deleteOne();
        res.status(200).json({
            message: "Product Deleted",
        });
    },
    getProductDetails: async (req, res) => {
        res.send('getProductDetails');
        const product = await Product.findById(req?.params?.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ product });
    },


    getProductsCount: (req, res) => {
        res.send('getProductsCount');
    },
    getProductsStats: (req, res) => {
        res.send('getProductsStats');
    },
    createProductReview: (req, res) => {
        res.send('createProductReview');
    },
    getTopProducts: (req, res) => {
        res.send('getTopProducts');
    },
    getProductsByCategory: (req, res) => {
        res.send('getProductsByCategory');
    },
    getProductsByBrand: (req, res) => {
        res.send('getProductsByBrand');
    },
    getProductsByPrice: (req, res) => {
        res.send('getProductsByPrice');
    },
    getProductsByRating: (req, res) => {
        res.send('getProductsByRating');
    },
    getProductsByStock: (req, res) => {
        res.send('getProductsByStock');
    },
    getProductsByKeyword: (req, res) => {
        res.send('getProductsByKeyword');
    },
    getProductsByFilter: (req, res) => {
        res.send('getProductsByFilter');
    },
    getProductsBySort: (req, res) => {
        res.send('getProductsBySort');
    },
    getProductsByPage: (req, res) => {
        res.send('getProductsByPage');
    },
    getProductsByLimit: (req, res) => {
        res.send('getProductsByLimit');
    },
    getProductsBySearch: (req, res) => {
        res.send('getProductsBySearch');
    },
    getProductsByDiscount: (req, res) => {
        res.send('getProductsByDiscount');
    },
    getProductsByFeatured: (req, res) => {
        res.send('getProductsByFeatured');
    },
    getProductsByNew: (req, res) => {
        res.send('getProductsByNew');
    },
    getProductsByPopular: (req, res) => {
        res.send('getProductsByPopular');
    },
    getProductsBySale: (req, res) => {
        res.send('getProductsBySale');
    },
    getProductsByViewed: (req, res) => {
        res.send('getProductsByViewed');
    },
    getProductsBySold: (req, res) => {
        res.send('getProductsBySold');
    },
    getProductsByAdded: (req, res) => {
        res.send('getProductsByAdded');
    },
    getProductsByUpdated: (req, res) => {
        res.send('getProductsByUpdated');
    },
    getProductsByCategoryAndBrand: (req, res) => {
        res.send('getProductsByCategoryAndBrand');
    },
    getProductsByCategoryAndPrice: (req, res) => {
        res.send('getProductsByCategoryAndPrice');
    },
    getProductsByCategoryAndRating: (req, res) => {
        res.send('getProductsByCategoryAndRating');
    },
    getProductsByCategoryAndStock: (req, res) => {
        res.send('getProductsByCategoryAndStock');
    },
    getProductsByCategoryAndKeyword: (req, res) => {
        res.send('getProductsByCategoryAndKeyword');
    },
    getProductsByCategoryAndFilter: (req, res) => {
        res.send('getProductsByCategoryAndFilter');
    },
    getProductsByCategoryAndSort: (req, res) => {
        res.send('getProductsByCategoryAndSort');
    },
    getProductsByCategoryAndPage: (req, res) => {
        res.send('getProductsByCategoryAndPage');
    },
    getProductsByCategoryAndLimit: (req, res) => {
        res.send('getProductsByCategoryAndLimit');
    },
    getProductsByCategoryAndSearch: (req, res) => {
        res.send('getProductsByCategoryAndSearch');
    },
    getProductsByCategoryAndDiscount: (req, res) => {
        res.send('getProductsByCategoryAndDiscount');
    },
    getProductsByCategoryAndFeatured: (req, res) => {
        res.send('getProductsByCategoryAndFeatured');
    },
    getProductsByCategoryAndNew: (req, res) => {
        res.send('getProductsByCategoryAndNew');
    },
    getProductsByCategoryAndPopular: (req, res) => {
        res.send('getProductsByCategoryAndPopular');
    },
    getProductsByCategoryAndSale: (req, res) => {
        res.send('getProductsByCategoryAndSale');
    },
    getProductsByCategoryAndViewed: (req, res) => {
        res.send('getProductsByCategoryAndViewed');
    },
    getProductsByCategoryAndSold: (req, res) => {
        res.send('getProductsByCategoryAndSold');
    },
    getProductsByCategoryAndAdded: (req, res) => {
        res.send('getProductsByCategoryAndAdded');
    },
    getProductsByCategoryAndUpdated: (req, res) => {
        res.send('getProductsByCategoryAndUpdated');
    },
    getProductsByBrandAndPrice: (req, res) => {
        res.send('getProductsByBrandAndPrice');
    },
    getProductsByBrandAndRating: (req, res) => {
        res.send('getProductsByBrandAndRating');
    },
    getProductsByBrandAndStock: (req, res) => {
        res.send('getProductsByBrandAndStock');
    },
    getProductsByBrandAndKeyword: (req, res) => {
        res.send('getProductsByBrandAndKeyword');
    },
    getProductsByBrandAndFilter: (req, res) => {
        res.send('getProductsByBrandAndFilter');
    },
    getProductsByBrandAndSort: (req, res) => {
        res.send('getProductsByBrandAndSort');
    },
    getProductsByBrandAndPage: (req, res) => {
        res.send('getProductsByBrandAndPage');
    },
    getProductsByBrandAndLimit: (req, res) => {
        res.send('getProductsByBrandAndLimit');
    },
    getProductsByBrandAndSearch: (req, res) => {
        res.send('getProductsByBrandAndSearch');
    },
    getProductsByBrandAndDiscount: (req, res) => {
        res.send('getProductsByBrandAndDiscount');
    },
    getProductsByBrandAndFeatured: (req, res) => {
        res.send('getProductsByBrandAndFeatured');
    },
    getProductsByBrandAndNew: (req, res) => {
        res.send('getProductsByBrandAndNew');
    },
    getProductsByBrandAndPopular: (req, res) => {
        res.send('getProductsByBrandAndPopular');
    },
    getProductsByBrandAndSale: (req, res) => {
        res.send('getProductsByBrandAndSale');
    },
    getProductsByBrandAndViewed: (req, res) => {
        res.send('getProductsByBrandAndViewed');
    },
    getProductsByBrandAndSold: (req, res) => {
        res.send('getProductsByBrandAndSold');
    },
    getProductsByBrandAndAdded: (req, res) => {
        res.send('getProductsByBrandAndAdded');
    },
    getProductsByBrandAndUpdated: (req, res) => {
        res.send('getProductsByBrandAndUpdated');
    },
    getProductsByPriceAndRating: (req, res) => {
        res.send('getProductsByPriceAndRating');
    },
    getProductsByPriceAndStock: (req, res) => {
        res.send('getProductsByPriceAndStock');
    },
    getProductsByPriceAndKeyword: (req, res) => {
        res.send('getProductsByPriceAndKeyword');
    },
    getProductsByPriceAndFilter: (req, res) => {
        res.send('getProductsByPriceAndFilter');
    },
    getProductsByPriceAndSort: (req, res) => {
        res.send('getProductsByPriceAndSort');
    },
    getProductsByPriceAndPage: (req, res) => {
        res.send('getProductsByPriceAndPage');
    },
    getProductsByPriceAndLimit: (req, res) => {
        res.send('getProductsByPriceAndLimit');
    },
    getProductsByPriceAndSearch: (req, res) => {
        res.send('getProductsByPriceAndSearch');
    },
    getProductsByPriceAndDiscount: (req, res) => {
        res.send('getProductsByPriceAndDiscount');
    },
    getProductsByPriceAndFeatured: (req, res) => {
        res.send('getProductsByPriceAndFeatured');
    },
    getProductsByPriceAndNew: (req, res) => {
        res.send('getProductsByPriceAndNew');
    },
    getProductsByPriceAndPopular: (req, res) => {
        res.send('getProductsByPriceAndPopular');
    },
    getProductsByPriceAndSale: (req, res) => {
        res.send('getProductsByPriceAndSale');
    },
    getProductsByPriceAndViewed: (req, res) => {
        res.send('getProductsByPriceAndViewed');
    },
    getProductsByPriceAndSold: (req, res) => {
        res.send('getProductsByPriceAndSold');
    },
    getProductsByPriceAndAdded: (req, res) => {
        res.send('getProductsByPriceAndAdded');
    },
    getProductsByPriceAndUpdated: (req, res) => {
        res.send('getProductsByPriceAndUpdated');
    },
    getProductsByRatingAndStock: (req, res) => {
        res.send('getProductsByRatingAndStock');
    },
    getProductsByRatingAndKeyword: (req, res) => {
        res.send('getProductsByRatingAndKeyword');
    },
    getProductsByRatingAndFilter: (req, res) => {
        res.send('getProductsByRatingAndFilter');
    },
    getProductsByRatingAndSort: (req, res) => {
        res.send('getProductsByRatingAndSort');
    },
    getProductsByRatingAndPage: (req, res) => {
        res.send('getProductsByRatingAndPage');
    },
    getProductsByRatingAndLimit: (req, res) => {
        res.send('getProductsByRatingAndLimit');
    },
    getProductsByRatingAndSearch: (req, res) => {
        res.send('getProductsByRatingAndSearch');
    },
    getProductsByRatingAndDiscount: (req, res) => {
        res.send('getProductsByRatingAndDiscount');
    },
    getProductsByRatingAndFeatured: (req, res) => {
        res.send('getProductsByRatingAndFeatured');
    },
    getProductsByRatingAndNew: (req, res) => {
        res.send('getProductsByRatingAndNew');
    },
    getProductsByRatingAndPopular: (req, res) => {
        res.send('getProductsByRatingAndPopular');
    },
    getProductsByRatingAndSale: (req, res) => {
        res.send('getProductsByRatingAndSale');
    },
    getProductsByRatingAndViewed: (req, res) => {
        res.send('getProductsByRatingAndViewed');
    },
    getProductsByRatingAndSold: (req, res) => {
        res.send('getProductsByRatingAndSold');
    },
    getProductsByRatingAndAdded: (req, res) => {
        res.send('getProductsByRatingAndAdded');
    },
    getProductsByRatingAndUpdated: (req, res) => {
        res.send('getProductsByRatingAndUpdated');
    },
    getProductsByStockAndKeyword: (req, res) => {
        res.send('getProductsByStockAndKeyword');
    },
    getProductsByStockAndFilter: (req, res) => {
        res.send('getProductsByStockAndFilter');
    },
    getProductsByStockAndSort: (req, res) => {
        res.send('getProductsByStockAndSort');
    },
    getProductsByStockAndPage: (req, res) => {
        res.send('getProductsByStockAndPage');
    },
    getProductsByStockAndLimit: (req, res) => {
        res.send('getProductsByStockAndLimit');
    },


}

module.exports = productController;