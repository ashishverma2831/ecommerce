const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { isAuthenticatedUser,authorizeRoles } = require('../middleware/auth');

router.route('/get-all-products').get(productController.getProducts);
router.route('/get-product-details/:id').get(productController.getProductDetails);
router.route('/admin/products').get(productController.getProducts);
router.route('/admin/new-product').post(isAuthenticatedUser,authorizeRoles('admin'),productController.createProduct);
router.route('/admin/update-product/:id').put(isAuthenticatedUser,authorizeRoles('admin'),productController.updateProduct);
router.route('/admin/delete-product/:id').delete(isAuthenticatedUser,authorizeRoles('admin'),productController.deleteProduct);

router.route('/reviews').put(isAuthenticatedUser,productController.createProductReview);
router.route('/reviews').get(isAuthenticatedUser,productController.getProductReviews);
router.route('/admin/reviews').delete(isAuthenticatedUser,authorizeRoles('admin'),productController.deleteReview);

module.exports = router;