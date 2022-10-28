import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import loginForm from './components/loginForm';

function App() {
  return (
    <div className="App">
      <h1>aaaa</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login" component={ loginForm } />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
// Open PR
