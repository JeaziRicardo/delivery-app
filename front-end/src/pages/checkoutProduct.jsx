import React, { useContext } from 'react';
import Navbar from '../components/navbar';
import { getItem } from '../helpers/localStorage.helper';
import { getTotalCart, removeCartItem } from '../helpers/cart.helper';
import DeliveryContext from '../context/DeliveryContext';
import SaleForm from '../components/saleForm';

export default function CheckoutProduct() {
  const { name: userLoggedName } = getItem();
  const { cartListItens, setCartListItens } = useContext(DeliveryContext);

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
                {(product.quantidade * product.preco).toFixed(2).replace('.', ',')}
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
        {getTotalCart(cartListItens).toFixed(2).replace('.', ',')}

      </p>
      <h2>Detalhes e Endereço para Entrega</h2>
      <SaleForm />
    </div>
  );
}
