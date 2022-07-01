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
      </div>
    );
  }
}

export default Home;