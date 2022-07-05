import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./project.css";

class Blackjack extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <span className="title">HTML Blackjack Game</span>
        <p className="description-big">
          This is a simple blackjack game created with semantic HTML, CSS and
          JavaScript.
        </p>
        <p className="pic-container">
          <a href="https://htmlpreview.github.io/?https://github.com/ErikBoonprakong/blackjack-html/blob/main/blackjack.html">
            <button className="home-btn">View Website</button>
          </a>{" "}
          <a href="https://github.com/ErikBoonprakong/blackjack-html">
            <button className="home-btn">View Code</button>
          </a>
          <p></p>
          <img src="blackjack-screenshot.png" className="display-pic" />
        </p>
        <p className="description-big">
          List of features:
          <ul>
            <li>Fully Functional Blackjack Game</li>
            <li>Changing Text Colours Depending On Outcome Of Game</li>
          </ul>
        </p>
      </div>
    );
  }
}

export default Blackjack;
