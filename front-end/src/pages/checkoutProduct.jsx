import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/navbar';
import { getItem } from '../helpers/localStorage.helper';
import { getTotalCart, removeCartItem } from '../helpers/cart.helper';
import DeliveryContext from '../context/DeliveryContext';
import { getAllSellers, postSale } from '../helpers/api';

export default function CheckoutProduct() {
  const { name: userLoggedName } = getItem();
  const { cartListItens, setCartListItens } = useContext(DeliveryContext);
  const [sellers, setSellers] = useState([]);
  const [choosedSeller, setChoosedSeller] = useState('');

  const [endereco, setEndereco] = useState('');
  const [numEndereco, setNumEndereco] = useState('');

  useEffect(() => {
    const axiosApi = async () => {
      const response = await getAllSellers();
      const filteredSellers = response.data.filter((user) => user.role === 'seller');
      setSellers(filteredSellers);
    };
    axiosApi();
  }, []);

  const history = useHistory();

  const sendPost = async () => {
    console.log('vendedor', choosedSeller);
    const saleObject = {
      totalPrice: Number(getTotalCart(cartListItens)).toFixed(2),
      deliveryAddress: endereco,
      deliveryNumber: numEndereco,
      status: 'Pendente',
      sellerId: choosedSeller,
    };
    console.log(saleObject);
    const { token } = getItem();
    const saleID = await postSale(saleObject, token);
    history.push(`/customer/orders/${saleID.data}`);
  };

  return (
    <div>
      <Navbar name={ userLoggedName } />
      <h2>Finalizar Pedido</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          {cartListItens.map((product, index) => (
            <tr key={ index }>
              <td
                data-testid={
                  `customer_checkout__element-order-table-item-number-${index}`
                }
              >
                {index + 1}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-name-${index}` }
              >
                {product.nome}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
              >
                {product.quantidade}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                {Number(product.preco).replace('.', ',')}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                {Number(product.quantidade * product.preco).replace('.', ',')}
              </td>
              <td>
                <button
                  type="button"
                  data-testid={ `customer_checkout__element-order-table-remove-${index}` }
                  onClick={
                    () => setCartListItens(removeCartItem(cartListItens, product.nome))
                  }
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
      <p
        data-testid="customer_checkout__element-order-total-price"
      >
        {getTotalCart(cartListItens)}

      </p>
      <h2>Detalhes e Endereço para Entrega</h2>
      <table>
        <thead>
          <tr>
            <th>P.Vendeora Responsável:</th>
            <th>Endereço</th>
            <th>Número</th>
          </tr>
        </thead>

        <td>
          <select
            data-testid="customer_checkout__select-seller"
            onChange={ ({ target }) => setChoosedSeller(target.value) }
            // defaultValue={ ({ target }) => setChoosedSeller(target.value) }
            onSelectCapture={ ({ target }) => setChoosedSeller(target.value) }
          >
            {/* {
              sellers.map((seller, index) => (
                <option
                  key={ index }
                  selected={ index === 0 }
                  value={ seller.id }
                >
                  {seller.name}
                </option>))
            } */}
          </select>
        </td>
        <td>
          <input
            type="text"
            placeholder="Travessa Terceira da Castanheira, Bairro Muruci"
            data-testid="customer_checkout__input-address"
            value={ endereco }
            onChange={ ({ target }) => setEndereco(target.value) }
          />
        </td>
        <td>
          <input
            type="text"
            name="numberAddress"
            id="numberAddress"
            placeholder="198"
            data-testid="customer_checkout__input-address-number"
            value={ numEndereco }
            onChange={ ({ target }) => setNumEndereco(target.value) }
          />
        </td>

      </table>
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ () => sendPost() }
      >
        FINALIZAR PEDIDO
      </button>
    </div>
  );
}
