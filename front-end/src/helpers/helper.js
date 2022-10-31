const axios = require('axios');

const instance = axios.create({
  baseURL: 'http://localhost:3001',
});

const login = async ({ email, password }) => instance
  .post('login', { email, password })
  .catch((error) => {
    console.log(error);
    return null;
  });

module.exports = { login };
