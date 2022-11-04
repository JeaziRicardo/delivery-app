const { Router } = require('express');
const saleController = require('../controllers/sale.controller');

const saleRouter = Router();

saleRouter.post('/checkout', saleController.create);

module.exports = saleRouter;