const { Sale } = require('../../database/models');
const { validateToken } = require('../helpers/jwtHelper');
const { getUserByEmail } = require('./user.service');



const create = async (saleObject, token) => {
  const { email } = validateToken(token);
  const userId = await getUserByEmail(email);
  const result = await Sale.create({ ...saleObject, userId });
  return result.id;
};

module.exports = { create };
