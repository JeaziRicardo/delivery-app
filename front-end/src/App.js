import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import loginForm from './components/loginForm';
// import Provider from './context/Provider';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ loginForm } />
      </Switch>
    </div>
  );
}

export default App;
// Open PR
