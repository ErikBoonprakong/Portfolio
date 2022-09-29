import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./project.css";

class PieShop extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <span className="title">Pie Shop</span>
        <p className="description-big">
          This is a C# console application that I created following the
          completion of some C# courses on Pluralsight, my aim with this project
          was to familiarise myself with the latest versions of C# .NET and
          Visual Studio.
        </p>
        <p className="pic-container">
          <a href="https://github.com/ErikBoonprakong/BethanysPieShop">
            <button className="home-btn">View Code</button>
          </a>{" "}
          <p></p>
          <img src="PieShop.png" className="display-pic" />
        </p>
        <p className="description-big">
          List of features:
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </p>
        <p className="description-big">
          This project makes use of classes and methods, interfaces, enumerates,
          Arrays and lists, unit tests, exception handling and reading from and
          writing to files.
        </p>
        <p className="description-little"></p>
      </div>
    );
  }
}

export default PieShop;
