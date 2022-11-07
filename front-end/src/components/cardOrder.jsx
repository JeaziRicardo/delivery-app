import React from 'react';
import PropTypes from 'prop-types';

export default function CardOrder({ orderId, status, date, total }) {
  const fullDate = date.split('T');
  const [year, month, day] = fullDate[0].split('-');
  return (
    <div>
      <span
        data-testid={ `customer_orders__element-order-id-${orderId}` }
      >
        {`pedido: ${orderId}`}
      </span>
      <p
        data-testid={ `customer_orders__element-delivery-status-${status}` }
      >
        {status}
      </p>
      <p
        data-testid={ `customer_orders__element-order-date-${date}` }
      >
        {`${day}/${month}/${year}`}
      </p>
      <p
        data-testid={ `customer_orders__element-card-price-${total}` }
      >
        {total.replace('.', ',')}
      </p>
    </div>
  );
}

CardOrder.propTypes = {
  orderId: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
};
