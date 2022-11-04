import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/navbar';
import { getItem } from '../helpers/localStorage.helper';
import { getTotalCart, removeCartItem } from '../helpers/cart.helper';
import DeliveryContext from '../context/DeliveryContext';
import { postSale } from '../helpers/api';

export default function CheckoutProduct() {
  const { name: userLoggedName } = getItem();
  const { cartListItens, setCartListItens } = useContext(DeliveryContext);
  const [vendedor, setVendedor] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numEndereco, setNumEndereco] = useState('');

  const history = useHistory();

  const sendPost = async () => {
    const saleObject = {
      totalPrice: Number(getTotalCart(cartListItens)).toFixed(2).replace('.', ','),
      deliveryAddress: endereco,
      deliveryNumber: numEndereco,
      status: 'Pendente',
    };
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
                {product.preco.replace('.', ',')}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                {Number(product.quantidade * product.preco).toFixed(2).replace('.', ',')}
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
        {Number(getTotalCart(cartListItens)).toFixed(2).replace('.', ',')}

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
            value={ vendedor }
            data-testid="customer_checkout__select-seller"
          >
            <option
              value="a"
              onChange={ ({ target }) => setVendedor(target.value) }
            >
              Fulano De Tal
            </option>
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
