import React from 'react'


export default function loginForm() {
  return (
    <form>
      <label>
        <span>Login</span>
        <input
          data-testid='common_login__input-email'
          onChange={(event) => {}}/>
      </label>

      <label>
        <span>password</span>
        <input
          data-testid='common_login__input-password'
          onChange={(event) => {}}/>
      </label>
      
      <button
      data-testid='common_login__login-button'
      type='button'
      onClick={() => {}}>
        Login
      </button>

      <button
      data-testid='common_login__login-register'
      type='button'
      onClick={() => {}}>
        Ainda não tenho conta
      </button>
      <span data-testid='common_login__element-invalid-email'></span>
    </form>
  )
}
