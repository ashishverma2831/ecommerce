const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

router.route('/new').post(isAuthenticatedUser, orderController.newOrder);
router.route('/:id').get(isAuthenticatedUser, orderController.getOrderDetails);
router.route('/me/myorders').get(isAuthenticatedUser, orderController.myOrders);

router.route('/admin/orders').get(isAuthenticatedUser, authorizeRoles('admin'), orderController.allOrders);
router.route('/admin/order/:id').put(isAuthenticatedUser, authorizeRoles('admin'), orderController.updateOrder);
router.route('/admin/order/:id').delete(isAuthenticatedUser, authorizeRoles('admin'), orderController.deleteOrder);

module.exports = router;