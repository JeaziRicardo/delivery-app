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

const postRegister = async ({ name, email, password }) => instance
  .post('register', { name, email, password })
  .catch((error) => {
    console.log(error);
    return null;
  });

const getProducts = async () => instance
  .get('products')
  .catch((error) => {
    console.log(error);
    return null;
  });

const postSale = async (saleObject, token) => instance
  .post(
    'customer/checkout',
    saleObject,
    { headers: { Authorization: token } },
  ).catch((error) => {
    console.log(error);
    return null;
  });

const getAllSellers = async () => instance
  .get('login')
  .catch((error) => {
    console.log(error);
    return null;
  });

const getSellerById = async (sellerId) => instance
  .get(`login/${sellerId}`)
  .catch((error) => {
    console.log(error);
    return null;
  });

const getOrders = async (email) => instance
  .get(`customer/orders/${email}`)
  .catch((error) => {
    console.log(error);
    return null;
  });

const getSaleById = async (saleId) => instance
  .get(`sales/${saleId}`)
  .catch((error) => {
    console.log(error);
    return null;
  });

const updateSaleStatus = async (saleId, status) => instance
  .put(`sales/${saleId}`, { status })
  .catch((error) => {
    console.log(error);
    return null;
  });

export {
  postLogin,
  postRegister,
  getProducts,
  postSale,
  getAllSellers,
  getOrders,
  getSaleById,
  getSellerById,
  updateSaleStatus,
};
