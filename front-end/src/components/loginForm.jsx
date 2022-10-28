import React, { useState } from 'react';
// import { Context as LoginContext } from '../context/Provider';

export default function LoginForm() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // const { setLoginForm } = useContext(LoginContext);

  // function sendLoginForm() {
  //   setLoginForm({ email: loginEmail, password: loginPassword });
  // }

  const buttonValidation = () => {
    const val = /\S+@\S+\.\S+/;
    const validationEmail = val.test(loginEmail);
    const SIX = 6;
    return !(validationEmail && loginPassword.length > SIX);
  };

  return (
    <form>
      <label htmlFor="email">
        <span>Login</span>
        <input
          type="email"
          id="email"
          placeholder="email@trybeer.com.br"
          data-testid="common_login__input-email"
          onChange={ (event) => {
            setLoginEmail(event.value);
          } }
        />
      </label>

      <label htmlFor="password">
        <span>Senha</span>
        <input
          type="password"
          id="password"
          data-testid="common_login__input-password"
          onChange={ (event) => {
            setLoginPassword(event.value);
          } }
        />
      </label>

      <button
        type="button"
        data-testid="common_login__login-button"
        disabled={ buttonValidation() }
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
