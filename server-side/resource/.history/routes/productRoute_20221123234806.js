const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const verify = require('../middleware/jwtVerifier');

router.route('/all', verify).post(productController.fetchAll);

router.route('/').get();