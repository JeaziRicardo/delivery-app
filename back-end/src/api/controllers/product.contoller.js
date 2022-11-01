const productService = require('../services/product.service');

const getAllProducts = async (_req, res) => {
  const result = await productService.getAllProducts();
  return res.status(200).json(result);
};

module.exports = { getAllProducts };