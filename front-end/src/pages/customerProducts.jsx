import React, { useEffect, useState } from 'react';
import CardItem from '../components/cardItem';
import Navbar from '../components/navbar';
// import DeliveryContext from '../context/DeliveryContext';
import { getProducts } from '../helpers/api';
import { getTotalCart } from '../helpers/cart.helper';
// import { setCart } from '../helpers/cart.helper';
import { getItem } from '../helpers/localStorage.helper';

export default function CustomerProducts() {
  const [productData, setProductData] = useState([]);
  // const { fullCarItens } = useContext(DeliveryContext);
  useEffect(() => {
    const axiosApi = async () => {
      const response = await getProducts();
      setProductData(response.data);
    };
    axiosApi();
  }, []);

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
        {`Ver carrinho: R$ ${getTotalCart()}`}
      </button>
    </div>
  );
}
