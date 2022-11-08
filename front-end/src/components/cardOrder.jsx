import React from 'react';
import PropTypes from 'prop-types';
import { getItem } from '../helpers/localStorage.helper';

export default function CardOrder({ orderId, status, date, total, delivery }) {
  const fullDate = date.split('T');
  const [year, month, day] = fullDate[0].split('-');
  const { role } = getItem();
  return (
    <div style={ { border: '1px solid blue', margin: '20px 0', width: '350px' } }>
      <span
        data-testid={ `${role}_orders__element-order-id-${orderId}` }
      >
        {`pedido: ${orderId}`}
      </span>
      <p
        data-testid={ `${role}_orders__element-delivery-status-${orderId}` }
      >
        {status}
      </p>
      <p
        data-testid={ `${role}_orders__element-order-date-${orderId}` }
      >
        {`${day}/${month}/${year}`}
      </p>
      <p
        data-testid={ `${role}_orders__element-card-price-${orderId}` }
      >
        {total.replace('.', ',')}
      </p>
      {role === 'seller'
      && (
        <p
          data-testid={ `seller_orders__element-card-address-${orderId}` }
        >
          {delivery}
        </p>
      )}
    </div>
  );
}

CardOrder.propTypes = {
  orderId: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
  delivery: PropTypes.string.isRequired,
};
