const getCart = () => JSON.parse(localStorage.getItem('cart')) || [];
// console.log('getCart', getCart());

const setCart = ({ nome, preco }, quantidade) => {
  const oldArray = getCart();
  const newArray = oldArray.filter((element) => element.nome !== nome);

  const storage = [...newArray, { nome, quantidade, preco }];

  localStorage.setItem('cart', JSON.stringify(storage));
};

module.exports = { setCart };
