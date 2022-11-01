import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function CardItem({ nome, preco, image, index }) {
  const [quantidade, setQuantidade] = useState(0);
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
        {`R$${preco}`}
      </p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${index}` }
        src={ image }
        alt={ image }
      />
      <button
        data-testid={ `customer_products__button-card-rm-item-${index}` }
        type="button"
        onClick={ () => setQuantidade((prev) => prev - 1) }
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
        onChange={ ({ target }) => setQuantidade(target) }
      />
      <button
        data-testid={ `customer_products__button-card-add-item-${index}` }
        type="button"
        onClick={ () => setQuantidade((prev) => prev + 1) }
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