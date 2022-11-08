const { SalesProduct, Sale, Product } = require('../../database/models');

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

const getFullSale = async (saleId) => {
  const result = await Sale.findAll({ where: { id: saleId }, include: { model: Product, as: 'sales', attributes: { exclude: ['urlImage', 'id'] } } });
  return result;
}

module.exports = { create, getBySaleId, getFullSale };