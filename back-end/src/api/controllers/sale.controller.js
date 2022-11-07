const saleService = require('../services/sale.service');
const salesProductsService = require('../services/saleProducts.service');
const productService = require('../services/product.service');

const create = async (req, res) => {
  const { authorization: token } = req.headers;

  const { cartItems, ...saleData } = req.body;

  const sale = await saleService.create(saleData, token);
  
  cartItems.forEach(async (item) => {
    const productId = await productService.findOne(item.nome);
    await salesProductsService.create(sale.id, productId, item.quantidade);
  });
  
  return res.status(201).json(sale);
};

const getAllSales = async (req, res) => {
  const result = await saleService.getAllSales();
  return res.status(200).json(result);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;

  const sale = await saleService.getSaleById(id);

  return res.status(200).json(sale);
};

const getSalesProductsById = async (req, res) => {
  const { id } = req.params;

  const saleProducts = await salesProductsService.getBySaleId(id);

  return res.status(200).json(saleProducts);
};

module.exports = { create, getAllSales, getSaleById, getSalesProductsById };