const { SalesProduct } = require('../../database/models');

const create = async (saleId, productId, quantity) => {
  const newSaleProduct = {
    saleId,
    productId,
    quantity,
  };
  const result = await SalesProduct.create({ ...newSaleProduct });
  return result;
};

const getBySaleId = async (saleId) => {
  const result = await SalesProduct.findAll({ where: { saleId } });
  return result;
};

module.exports = { create, getBySaleId };