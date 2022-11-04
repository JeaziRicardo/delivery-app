const { Sale } = require('../../database/models');
const { validateToken } = require('../helpers/jwtHelper');

const create = async (saleObject, token) => {
  validateToken(token);
  const result = await Sale.create({ ...saleObject })
  return result.id
}

module.exports = { create };
