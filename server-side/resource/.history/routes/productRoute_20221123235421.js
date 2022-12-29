const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const verify = require('../middleware/jwtVerifier');

router.use(verify);

router.route('/', verify)
    .get(productController.fetchAll)
    .post()
    .patch()
    .delete();