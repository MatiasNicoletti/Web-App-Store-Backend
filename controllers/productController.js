const handlerController = require('./handlerController');
const Product = require('../models/productModel');

exports.create = handlerController.create(Product);
