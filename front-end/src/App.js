import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import loginForm from "./components/loginForm";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={loginForm} />
    </div>
  );
}

export default App;
// Open PR
