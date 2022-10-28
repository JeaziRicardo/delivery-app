const { User } = require('../../database/models/');
const CustomError = require('../error/CustomError');
const md5 = require('md5');
const bcrypt = require('bcrypt');
const getAllUsers = async () => {
  const users = await User.findAll();
  return users;
}

const findByEmail = async ({ email, password }) => {
  const userExists = await User.findOne({ where: { email } });
  console.log(password);
  if (!userExists) throw new CustomError(404, 'Not found');
  if (md5(password) === userExists.password) {
    return { email }
  }
};

module.exports = { getAllUsers, findByEmail };
