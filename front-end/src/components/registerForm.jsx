import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { loginValidation } from '../helpers/validation.helper';

import { postRegister } from '../helpers/api';
import { setItem } from '../helpers/localStorage.helper';
import { ContainerForm, Form } from '../style/Form';

export default function RegisterForm() {
  const [loginName, setLoginName] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(false);
  const history = useHistory();

  async function sendRegisterForm() {
    const STATUS_CREATED = 201;
    const formLogin = { name: loginName, email: loginEmail, password: loginPassword };
    const response = await postRegister(formLogin);

    if (response === null) setInvalidEmail(true);
    setItem(response.data);
    if (response.status === STATUS_CREATED) history.push('/customer/products');
  }

  return (
    <ContainerForm>
      <h1>Cadastro</h1>
      <Form>
        <label htmlFor="nome">
          <span>Nome</span>
          <input
            id="nome"
            type="text"
            placeholder="seu nome"
            data-testid="common_register__input-name"
            onChange={ ({ target }) => {
              setLoginName(target.value);
            } }
          />
        </label>
        <label htmlFor="email">
          <span>Email</span>
          <input
            id="email"
            type="text"
            placeholder="seu-email@site.com.br"
            data-testid="common_register__input-email"
            onChange={ ({ target }) => {
              setLoginEmail(target.value);
            } }
          />
        </label>
        <label htmlFor="password">
          <span>Senha</span>
          <input
            id="password"
            type="password"
            placeholder="**********"
            data-testid="common_register__input-password"
            onChange={ ({ target }) => {
              setLoginPassword(target.value);
            } }
          />
        </label>
        <button
          type="button"
          disabled={ loginValidation({ loginName, loginEmail, loginPassword }) }
          data-testid="common_register__button-register"
          onClick={ () => {
            sendRegisterForm();
          } }

        >
          Cadastrar
        </button>
        {
          invalidEmail
          && (
            <span
              data-testid="common_register__element-invalid_register"
            >
              Invalid email
            </span>
          )
        }
      </Form>
    </ContainerForm>
  );
}
