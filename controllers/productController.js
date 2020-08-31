const handlerController = require('./handlerController');
const Product = require('../models/productModel');

exports.create = handlerController.create(Product);
exports.getById = handlerController.getById(Product);
exports.getAll = handlerController.getAll(Product);
exports.update = handlerController.update(Product);
exports.deleteAll = handlerController.deleteAll(Product);