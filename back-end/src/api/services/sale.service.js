const { Sale } = require('../../database/models');
const { validateToken } = require('../helpers/jwtHelper');
const { getUserByEmail } = require('./user.service');

const create = async (saleObject, token) => {
  const { email } = validateToken(token);
  const userId = await getUserByEmail(email);
  const result = await Sale.create({ ...saleObject, userId });
  return result;
};

const getAllSales = async () => {
  const result = await Sale.findAll();
  return result;
};

const getSaleById = async (saleId) => {
  const result = await Sale.findOne({ where: { id: saleId } });
  return result;
};

module.exports = { create, getAllSales, getSaleById };
