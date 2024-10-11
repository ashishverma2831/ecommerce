const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { isAuthenticatedUser } = require('../middleware/auth');

router.route('/register').post(userController.register);
// router.route('/refresh_token').post(userController.refreshToken);
router.route('/login').post(userController.login);
router.route('/logout').get(userController.logout);
router.route('/password/forgot').post(userController.forgotPassword);
router.route('/password/reset/:token').put(userController.resetPassword);
router.route('/me').get(isAuthenticatedUser,userController.getUserProfile);
// router.get('/user-info', userController.getUser);
// router.get('/logout',auth, userController.logout);
// router.get('/all', userController.getAllUsers);
// router.put('/update-user', userController.updateUser);
// router.delete('/delete',auth, userController.deleteUser);
// router.get('/user-info/:id', userController.getUserById);
// router.get('/get-user-cart', userController.getUserCart);
// router.post('/add-to-cart', userController.addToCart);


module.exports = router;