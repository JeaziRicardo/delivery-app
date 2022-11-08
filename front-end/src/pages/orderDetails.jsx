import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Navbar from '../components/navbar';
import { getSaleById, getSellerById, updateSaleStatus } from '../helpers/api';

import { getItem } from '../helpers/localStorage.helper';

export default function OrderDetails() {
  const [saleData, setSaleData] = useState({});
  const [seller, setSeller] = useState('');
  const { name: userLoggedName } = getItem();
  const [delivered, setDelivered] = useState('Pendente');
  const { location: { state } } = useHistory();

  const { id } = useParams();
  useEffect(() => {
    const axiosApi = async () => {
      const { data } = await getSaleById(id);
      setSaleData(data[0]);
      setDelivered(data[0].status);
      const getSeller = await getSellerById(data[0].sellerId);
      setSeller(getSeller.data.name);
    };
    axiosApi();
  }, []);

  useEffect(() => {
    if (delivered === 'Entregue') {
      const axiosApi = async () => {
        await updateSaleStatus(id, 'Entregue');
      };
      axiosApi();
    }
  }, [delivered]);

  let [year, month, day] = [];

  if (saleData.saleDate !== undefined) {
    const fullDate = (saleData.saleDate).split('T');
    [year, month, day] = fullDate[0].split('-');
  }

  return (
    seller
    && (
      <div>
        <Navbar name={ userLoggedName } />
        <h1>Detalhes do Pedido</h1>
        <span
          data-testid="customer_order_details__element-order-details-label-order-id"
        >
          Pedido -
          {id}
        </span>
        <span
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          P.Vendedora -
          {seller}
        </span>
        <span
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          { `${day}/${month}/${year}` }
        </span>
        <span
          data-testid={
            `customer_order_details__element-order-details-label-delivery-status${id}`
          }
        >
          {delivered}
        </span>
        <button
          type="button"
          onClick={ () => setDelivered('Entregue') }
          data-testid="customer_order_details__button-delivery-check"
          disabled={ state || delivered === 'Entregue' }
        >
          MARCAR COMO ENTREGUE
        </button>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Descrição</th>
              <th>Quantidade</th>
              <th>Valor Unitário</th>
              <th>Sub-total</th>
            </tr>
          </thead>
          <tbody>
            {(saleData.sales).map((product, index) => (
              <tr key={ index }>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-item-number-${index}`
                  }
                >
                  {index + 1}
                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-name-${index}`
                  }
                >
                  {product.name}
                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-quantity-${index}`
                  }
                >
                  {product.SalesProduct.quantity}
                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-unit-price-${index}`
                  }
                >
                  {product.price}
                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-sub-total-${index}`
                  }
                >
                  {(product.SalesProduct.quantity * product.price).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        Valor Total:
        <span
          data-testid="customer_order_details__element-order-total-price"
        >
          {(saleData.totalPrice).replace('.', ',')}
        </span>
      </div>)
  );
}
