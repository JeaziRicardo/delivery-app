const { Router } = require('express');
const saleController = require('../controllers/sale.controller');

const saleRouter = Router();

saleRouter.post('/checkout', saleController.create);
saleRouter.get('/', saleController.getAllSales);
saleRouter.get('/:id', saleController.getSaleById);
saleRouter.get('/products/:id', saleController.getSalesProductsById);

module.exports = saleRouter;