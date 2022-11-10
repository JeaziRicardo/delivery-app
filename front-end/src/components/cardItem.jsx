import React, { useState, useEffect, useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import DeliveryContext from '../context/DeliveryContext';
import { setCart } from '../helpers/cart.helper';
import { Item } from '../style/CustomerProducts';

export default function CardItem({ nome, preco, image, index }) {
  const [quantidade, setQuantidade] = useState(0);
  const { setCartListItens } = useContext(DeliveryContext);

  const useDidMountEffect = (fn, inputs) => {
    const didMountRef = useRef(false);

    useEffect(() => {
      if (didMountRef.current) {
        fn();
      } else {
        didMountRef.current = true;
      }
    }, inputs);
  };

  useDidMountEffect(() => {
    setCartListItens((prev) => setCart(prev, { nome, preco, quantidade, image }));
  }, [quantidade]);

  return (
    <Item>
      <img
        data-testid={ `customer_products__img-card-bg-image-${index}` }
        src={ image }
        alt={ image }
      />
      <hr />
      <p
        data-testid={ `customer_products__element-card-title-${index}` }
      >
        {nome}

      </p>
      <p
        data-testid={ `customer_products__element-card-price-${index}` }
      >
        {`R$ ${preco.replace('.', ',')}`}
      </p>
      <div>
        <button
          data-testid={ `customer_products__button-card-rm-item-${index}` }
          type="button"
          disabled={ quantidade === 0 }
          onClick={ () => {
            setQuantidade((prev) => (prev === 0 ? 0 : prev - 1));
          } }
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${index}` }
          type="number"
          name="item_quant"
          id="input-card-quantity"
          value={ quantidade }
          onChange={ ({ target }) => {
            setQuantidade(() => Number(target.value));
          } }
        />
        <button
          data-testid={ `customer_products__button-card-add-item-${index}` }
          type="button"
          onClick={ () => {
            setQuantidade((prev) => prev + 1);
          } }
        >
          +
        </button>
      </div>
    </Item>
  );
}

CardItem.propTypes = {
  nome: PropTypes.string.isRequired,
  preco: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
