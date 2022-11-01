const setItem = ({ name, email, token, role = 'customer' }) => {
  const newData = {
    name,
    email,
    token,
    role,
  };
  localStorage.setItem('user', JSON.stringify(newData));
};

const getItem = () => JSON.parse(localStorage.getItem('user'));

const clearStorage = () => {
  localStorage.removeItem('user');
};

module.exports = { setItem, getItem, clearStorage };
