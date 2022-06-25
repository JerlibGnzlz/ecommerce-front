import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:id" exact component={ProductDetail} />
      </Switch>
    </div>
  );
}

export default App;
