import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Carrito from "./components/Carrito.jsx";
import Card from './components/Card/Card'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/carrito" component={Carrito} />
          <Route exact path="/"  component={Card} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
