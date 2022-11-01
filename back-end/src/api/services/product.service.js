const { Product } = require('../../database/models');

const getAllProducts = async () => {
  const result = await Product.findAll();
  return result;
};

module.exports = { getAllProducts };