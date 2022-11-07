const { Sale } = require('../../database/models');
const { validateToken } = require('../helpers/jwtHelper');
const { getUserByEmail } = require('./user.service');

const create = async (saleObject, token) => {
  // console.log('DENTRO SERVICE', saleObject);
  const { email } = validateToken(token);
  const userId = await getUserByEmail(email);
  const result = await Sale.create({ ...saleObject, userId });
  // console.log('RESULT', result.id);
  return result;
};

module.exports = { create };
