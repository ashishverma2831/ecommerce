const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.route('/get-all-products').get(productController.getProducts);
router.route('/get-product-details').get(productController.getProductDetails);
router.route('/admin/products').get(productController.getProducts);
router.route('/admin/new-product').post(productController.createProduct);
router.route('/admin/update-product/:id').put(productController.updateProduct);
router.route('/admin/delete-product/:id').delete(productController.deleteProduct);

module.exports = router;