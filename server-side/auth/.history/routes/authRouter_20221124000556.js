const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

const loginLimiter = require('../middleware/loginLimiter');

router.route('/login').post(loginLimiter, authController.login);

router.route('/refresh').post(console.log('HIT'));

router.route('/logout').post(authController.logout);

module.exports = router;