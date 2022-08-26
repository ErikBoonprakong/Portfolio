import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import Home from "./Components/Home";
import ChessYem from "./Components/ChessYem";
import Puzzle from "./Components/SliderPuzzle";
import Paint from "./Components/Paint";
import Blackjack from "./Components/Blackjack";
import LinkShortener from "./Components/LinkShortener";
import JokesWebApp from "./Components/JokesWebApp";

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
        <Route path="/puzzle">
          <Puzzle />
        </Route>
        <Route path="/paint">
          <Paint />
        </Route>
        <Route path="/blackjack">
          <Blackjack />
        </Route>
        <Route path="/link-shortener">
          <LinkShortener />
        </Route>
        <Route path="/jokes">
          <JokesWebApp />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
