import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./project.css";

class SliderPuzzle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <span className="title">Slider Puzzle</span>
        <p className="description-big">
          This is a pet project that I am currently working on. It's a website
          for a simple slider puzzle game. I'm currently working on adding
          different difficulties for the user to chose from.
        </p>
        <p className="pic-container">
          <a href="https://erikspuzzlegame.netlify.app/">
            <button className="home-btn">View Website</button>
          </a>{" "}
          <a href="https://github.com/ErikBoonprakong/jigsaw">
            <button className="home-btn">View Code</button>
          </a>
          <p></p>
          <img src="sliderpuzzle-screenshot.png" className="display-pic" />
        </p>
        <p className="description-big">
          List of features:
          <ul>
            <li>Home Page</li>
            <li>Instructions Page</li>
            <li>Difficulty Selection (work in progress)</li>
            <li>Play Game</li>
            <ul>
              <li>Win message is displayed once puzzle is completed</li>
            </ul>
          </ul>
        </p>
        <p className="description-little">
          This is currently a front end only <strong>React</strong> app. I chose
          React for this app to minimise loading time as it enables me to just
          reload the game board each time a move is made instead of reloading
          the entire page.
        </p>
        <p className="description-little">
          I <strong>deployed</strong> this to <strong>Netlify</strong> as
          Netlify is designed for front-end developers so there was an abundance
          of documentation applicable to my needs.
        </p>
        <p className="description-little">
          My future goals for this project are:
          <ul>
            <li>
              Implement multiple difficulties for the player to chose from in a
              way that doesn't repeat code unnecessarily and that I could add
              more difficulties without too much extra code
            </li>
            <li>Add more pictures for the user to chose as their puzzle.</li>
            <ul>
              <li>
                Potentially look into letting the user upload a picture to use
              </li>
            </ul>
            <li>
              Consider adding a score system where the user would create an
              account and that account would get various amounts of points from
              completing puzzles of varying difficulty
            </li>
            <ul>
              <li>
                I would do this by creating a PostgresSQL database and a server
                to communicate with it using Deno. I would then deploy the
                server to Heroku
              </li>
              <li>Leaderboard</li>
            </ul>
          </ul>
        </p>
      </div>
    );
  }
}

export default SliderPuzzle;
