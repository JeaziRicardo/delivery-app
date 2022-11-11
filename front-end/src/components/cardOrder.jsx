import React from 'react';
import PropTypes from 'prop-types';
import { getItem } from '../helpers/localStorage.helper';
import { CardOrderItem } from '../style/OrderDetails';

export default function CardOrder({ orderId, status, date, total, delivery }) {
  const fullDate = date.split('T');
  const [year, month, day] = fullDate[0].split('-');
  const [monthName, dateName] = new Date(`${month}/${day}/${year}`)
    .toLocaleDateString('pt-br', { weekday: 'long', month: 'long' }).split(' ');
  const { role } = getItem();
  return (
    <CardOrderItem>
      <p
        className="date-card"
        data-testid={ `${role}_orders__element-order-date-${orderId}` }
      >
        {`${dateName[0].toUpperCase() + dateName.substring(1)}, ${day} de ${monthName}. `}
      </p>
      <span
        className="order-id"
        data-testid={ `${role}_orders__element-order-id-${orderId}` }
      >
        {`ID: 000${orderId}`}
      </span>
      <div className="middle-info">
        <p>Fornececido por IDelivery</p>
        <p
          data-testid={ `${role}_orders__element-delivery-status-${orderId}` }
        >
          {`${status} >`}
        </p>
      </div>

      <p
        data-testid={ `${role}_orders__element-card-price-${orderId}` }
      >
        {`R$ ${total.replace('.', ',')}`}
      </p>
      {role === 'seller'
      && (
        <p
          data-testid={ `seller_orders__element-card-address-${orderId}` }
        >
          {delivery}
        </p>
      )}
      <hr />
    </CardOrderItem>
  );
}

CardOrder.propTypes = {
  orderId: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
  delivery: PropTypes.string.isRequired,
};
