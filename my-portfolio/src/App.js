import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import Home from "./Components/Home";
import ChessYem from "./Components/ChessYem";

function App() {
  return (
    <div className="App">
      <header className="app-header">
        Erik Boonprakong-Kitching's Portfolio
      </header>
      <br />
      <Link to="/home">
        <button className="home-btn">Home Page</button>
      </Link>
      <hr />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/chessyem">
          <ChessYem />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
