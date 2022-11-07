const { Product } = require('../../database/models');

const getAllProducts = async () => {
  const result = await Product.findAll();
  return result;
};

const findOne = async (nome) => {
  const product = await Product.findOne({ where: { name: nome }});
  if (!product) throw new CustomError(404, 'Product not found');
  return product.dataValues.id;
}

module.exports = { getAllProducts, findOne };