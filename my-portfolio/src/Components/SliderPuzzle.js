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
        <a href="https://hardcore-kepler-5bee6e.netlify.app/">
          <button className="home-btn">View Website</button>
        </a>
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
      </div>
    );
  }
}

export default SliderPuzzle;
