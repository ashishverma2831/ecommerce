const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

router.route('/new').post(isAuthenticatedUser, orderController.newOrder);

module.exports = router;