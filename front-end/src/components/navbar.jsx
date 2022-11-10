import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineShopping } from 'react-icons/ai';
import { CiBeerMugFull } from 'react-icons/ci';
import { IoLogOutOutline } from 'react-icons/io5';
import { clearStorage, getItem } from '../helpers/localStorage.helper';
import { Custombar } from '../style/Nav';

export default function Navbar() {
  const { role } = getItem();
  const { pathname } = useLocation();
  return (
    <Custombar
      color={ pathname.split('/')[2] }
    >
      {role === 'customer' && (
        <>
          <Link
            to="/customer/products"
            data-testid="customer_products__element-navbar-link-products"
            value="products"
          >
            <CiBeerMugFull />
            Produtos
          </Link>
          <hr />
        </>
      )}
      <Link
        to={ `/${role}/orders` }
        data-testid="customer_products__element-navbar-link-orders"
        value="orders"
      >
        <AiOutlineShopping />
        Pedidos
      </Link>
      <hr />
      <hr />
      <Link
        to="/login"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ () => clearStorage() }
      >
        <IoLogOutOutline />
        Sair
      </Link>
    </Custombar>
  );
}
