const getCart = () => JSON.parse(localStorage.getItem('cart')) || [];
// console.log('getCart', getCart());

const setCart = ({ nome, preco }, quantidade) => {
  const oldArray = getCart();
  const newArray = oldArray.filter((element) => element.nome !== nome);

  const storage = [...newArray, { nome, quantidade, preco }];

  localStorage.setItem('cart', JSON.stringify(storage));
};

const getTotalCart = () => {
  const totalArray = getCart();
  const totalValue = totalArray
    .reduce((acc, curr) => (curr.preco * curr.quantidade) + acc, 0);
  return +totalValue;
};

module.exports = { setCart, getTotalCart };
