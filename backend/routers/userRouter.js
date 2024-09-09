const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

// router.get('/register', userController.register);
router.route('/register').post(userController.register);
router.route('/refresh_token').post(userController.refreshToken);
router.route('/login').post(userController.login);
// router.route('/logout').get(userController.logout);
router.get('/user-info',auth, userController.getUser);
router.get('/logout',auth, userController.logout);
// router.get('/all', userController.getAllUsers);
// router.put('/update',auth, userController.updateUser);
// router.delete('/delete',auth, userController.deleteUser);


module.exports = router;