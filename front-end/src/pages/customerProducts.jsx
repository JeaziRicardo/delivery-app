import React, { useEffect, useState, useContext } from 'react';
import CardItem from '../components/cardItem';
import Navbar from '../components/navbar';
import DeliveryContext from '../context/DeliveryContext';
import { getProducts } from '../helpers/api';
import { getTotalCart } from '../helpers/cart.helper';
import { getItem } from '../helpers/localStorage.helper';

export default function CustomerProducts() {
  const [productData, setProductData] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const { sumItem } = useContext(DeliveryContext);
  const getTotal = getTotalCart();

  useEffect(() => {
    const axiosApi = async () => {
      const response = await getProducts();
      setProductData(response.data);
    };
    axiosApi();
  }, []);

  useEffect(() => {
    setTotalValue(getTotal);
  }, [sumItem]);

  const { name: userLoggedName } = getItem();

  return (
    <div>
      <Navbar name={ userLoggedName } />
      {productData
        .map(({ name, price, urlImage }, index) => (
          <CardItem
            key={ index }
            nome={ name }
            preco={ price }
            image={ urlImage }
            index={ index + 1 }
          />
        ))}
      <button
        type="button"
        data-testid="customer_checkout__element-order-total-price"
      >
        {`Ver carrinho: R$ ${totalValue.toFixed(2)}`}
      </button>
    </div>
  );
}
