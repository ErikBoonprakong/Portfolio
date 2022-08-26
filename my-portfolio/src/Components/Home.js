import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-navigation">
        <h1>My Projects</h1>
        <Link to="/chessyem">
          <h3>ChessYem - Multiplayer Chess Website</h3>
        </Link>
        <Link to="/puzzle">
          <h3>Puzzle Game Site</h3>
        </Link>
        <Link to="/link-shortener">
          <h3>Link Shortener</h3>
        </Link>
        <Link to="/paint">
          <h3>JavaScript Painting App</h3>
        </Link>
        <Link to="/jokes">
          <h3>Jokes Web App</h3>
        </Link>
        <Link to="/blackjack">
          <h3>HTML Blackjack Game</h3>
        </Link>
      </div>
    );
  }
}

export default Home;
