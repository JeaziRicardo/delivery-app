const md5 = require('md5');
const { User } = require('../../database/models');
const CustomError = require('../error/CustomError');
const { createToken } = require('../helpers/jwtHelper');

const getAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

const create = async (newUser) => {
  const { name, email, password } = newUser;
  const emailAlreadyExists = await User.findOne({ where: { email } });
  if (emailAlreadyExists) {
    throw new CustomError(409, 'Conflict');
  }
  const hashedPassword = md5(password);
  await User.create({ ...newUser, password: hashedPassword, role: 'customer' });
  const token = createToken(email);

  return {
    name,
    email,
    password: hashedPassword,
    token,
  };
};

const getUserByEmail = async (email) => {
  const userResult = await User.findOne({ where: { email } });
  return userResult.id;
};

const findByEmail = async ({ email, password }) => {
  const userExists = await User.findOne({ where: { email } });
  if (!userExists) throw new CustomError(404, 'User not found');
  if (md5(password) === userExists.password) {
    const { name, role } = userExists;
    const token = createToken(email);
    return { name, email, role, token };
  }
  throw new CustomError(404, 'Invalid password');
};

module.exports = { getAllUsers, findByEmail, create, getUserByEmail };
