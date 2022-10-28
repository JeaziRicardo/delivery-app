const userService = require('../services/user.service');

const findByEmail = async (req, res) => {
  const { email } = req.body;

  await userService.findByEmail({ email });

  return res.status(200).send();  
};

module.exports = {
  findByEmail,
};