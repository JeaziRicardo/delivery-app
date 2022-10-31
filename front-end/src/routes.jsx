import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import loginForm from './components/loginForm';
import RegisterForm from './components/registerForm';

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/login" component={ loginForm } />
      <Route exact path="/register" component={ RegisterForm } />
    </Switch>
  );
}

export default Routes;
