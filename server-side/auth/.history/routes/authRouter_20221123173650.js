const express = require('express');
const { login } = require('../controllers/authController');
const router = express.Router();

const loginLimiter = require('../middleware/loginLimiter');

router.route('/login').post(loginLimiter, login);

router.route('/refresh').get();

router.route('/logout').post();

module.exports = router;