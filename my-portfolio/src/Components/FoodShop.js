import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./entry.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

class FoodShop extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="entry text-container">
        <h1 className="projects-header">ASP.NET Core E-Commerce Web App</h1>
        <div className="back-button">
          <Link to="/entry" className="project-link">
            <Button variant="primary" className="project-button">
              Back to My Projects
            </Button>
          </Link>
        </div>
        <p className="description-big">
          This is my most recent pet project. It's a mock e-commerce website
          built with ASP.NET Core 6 and C# 10, using the traditional MVC pattern
          with the addition of some Razor pages.
        </p>
        <p className="description-big">I chose to create this project as I wanted to achieve a more solid understanding of these technologies by creating a project from scratch so that I could become familiar every part of the application and fully understand how each part interacts with one another.</p>
        <p className="description-big">
          Data for this web app was originally stored through the use of Entity
          Framework Core 6, but I decided to migrate it to a PostgreSQL server
          so that I could deploy the site to Heroku as Heroku is significantly
          cheaper than Microsoft Azure.
        </p>
        <p className="pic-container">
          <div className="button-container">
            <a
              href="https://ecommerce-site-aspnet-5ca2ec54bfb3.herokuapp.com/"
              className="project-link-large"
            >
              <Button variant="primary" className="project-button">
                View Site
              </Button>
            </a>
            <a
              href="https://github.com/ErikBoonprakong/FoodShop"
              className="project-link-large"
            >
              <Button variant="primary" className="project-button">
                View Code
              </Button>
            </a>
          </div>
          <p></p>
          <img src="foodshop-screenshot.png" className="display-pic" />
        </p>
        <p className="description-big">
          List of features:
          <ul>
            <li>Continuous deployment through Heroku</li>
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
            <li>Improve Aesthetic</li>
          </ul>
        </p>
        <p className="description-little">
          The most challenging part of creating this project was implementing
          continuous deployment. I initially developed this project locally
          using Entity Framework Core and SQL Server, which would have been
          quite simple to deploy via Microsoft Azure. Unfortunately though
          Microsoft Azure has some absurd prices and so I decided to use Heroku
          instead, however Heroku doesn't have the same support for SQL Server
          and so I had to migrate the database to a postgreSQL server instead.
        </p>
        <p className="description-little">
          I did this by first creating a Postgres server through Heroku and
          then removing the EF Core SQL Server dependencies and replacing them
          with EF Core Postgres dependencies. I then changed the connection
          string to point to the Postgres server that I created earlier. Next I
          had to tell EF Core that I was using a Postgres database by changing
          the DBContext initialization in the startup. I then deleted the
          original migration files and generated new ones along with a new
          database. Finally I reran the original database schema to populate the
          database.
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

export default FoodShop;
