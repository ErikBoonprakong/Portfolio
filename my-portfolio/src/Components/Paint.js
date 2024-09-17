import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./entry.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

class Paint extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="entry text-container">
        <h1 className="projects-header">JavaScript Painting App</h1>
        <div className="back-button">
          <Link to="/entry" className="project-link">
            <Button variant="primary" className="project-button">
              Back to My Projects
            </Button>
          </Link>
        </div>
        <p className="description-big">
          This is a simple JavaScript canvas painting app, built with
          JavaScript, CSS and semantic HTML
        </p>
        <p className="pic-container">
          <div className="button-container">
            <a
              href="https://htmlpreview.github.io/?https://github.com/ErikBoonprakong/Canvas-paint/blob/main/Paint%20Canvas.html"
              className="project-link-large"
            >
              <Button variant="primary" className="project-button">
                View Site
              </Button>
            </a>
            <a
              href="https://github.com/ErikBoonprakong/Canvas-paint"
              className="project-link-large"
            >
              <Button variant="primary" className="project-button">
                View Code
              </Button>
            </a>
          </div>
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
        <div className="back-button bottom">
          <Link to="/entry" className="project-link">
            <Button variant="primary" className="project-button">
              Back to My Projects
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Paint;
