import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={NavBar} />
      </Switch>
    </div>
  );
}

export default App;
