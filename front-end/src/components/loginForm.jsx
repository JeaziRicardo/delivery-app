import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { postLogin } from '../helpers/api';
import { getItem, setItem } from '../helpers/localStorage.helper';
import { loginValidation } from '../helpers/validation.helper';

export default function LoginForm() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(false);
  const history = useHistory();
  const storage = getItem();

  async function sendLoginForm() {
    const formLogin = { email: loginEmail, password: loginPassword };
    const response = await postLogin(formLogin);

    if (response === null) setInvalidEmail(true);
    setItem(response.data);

    if (response.data.role === 'customer') {
      history.push('/customer/products');
    } else history.push('/seller/orders');
  }

  if (storage) history.push('/customer/products');

  return (
    <form>
      <h1>LOGIN</h1>
      <label htmlFor="email">
        <span>Login</span>
        <input
          type="email"
          id="email"
          placeholder="email@trybeer.com.br"
          data-testid="common_login__input-email"
          onChange={ ({ target }) => {
            setLoginEmail(target.value);
          } }
        />
      </label>

      <label htmlFor="password">
        <span>Senha</span>
        <input
          type="password"
          id="password"
          data-testid="common_login__input-password"
          onChange={ ({ target }) => {
            setLoginPassword(target.value);
          } }
        />
      </label>

      <button
        type="button"
        data-testid="common_login__button-login"
        disabled={ loginValidation({ loginEmail, loginPassword }) }
        onClick={ () => {
          sendLoginForm();
        } }
      >
        Login
      </button>

      <button
        data-testid="common_login__button-register"
        type="button"
        onClick={ () => history.push('/register') }
      >
        Ainda não tenho conta
      </button>
      { invalidEmail
        && <span data-testid="common_login__element-invalid-email">Invalid email</span>}
    </form>
  );
}
