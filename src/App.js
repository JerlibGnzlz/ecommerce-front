import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Home from "./components/Home/Home.jsx";
import LoginForm from "./components/login/LoginForm.jsx";
import { UserRegister } from "./components/UserRegister";

import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App">
      <Switch>

        <Route exact path="/" component={Home}/>
        <Route exact path="/products" component={Products}/>
        <Route exact path="/products/:genre" component={Products}/>
   
        <Route path="/products/detail/:id" exact component={ProductDetail} />
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={UserRegister} />


      </Switch>
    </div>
  );
}

export default App;
