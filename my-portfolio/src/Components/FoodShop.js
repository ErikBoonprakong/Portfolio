import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./project.css";

class FoodShop extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <span className="title">ASP.NET Core E-Commerce Web App</span>
        <p className="description-big">
          This is my current main pet project. It's a mock e-commerce website
          built with ASP.NET Core 6 and C# 10, using the traditional MVC pattern
          with the addition of some Razor pages.
        </p>
        <p className="description-big">
          Data for this web app is stored through the use of Entity Framework
          Core 6.
        </p>
        <p className="pic-container">
          <a href="https://github.com/ErikBoonprakong/FoodShop">
            <button className="home-btn">View Code</button>
          </a>{" "}
          <p></p>
          <img src="foodshop-screenshot.png" className="display-pic" />
        </p>
        <p className="description-big">
          List of features:
          <ul>
            <li>Landing Page</li>
            <li>View food item by category</li>
            <li>Dynamic shopping cart</li>
            <li>
              Checkout form, validated on both client-side and server-side
            </li>
            <li>Entity Framework Core 6 support</li>
            <li>Custom tag helpers</li>
            <li>View components</li>
            <li>Search for item feature</li>
            <li>Unit tests, written with xUnit</li>
            <li>Account creation</li>
            <li>Authorisation and authentication</li>
          </ul>
        </p>
        {/* <p className="description-little">This app makes use of...</p>
        <p className="description-little">
          I chose to use <strong>C# .NET</strong> to...
        </p> */}
        <p className="description-little">
          My future goals for this project are:
          <ul>
            <li>Special privaliges for admin account</li>
            <li>Add an optional display name for users</li>
            <li>Implement continuous deployment</li>
          </ul>
        </p>
        <p className="description-little">
          I'm currently looking into implementing continuous deployment. The
          obvious choice for this would be using Azure, however Azure has
          tricked me into paying hidden cost (and not particularly cheap ones)
          in the past, so I'm going to look at other options. Azure also made it
          extremely difficult to delete my account or its payment details after
          I discovered the hidden costs.
        </p>
      </div>
    );
  }
}

export default FoodShop;
