const express = require('express');
const router = express.Router();

const loginLimiter = require('../middleware/loginLimiter');

router.route('/login').post(loginLimiter);

router.route('/refresh').get();

router.route('/logout').get();