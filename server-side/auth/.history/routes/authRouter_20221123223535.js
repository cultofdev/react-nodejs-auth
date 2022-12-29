const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

const loginLimiter = require('../middleware/loginLimiter');

// router.route('/login').post(authController.login);

router.route('/login').post(loginLimiter, authController.login);

router.route('/refresh').get(authController.refresh);

router.route('/logout').post(authController.logout);

module.exports = router;