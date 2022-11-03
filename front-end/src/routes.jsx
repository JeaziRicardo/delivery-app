import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import loginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import CustomerProducts from './pages/customerProducts';
import DeliveryProvider from './context/DeliveryProvider';

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/login" component={ loginForm } />
      <Route exact path="/register" component={ RegisterForm } />
      <DeliveryProvider>
        <Route exact path="/customer/products" component={ CustomerProducts } />
        <Route exact path="/customer/checkout" />

      </DeliveryProvider>

    </Switch>
  );
}

export default Routes;
