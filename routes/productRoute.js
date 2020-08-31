const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.route('')
    .post(productController.create);

router.route('/:id')
    .get(productController.getById);

module.exports = router; 