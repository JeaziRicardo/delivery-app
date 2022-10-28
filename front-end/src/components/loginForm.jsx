import React, { useState } from 'react';
import { Context as LoginContext } from '../context/Provider';

export default function LoginForm() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const { setLoginForm } = useContext(LoginContext);

  function sendLoginForm() {
    setLoginForm({ email: loginEmail, password: loginPassword });
  }

  return (
    <form>
      <label htmlFor="common_login__input-email">
        <span>Login</span>
        <input
          data-testid="common_login__input-email"
          onChange={ (event) => {
            setLoginEmail(event.value);
          } }
        />
      </label>

      <label htmlFor="common_login__input-password">
        <span>password</span>
        <input
          data-testid="common_login__input-password"
          onChange={ (event) => {
            setLoginPassword(event.value);
          } }
        />
      </label>

      <button
        data-testid="common_login__login-button"
        type="button"
        onClick={ () => {
          sendLoginForm();
        } }
      >
        Login
      </button>

      <button
        data-testid="common_login__login-register"
        type="button"
        onClick={ () => {} }
      >
        Ainda não tenho conta
      </button>
      <span data-testid="common_login__element-invalid-email" />
    </form>
  );
}
