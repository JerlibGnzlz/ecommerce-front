import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Home from "./components/Home/Home.jsx";
import LoginForm from "./components/login/LoginForm.jsx";
import { UserRegister } from "./components/UserRegister";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products/:id" exact component={ProductDetail} />
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={UserRegister} />

      </Switch>
    </div>
  );
}

export default App;
