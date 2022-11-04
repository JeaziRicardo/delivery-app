const jwt = require('jsonwebtoken');
const jwtKey = require('fs').readFileSync('../back-end/jwt.evaluation.key', { encoding: 'utf-8' });
const CustomError = require('../error/CustomError');

const createToken = (email) => {
  const token = jwt.sign({
    email,
  }, jwtKey,
    { algorithm: 'HS256', expiresIn: '1d' });
  return token;
};

const validateToken = (token) => {
  try {
    const data = jwt.verify(token, jwtKey);
    return data;
  } catch (error) {
    throw new CustomError(401, 'Token must be a valid token');
  }
};

module.exports = { createToken, validateToken };