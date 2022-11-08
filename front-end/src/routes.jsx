import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import loginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import OrderDetails from './pages/orderDetails';
import CustomerProducts from './pages/customerProducts';
import DeliveryProvider from './context/DeliveryProvider';
import CheckoutProduct from './pages/checkoutProduct';
import Orders from './pages/myOrders';

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
        <Route exact path="/customer/checkout" component={ CheckoutProduct } />
        <Route exact path="/customer/orders/:id" component={ OrderDetails } />
        <Route exact path="/customer/orders" component={ Orders } />
        <Route exact path="/seller/orders" component={ Orders } />

      </DeliveryProvider>

    </Switch>
  );
}

export default Routes;
