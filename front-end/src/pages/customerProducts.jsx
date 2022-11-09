import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CardItem from '../components/cardItem';
import Navbar from '../components/navbar';
import DeliveryContext from '../context/DeliveryContext';
import { getProducts } from '../helpers/api';
import { getTotalCart } from '../helpers/cart.helper';
import { getItem } from '../helpers/localStorage.helper';
import { ContainerItems } from '../style/customerProducts';

export default function CustomerProducts() {
  const [productData, setProductData] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const { cartListItens } = useContext(DeliveryContext);
  const history = useHistory();

  useEffect(() => {
    const axiosApi = async () => {
      const response = await getProducts();
      setProductData(response.data);
    };
    axiosApi();
  }, []);

  useEffect(() => {
    setTotalValue(getTotalCart(cartListItens));
  }, [cartListItens]);

  const { name: userLoggedName } = getItem();

  return (
    <div>
      <Navbar name={ userLoggedName } />
      <ContainerItems>
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
      </ContainerItems>
      <button
        type="button"
        data-testid="customer_products__button-cart"
        onClick={ () => history.push('/customer/checkout') }
        disabled={ totalValue === 0 }
      >
        Ver Carrinho
      </button>
      <span
        type="button"
        data-testid="customer_products__checkout-bottom-value"
      >
        {totalValue.toFixed(2).replace('.', ',')}
      </span>
    </div>
  );
}
