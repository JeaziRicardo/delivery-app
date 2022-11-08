const removeCartItem = (cartList, nome) => {
  const newCartList = cartList.filter((element) => element.nome !== nome);
  return newCartList;
};

const setCart = (cartList = [], { nome, preco, quantidade }) => {
  const newCartList = removeCartItem(cartList, nome);

  if (quantidade !== 0) {
    const storage = [...newCartList, { nome, quantidade, preco }];

    return storage;
  }
  return newCartList;
};

const getTotalCart = (cartList) => {
  const totalValue = cartList
    .reduce((acc, curr) => (curr.preco * curr.quantidade) + acc, 0);
  return Number(totalValue);
};

module.exports = { removeCartItem, setCart, getTotalCart };
