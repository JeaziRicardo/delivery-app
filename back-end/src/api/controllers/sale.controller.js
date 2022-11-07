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

module.exports = { create };