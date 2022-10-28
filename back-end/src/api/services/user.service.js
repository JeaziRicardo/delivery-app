const { User } = require('../../database/models/');
const CustomError = require('../error/CustomError');
const bcrypt = require('bcrypt');
const getAllUsers = async () => {
  const users = await User.findAll();
  return users;
}

const findByEmail = async ({ email, password }) => {
  const userExists = await User.findOne({ where: { email } });

  if (!userExists) throw new CustomError(404, 'Not found');

  if (bcrypt.compareSync(password, userExists.password)) return { email }
};

module.exports = { getAllUsers, findByEmail };
