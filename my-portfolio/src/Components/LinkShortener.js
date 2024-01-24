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
          This is a React app deployed to Netlify with a Deno server to function
          as an API deployed to Heroku. The user can enter a valid URL and they
          will be provided with an alternate link to the same URL.
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
          <p className="description-big">
            Note: it may take around 10-15 seconds to register a link. This is due to me using the unpaid option for the database host.
          </p>
          <img src="link-shortener-screenshot.png" className="display-pic" />
        </p>
        <p className="description-big">
          List of features:
          <ul>
            <li>Shorten any valid URL link</li>
            <li>Privately shorten links</li>
            <li>List of all public short links</li>
            <ul>
              <li>visit count</li>
            </ul>
          </ul>
        </p>
        <p className="description-little">
          This app makes use of <strong>key value stores</strong> to store a
          user-entered URL along with a corresponding, automatically generated
          short code. Different <strong>end points</strong> are defined in the
          backend, for example the /l/:shortcode end point is used to handle
          redirecting the user to the URL corresponding to the shortcode.
        </p>
        <p className="description-little">
          I chose to use <strong>Deno</strong> to build the server because of
          Deno's built in brower <strong>APIs</strong>, which made it easy to
          send all types of HTTP request from the frontend to the server using
          the standardised fetch function.
        </p>
        <p className="description-little">
          <strong>CORS</strong> has been configured to allow access from the
          localhost (for local development) and from the deployed Netlify app.
        </p>
      </div>
    );
  }
}

export default LinkShortener;
