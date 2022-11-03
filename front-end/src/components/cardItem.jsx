import React, { useState, useEffect, useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import { setCart } from '../helpers/cart.helper';
import DeliveryContext from '../context/DeliveryContext';

export default function CardItem({ nome, preco, image, index }) {
  const [quantidade, setQuantidade] = useState(0);
  const { setSumItem } = useContext(DeliveryContext);

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
    setCart({ nome, preco }, quantidade);
  }, [quantidade]);

  return (
    <div>
      <p
        data-testid={ `customer_products__element-card-title-${index}` }
      >
        {nome}

      </p>
      <p
        data-testid={ `customer_products__element-card-price-${index}` }
      >
        {preco.replace('.', ',')}
      </p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${index}` }
        src={ image }
        alt={ image }
        width="50"
      />
      <button
        data-testid={ `customer_products__button-card-rm-item-${index}` }
        type="button"
        onClick={ () => {
          setQuantidade((prev) => prev - 1);
          setCart({ nome, preco }, quantidade);
          setSumItem({ nome, preco }, quantidade);
        } }
        disabled={ quantidade === 0 }
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
          setCart({ nome, preco }, quantidade);
          setSumItem({ nome, preco }, quantidade);
        } }
      />
      <button
        data-testid={ `customer_products__button-card-add-item-${index}` }
        type="button"
        onClick={ () => {
          setQuantidade((prev) => prev + 1);
          setCart({ nome, preco }, quantidade);
          setSumItem({ nome, preco }, quantidade);
        } }
      >
        +
      </button>
    </div>
  );
}

CardItem.propTypes = {
  nome: PropTypes.string.isRequired,
  preco: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
