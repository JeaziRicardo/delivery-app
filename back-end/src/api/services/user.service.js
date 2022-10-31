const md5 = require('md5');
const { User } = require('../../database/models');
const CustomError = require('../error/CustomError');

const getAllUsers = async () => {
  const users = await User.findAll();
  return users;
}; 
const create = async (newUser) => {
  const { email, password } = newUser;
  const emailAlreadyExists = await User.findOne({ where: { email } });
  const hashedPassword = mds(password)
  if (emailAlreadyExists) {
    throw new CustomError(409,'Conflict')
  }
  const createdUser = await User.create({...newUser,password: hashedPassword});
  return createdUser;
};

const findByEmail = async ({ email, password }) => {
  const userExists = await User.findOne({ where: { email } });
  if (!userExists) throw new CustomError(404, 'User not found');
  if (md5(password) === userExists.password) {
    return { email };
  }
  throw new CustomError(404, 'Invalid password');
};

module.exports = { getAllUsers, findByEmail,create };
