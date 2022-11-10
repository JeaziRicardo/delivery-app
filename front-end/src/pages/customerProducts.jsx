import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { BsCart, BsCartPlus } from 'react-icons/bs';
import CardItem from '../components/cardItem';
import Navbar from '../components/navbar';
import DeliveryContext from '../context/DeliveryContext';
import { getProducts } from '../helpers/api';
import { getTotalCart } from '../helpers/cart.helper';
import { getItem } from '../helpers/localStorage.helper';
import { ContainerItems, ContainerProducts, FloatCar } from '../style/CustomerProducts';

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
      <ContainerProducts>
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
        <FloatCar
          data-testid="customer_products__button-cart"
          onClick={ () => history.push('/customer/checkout') }
          disabled={ totalValue === 0 }
        >
          {cartListItens.length > 0 ? <BsCartPlus /> : <BsCart />}
          <span
            type="button"
            data-testid="customer_products__checkout-bottom-value"
          >
            {`R$${totalValue.toFixed(2).replace('.', ',')}`}
          </span>
        </FloatCar>
      </ContainerProducts>
    </div>
  );
}
