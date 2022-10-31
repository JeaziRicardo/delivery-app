import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link
        to="/products"
        data-testid="customer_products__element-navbar-link-products"
      >
        Produtos
      </Link>
      <Link
        to="/products"
        data-testid="customer_products__element-navbar-link-orders"
      >
        Meus Pedidos
      </Link>
      <span
        data-testid="customer_products__element-navbar-user-full-name"
      >
        Profile
      </span>
      <Link
        to="/products"
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair
      </Link>
    </nav>
  );
}
