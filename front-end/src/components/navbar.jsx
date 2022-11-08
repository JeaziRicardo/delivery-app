import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { clearStorage, getItem } from '../helpers/localStorage.helper';

export default function Navbar({ name }) {
  const { role } = getItem();
  return (
    <nav>
      {role === 'customer' && (
        <Link
          to="/customer/products"
          data-testid="customer_products__element-navbar-link-products"
        >
          Produtos
        </Link>
      )}
      <Link
        to={ `/${role}/orders` }
        data-testid="customer_products__element-navbar-link-orders"
      >
        Meus Pedidos
      </Link>
      <span
        data-testid="customer_products__element-navbar-user-full-name"
      >
        {name}
      </span>
      <Link
        to="/login"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ () => clearStorage() }
      >
        Sair
      </Link>
    </nav>
  );
}

Navbar.propTypes = {
  name: PropTypes.string.isRequired,
};
