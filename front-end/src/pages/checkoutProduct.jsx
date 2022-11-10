import React from 'react';
import CheckoutForm from '../components/checkoutForm';
import Navbar from '../components/navbar';
import { getItem } from '../helpers/localStorage.helper';
import { ContainerCheckout } from '../style/checkoutProducts';

export default function CheckoutProduct() {
  console.log('entrou');
  const { name: userLoggedName } = getItem();

  return (
    <ContainerCheckout>
      <Navbar name={ userLoggedName } />
      <CheckoutForm />
    </ContainerCheckout>
  );
}
