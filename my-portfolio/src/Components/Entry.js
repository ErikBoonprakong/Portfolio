import React from "react";
import { Link, Redirect } from "react-router-dom";
import './entry.css'


class Entry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="entry">
        <div className="intro-text">
          <h6 className="intro-header">Hi, my name is</h6>
          <h2 className="intro-header">Erik Boonprakong-Kitching</h2>
          <h6 className="intro-header">I'm a</h6>
          <h3 className="intro-header">Software Engineer</h3>
          <h4 className="intro-header">
            with commercial experience in full-stack development utilising C#,
            .NET, JavaScript, React, Node.js.
          </h4>
          <Link to="/home"><h4>Check out my projects</h4></Link>
        </div>
        
      </div>
    );
  }
}

export default Entry;
