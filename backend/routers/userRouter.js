const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

router.route('/register').post(userController.register);
// router.route('/refresh_token').post(userController.refreshToken);
router.route('/login').post(userController.login);
router.route('/logout').get(userController.logout);
router.route('/password/forgot').post(userController.forgotPassword);
router.route('/password/reset/:token').put(userController.resetPassword);
router.route('/me').get(isAuthenticatedUser,userController.getUserProfile);
router.route('/me/update').put(isAuthenticatedUser,userController.updateProfile);
router.route('/password/update').put(isAuthenticatedUser,userController.updatePassword);
router.route('/admin/users').get(isAuthenticatedUser,authorizeRoles('admin'),userController.allUsers);
router.route('/admin/users/:id')
      .get(isAuthenticatedUser,authorizeRoles('admin'),userController.getUserDetails)
      .put(isAuthenticatedUser,authorizeRoles('admin'),userController.updateUser)
      .delete(isAuthenticatedUser,authorizeRoles('admin'),userController.deleteUser);
// router.get('/user-info', userController.getUser);
// router.get('/logout',auth, userController.logout);
// router.get('/all', userController.getAllUsers);
// router.put('/update-user', userController.updateUser);
// router.delete('/delete',auth, userController.deleteUser);
// router.get('/user-info/:id', userController.getUserById);
// router.get('/get-user-cart', userController.getUserCart);
// router.post('/add-to-cart', userController.addToCart);


module.exports = router;