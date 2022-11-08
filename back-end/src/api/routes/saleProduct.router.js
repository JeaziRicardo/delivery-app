const { Router } = require('express');
const salesProductController = require('../controllers/salesProduct.controller');

const salesProductRoute = Router();

salesProductRoute.get('/:id', salesProductController.getFullSale);
salesProductRoute.put('/:id', salesProductController.updateSaleStatus);
module.exports = salesProductRoute;