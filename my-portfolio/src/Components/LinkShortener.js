import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./project.css";

class LinkShortener extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <span className="title">Link Shortener React App</span>
        <p className="description-big">
          This is a React app deployed to Netlify with a Deno server deployed to
          Heroku
        </p>
        <p className="pic-container">
          <a href="https://main--link-shortener-erik.netlify.app/">
            <button className="home-btn">View Website</button>
          </a>{" "}
          <a href="https://github.com/ErikBoonprakong/link-shortener">
            <button className="home-btn">View Frontend Code</button>
          </a>{" "}
          <a href="https://github.com/ErikBoonprakong/link-shortener-server">
            <button className="home-btn">View Server Code</button>
          </a>
          <p></p>
          <img src="link-shortener-screenshot.png" className="display-pic" />
        </p>
        <p className="description-big">
          List of features:
          <ul>
            <li>Shorten any valid URL link</li>
            <li>Privately shorten links</li>
          </ul>
        </p>
      </div>
    );
  }
}

export default LinkShortener;
