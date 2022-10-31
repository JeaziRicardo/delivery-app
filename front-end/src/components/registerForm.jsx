import React, { useState } from 'react';
import loginValidation from '../helpers/validation.helper';

export default function RegisterForm() {
  const [loginName, setLoginName] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  return (
    <form>
      <h1>CADASTRO</h1>
      <label htmlFor="nome">
        <span>Nome</span>
        <input
          id="nome"
          type="text"
          placeholder="seu nome"
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
          onChange={ ({ target }) => {
            setLoginPassword(target.value);
          } }
        />
      </label>
      <button
        type="button"
        disabled={ loginValidation({ loginName, loginEmail, loginPassword }) }
      >
        Cadastrar
      </button>
    </form>
  );
}
