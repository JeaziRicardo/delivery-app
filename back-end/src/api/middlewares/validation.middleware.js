const CustomError = require('../error/CustomError');

const validationRequisiton = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) throw new CustomError(404, 'Missing Data');

  next();
};

module.exports = validationRequisiton;