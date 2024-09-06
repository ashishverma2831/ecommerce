const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

// router.get('/register', userController.register);
router.route('/register').post(userController.register);
router.route('/refresh_token').post(userController.refreshToken);
router.route('/login').post(userController.login);
router.route('/logout').get(userController.logout);
router.get('/info',auth, userController.getUser);

module.exports = router;