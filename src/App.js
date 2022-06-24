import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import LoginForm from "./components/login/LoginForm";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={LoginForm} />
      </Switch>
    </div>
  );
}

export default App;
