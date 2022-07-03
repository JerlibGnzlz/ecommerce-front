import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Home from "./components/Home/Home.jsx";
import LoginForm from "./components/login/LoginForm.jsx";
import { UserRegister } from "./components/UserRegister";
import cart from "./components/ShoppingCart/ShopppingCart"

import Products from "./components/Products/Products";

import orderDetails from "./components/OrderDetails/orderDetails";

import Checkout from "./components/Checkout/Checkout.jsx";
import MercadoPago from "./components/MercadoPago/MercadoPago";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/products" element={<Products/>} />
        <Route exact path="/products/:genre" element={<Products/>} />
        <Route path="/detail/:id" exact element={<ProductDetail/>} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/register" element={<UserRegister/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/cart" element={cart} />
        <Route path="/orderDetails" element={<orderDetails/>} />
        <Route path="/mercadopago" element={<MercadoPago/>} />

      </Routes>
    </div>
  );
}

export default App;
