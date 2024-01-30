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
        <Link to="/foodshop">
          <h3>ASP.NET Core 6 E-Commerce Web App</h3>
        </Link>
        <Link to="/chessyem">
          <h3>React Multiplayer Chess Website</h3>
        </Link>
        <Link to="/puzzle">
          <h3>React Puzzle Game Site</h3>
        </Link>
        <Link to="/link-shortener">
          <h3>JavaScript Link Shortener</h3>
        </Link>
        <Link to="/paint">
          <h3>JavaScript Painting App</h3>
        </Link>
        <Link to="/jokes">
          <h3>ASP.NET Jokes Web App</h3>
        </Link>
        {/* <Link to="/pieshop">
          <h3>C# Pie Shop</h3>
        </Link> */}
        <Link to="/blackjack">
          <h3>HTML Blackjack Game</h3>
        </Link>
      </div>
    );
  }
}

export default Home;
