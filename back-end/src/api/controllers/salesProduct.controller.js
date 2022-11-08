const salesProductsService = require('../services/saleProducts.service');

const getFullSale = async (req, res) => {
  const { id } = req.params;

  const result = await salesProductsService.getFullSale(id);
  return res.status(200).json(result);
};

const updateSaleStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const result = await salesProductsService.updateSaleStatus(id, status);
  return res.status(200).json(result);
};

module.exports = { getFullSale, updateSaleStatus };