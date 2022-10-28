const userService = require('../services/user.service');

const getAllUsers = async (_req, res) => {
  const result = await userService.getAllUsers();
  return res.status(200).json(result);
}

const findByEmail = async (req, res) => {
  const { email } = req.body;

  const result = await userService.findByEmail({ email });

  return res.status(200).json(result);
};

module.exports = {
  getAllUsers,
  findByEmail,
};