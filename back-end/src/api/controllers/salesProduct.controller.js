const salesProductsService = require('../services/saleProducts.service');

const getFullSale = async (req, res) => {
  const { id } = req.params;

  const result = await salesProductsService.getFullSale(id);
  return res.status(200).json(result);
}

module.exports = { getFullSale };