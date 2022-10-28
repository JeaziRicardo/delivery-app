const { User } = require('../../database/models');
const CustomError = require('../error/CustomError');

const findByEmail = async ({ email }) => {
  const userExists = await User.findOne({ where: { email } });

  if (!userExists) throw new CustomError(404, 'Not found');
  
  return true;
};

module.exports = { findByEmail };