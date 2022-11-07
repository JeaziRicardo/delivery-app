import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar';
import { getAllSellers, getSaleById } from '../helpers/api';
import DeliveryContext from '../context/DeliveryContext';
import { getItem } from '../helpers/localStorage.helper';

// import { getTotalCart } from '../helpers/cart.helper';

export default function OrderDetails() {
  const [sale, setSale] = useState({});
  const [seller, setSeller] = useState('');
  const { cartListItens } = useContext(DeliveryContext);
  const { name: userLoggedName } = getItem();
  // const [productsDetails, setProductsDetails] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    const axiosApi = async () => {
      const { data } = await getSaleById(id);
      setSale(data);

      const getSellers = await getAllSellers();

      const filteredSeller = getSellers.data.find((user) => user.id === data.sellerId);

      setSeller(filteredSeller.name);
    };
    axiosApi();
  }, []);

  const fullDate = sale.saleDate.split('T');
  const [year, month, day] = fullDate[0].split('-');

  return (
    seller
    && (
      <div>
        <Navbar name={ userLoggedName } />
        <h1>Detalhes do Pedido</h1>
        <span>
          Pedido
          {id}
        </span>
        <span>
          P.Vendedora
          {seller}
        </span>
        <span>
          {`${day}/${month}/${year}`}
        </span>
        <span>
          {sale.status}
        </span>
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
                  data-testid={
                    `customer_checkout__element-order-table-quantity-${index}`
                  }
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
              </tr>
            ))}
          </tbody>

        </table>
      </div>)
  );
}
