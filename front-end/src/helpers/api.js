import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001',
});

const postLogin = async ({ email, password }) => instance
  .post('login', { email, password })
  .catch((error) => {
    console.log(error);
    return null;
  });

export default postLogin;
