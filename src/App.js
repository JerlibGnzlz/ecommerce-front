import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";

import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/products/:genre" component={Products}/>
   
        


      </Switch>
    </div>
  );
}

export default App;
