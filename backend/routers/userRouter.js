const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// router.get('/register', userController.register);
router.route('/register').post(userController.register);
router.route('/refresh_token').post(userController.refreshToken);

module.exports = router;