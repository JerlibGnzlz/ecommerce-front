import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Carrito from "./components/Carrito"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Carrito" exact component={Carrito} />
      </Switch>
    </div>
  );
}

export default App;
