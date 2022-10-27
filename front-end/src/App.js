import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import loginForm from './components/loginForm';

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
