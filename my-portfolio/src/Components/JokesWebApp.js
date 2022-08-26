import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./project.css";

class JokesWebApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <span className="title">Jokes Web App</span>
        <p className="description-big">
          This is a simple full stack app built with C# and ASP.NET, using a
          model-view-controller format. The user can create an account or sign
          in with Facebook and post jokes to the jokes board.
        </p>
        <p className="pic-container">
          <a href="https://github.com/ErikBoonprakong/JokesWebApp">
            <button className="home-btn">View Code</button>
          </a>{" "}
          <p></p>
          <img src="JokesWebApp-screenshot.jpg" className="display-pic" />
        </p>
        <p className="description-big">
          List of features:
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </p>
        <p className="description-little">This app makes use of...</p>
        <p className="description-little">
          I chose to use <strong>C# .NET</strong> to...
        </p>
      </div>
    );
  }
}

export default JokesWebApp;
