import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./project.css";

class ChessYem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <span className="title">
          ChessYEM - Online Multiplayer Chess Website
        </span>
        <p className="description">
          This is an online chess website, created as part of a 3 person group
          project using agile methodologies.
        </p>
        <a href="https://hardcore-kepler-5bee6e.netlify.app/">
          <button className="home-btn">View Website</button>
        </a>
        <p className="description">
          Note: it may take around 10-15 seconds to create an account or log in
        </p>
        <p className="description">
          List of features:
          <ul>
            <li>Account creation</li>
            <li>Play against AI opponent</li>
            <ul>
              <li>Customisable difficulty</li>
              <li>Toggleable features (e.g undo last move, show hints etc.)</li>
              <li>Save game to resume later from saved games menu</li>
            </ul>
            <li>Play against a friend online</li>
            <ul>
              <li>Live chat while playing</li>
              <li>Game results are automatically uploaded to leaderboard</li>
              <li>Extra people may spectate game</li>
            </ul>
            <li>Online game leaderboard</li>
            <li>Saved Games Menu</li>
          </ul>
        </p>
        <p className="description">
          My role in this group was the software architect as well as a general
          engineer. I was personally responsible for designing and creating the
          back-end servers and websockets, as well as the account creation
          functionality and leaderboard component.
        </p>
      </div>
    );
  }
}

export default ChessYem;
