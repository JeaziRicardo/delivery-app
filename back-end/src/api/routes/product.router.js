const { Router } = require('express');
const productController = require('../controllers/product.contoller');

const productRoute = Router();

productRoute.get('/', productController.getAllProducts);

module.exports = productRoute;