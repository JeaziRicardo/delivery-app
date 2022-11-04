const { Sale } = require('../../database/models');
const { validateToken } = require('../helpers/jwtHelper');

const create = async (saleObject, token) => {
  console.log('DENTRO SERVICE', saleObject);
  validateToken(token);
  const result = await Sale.create({ ...saleObject });
  console.log('RESULT', result);
  return result.id;
};

module.exports = { create };
