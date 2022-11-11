import React, { useContext } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { getTotalCart, removeCartItem } from '../helpers/cart.helper';
import DeliveryContext from '../context/DeliveryContext';
import SaleForm from './saleForm';
import { ContainerForm } from '../style/checkoutProducts';

export default function CheckoutForm() {
  const { cartListItens, setCartListItens } = useContext(DeliveryContext);
  return (
    <ContainerForm>
      <h2>Finalizar Pedido</h2>
      <table>
        <tbody>
          {cartListItens.map((product, index) => (
            <tr key={ index }>
              <td
                data-testid={ `customer_checkout__element-order-table-name-${index}` }
              >
                {product.nome}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                {`R$${product.preco.replace('.', ',')}`}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
              >
                {`X${product.quantidade}`}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                {`R$${(product.quantidade * product.preco).toFixed(2).replace('.', ',')}`}
              </td>
              <td>
                <button
                  type="button"
                  className="remove-btn"
                  data-testid={ `customer_checkout__element-order-table-remove-${index}` }
                  onClick={
                    () => setCartListItens(removeCartItem(cartListItens, product.nome))
                  }
                >
                  <FaRegTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <span
        className="totalPrice"
        data-testid="customer_checkout__element-order-total-price"
      >
        {`Total: ${getTotalCart(cartListItens).toFixed(2).replace('.', ',')}`}
      </span>
      <h2>Detalhes e Endereço para Entrega</h2>
      <SaleForm />
    </ContainerForm>
  );
}
