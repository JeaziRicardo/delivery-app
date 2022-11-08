const { Router } = require('express');
const salesProductController = require('../controllers/salesProduct.controller');


const salesProductRoute = Router();

salesProductRoute.get('/:id', salesProductController.getFullSale);

module.exports = salesProductRoute;