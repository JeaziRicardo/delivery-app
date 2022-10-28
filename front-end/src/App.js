import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import loginForm from './components/loginForm';
// import Provider from './context/Provider';

function App() {
  return (
    <div className="App">
      <h1>aaaa</h1>
      {/* <Provider> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ loginForm } />
        </Switch>
      </BrowserRouter>
      {/* </Provider> */}

    </div>
  );
}

export default App;
// Open PR
