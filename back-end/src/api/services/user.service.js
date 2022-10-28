const { User } = require('../database/models');

const findByEmail = async ({ email }) => {
  const userExists = await User.findOne({ where: { email } });
  if (!userExists) throw new Error("Not found")
  return true;
}

module.exports = { findByEmail }