import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./home.css";

class Entry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to="/home">Check out my projects</Link>
      </div>
    );
  }
}

export default Entry;
