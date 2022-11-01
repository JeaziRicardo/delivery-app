const jwt = require('jsonwebtoken');
const jwtKey = require('fs').readFileSync('../back-end/jwt.evaluation.key', { encoding: 'utf-8' });

const createToken = (email) => {
  const token = jwt.sign({
    email,
  }, jwtKey,
    { algorithm: 'HS256', expiresIn: '1d' });
  return token;
};

module.exports = { createToken };