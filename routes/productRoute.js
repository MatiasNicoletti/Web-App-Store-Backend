const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.route('')
    .post(productController.create)
    .get(productController.getAll)
    .delete(productController.deleteAll);

router.route('/:id')
    .get(productController.getById)
    .put(productController.update);

module.exports = router; 