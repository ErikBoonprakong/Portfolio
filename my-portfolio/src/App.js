import logo from "./logo.svg";
import React from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import Home from "./Components/Home";
import ChessYem from "./Components/ChessYem";
import Puzzle from "./Components/SliderPuzzle";
import Paint from "./Components/Paint";
import Blackjack from "./Components/Blackjack";
import LinkShortener from "./Components/LinkShortener";
import JokesWebApp from "./Components/JokesWebApp";
import PieShop from "./Components/PieShop";
import FoodShop from "./Components/FoodShop.js";
import PythonBlackjack from "./Components/PythonBlackjack.js"
import Entry from './Components/Entry.js'
import Contact from './Components/Contact.js'

function App() {
  return (
     <div className="App">
    {/* //   <div className="header-container">
    //     <header className="app-header">
    //       Erik Boonprakong-Kitching's Portfolio
    //     </header>
    //     <br />
    //     <Link to="/home">
    //       <button className="home-btn">Home Page</button>
    //     </Link>
    //     <hr />
    //   </div> */}
      <Switch>
        <Route exact path="/">
          <Redirect to="/entry" />
        </Route>
        <Route path="/entry">
            <Entry />
        </Route>
        <Route path="/home">
          <div className="home-screen">
            <Home />
          </div>
        </Route>
        <Route path="/foodshop">
          <FoodShop />
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
        <Route path="/pythonblackjack">
          <PythonBlackjack />
        </Route>
        <Route path="/link-shortener">
          <LinkShortener />
        </Route>
        <Route path="/jokes">
          <JokesWebApp />
        </Route>
        <Route path="/pieshop">
          <PieShop />
        </Route>
        <Route path="/contact">
        <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
