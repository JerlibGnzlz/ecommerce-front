import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Home from "./components/Home/Home.jsx";
import LoginForm from "./components/login/LoginForm.jsx";
import { UserRegister } from "./components/UserRegister";
import cart from "./components/ShoppingCart/ShopppingCart";
import { AuthProvider } from "./context/AuthContext";
import Reset from "./components/reset/Reset";

import Products from "./components/Products/Products";

import orderDetails from "./components/OrderDetails/orderDetails";

import Checkout from "./components/Checkout/Checkout.jsx";


function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:genre" component={Products} />
          <Route path="/detail/:id" exact component={ProductDetail} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={UserRegister} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/cart" component={cart} />
          <Route path="/reset" component={Reset} />
        </Switch>
      </AuthProvider>

    </div>
  );
}

export default App;
