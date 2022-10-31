import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import loginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import CustomerProducts from './pages/customerProducts';

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/login" component={ loginForm } />
      <Route exact path="/register" component={ RegisterForm } />
      <Route exact path="/customer/products" component={ CustomerProducts } />
    </Switch>
  );
}

export default Routes;
