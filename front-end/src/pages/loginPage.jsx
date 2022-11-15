import React from 'react';
import LoginForm from '../components/loginForm';
import logo from '../images/logo-bia-final.png';
import { ContainerForm } from '../style/Form';

export default function loginPage() {
  return (
    <ContainerForm>
      <figure>
        <img src={ logo } alt="logo bia" />
      </figure>
      <LoginForm />
    </ContainerForm>
  );
}
