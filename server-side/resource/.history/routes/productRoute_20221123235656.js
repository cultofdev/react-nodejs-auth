const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const jwtVerifier = require('../middleware/jwtVerifier');

router.use(jwtVerifier);

router.route('/')
    .get(productController.fetchAll)
    .post()
    .patch()
    .delete();