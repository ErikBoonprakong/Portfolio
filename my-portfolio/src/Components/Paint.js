import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./project.css";

class Paint extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <span className="title">JavaScript Painting App</span>
        <p className="description-big">
          This is a simple JavaScript canvas painting app, built with
          JavaScript, CSS and semantic HTML
        </p>
        <p className="pic-container">
          <a href="https://htmlpreview.github.io/?https://github.com/ErikBoonprakong/Canvas-paint/blob/main/Paint%20Canvas.html">
            <button className="home-btn">View Website</button>
          </a>{" "}
          <a href="https://github.com/ErikBoonprakong/Canvas-paint">
            <button className="home-btn">View Code</button>
          </a>
          <p></p>
          <img src="paint-screenshot.png" className="display-pic" />
        </p>
        <p className="description-big">
          List of features:
          <ul>
            <li>Pencil and Rubber tools</li>
            <li>Pencil Stroke Preview Box</li>
            <li>Colour palette</li>
            <li>Variable Stroke Line Width</li>
            <li>RGB Value Sliders</li>
            <li>Changing Cursor Depending On Which Tool Is Selected</li>
          </ul>
        </p>
      </div>
    );
  }
}

export default Paint;
