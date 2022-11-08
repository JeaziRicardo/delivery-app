const { Router } = require('express');
const saleController = require('../controllers/sale.controller');
const salesProductController = require('../controllers/salesProduct.controller');

const saleRouter = Router();

saleRouter.post('/checkout', saleController.create);
saleRouter.get('/orders/:id', salesProductController.getSaleByUser);
saleRouter.get('/:id', saleController.getSaleById);
saleRouter.get('/products/:id', saleController.getSalesProductsById);

module.exports = saleRouter;