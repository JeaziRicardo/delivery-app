const userService = require('../services/user.service');

const getAllUsers = async (_req, res) => {
  const result = await userService.getAllUsers();
  return res.status(200).json(result);
};

const findByEmail = async (req, res) => {
  const { email, password } = req.body;
  console.log('CHEGOU');
  const result = await userService.findByEmail({ email, password });
  if (!result) return res.status(400).end();
  return res.status(200).json(result);
};
const create = async (req, res) => {
  const user = await userService.create(req.body);
  res.status(201).json({ user });
};

module.exports = {
  getAllUsers,
  findByEmail,
  create,
};