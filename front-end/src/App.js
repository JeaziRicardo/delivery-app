import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import loginForm from './components/loginForm';
import Provider from './context/Provider';

function App() {
  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ loginForm } />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
// Open PR
