import React from "react";
import { Link, Redirect } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import './entry.css'
import Pdf from './Erik Boonprakong-Kitching - CV.pdf'


class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        showMore: false,
    }
  }

  handleShowMore = () => {
    this.setState({showMore : !this.state.showMore})
  }

  render() {
    return (
      <div className="entry">
        <div className="text-container">
          <div className="profile-pic-container">
            <div>
              <img
                src="TeamsProfilePicCropped.jpg"
                alt="Profile Picture"
                className="profile-pic"
              />
            </div>
            <div className="profile-intro">
              <h6 className="intro-header">Hi, my name is</h6>
              <h2 className="intro-header">Erik Boonprakong</h2>
              <h6 className="intro-header">I'm a</h6>
              <h3 className="intro-header">Software Engineer</h3>
            </div>
          </div>
          <p className="intro-header">
            with commercial experience in full-stack development utilising C#,
            .NET, JavaScript, React, Node.js.
          </p>

          <p
            className={
              this.state.showMore === false ? "hide-text" : "intro-header"
            }
          >
            I began my career in software engineering as a Full-Stack Engineer
            at a startup called Sigma Labs. During my time here I worked as the
            software architect in a 3-person team to create an online
            multiplayer chess website. My role in this project involved creating
            most of the backend, including both servers, the database, and the
            websocket, as well as a few of the frontend components. I
            particularly enjoyed the challenge of having to learn many new
            technologies on the fly while still adhering to tight deadlines.
          </p>
          <p
            className={
              this.state.showMore === false ? "hide-text" : "intro-header"
            }
          >
            I recently worked as a contract C# Developer at Lloyds Banking Group
            where I directly contributed to improving the bank's security by
            integrating a newly-created, harder to manipulate data type into
            their software that provided information about bond prices. My
            initial 6-month contract was then extended in light of this work.
          </p>
          <p
            className={
              this.state.showMore === false ? "hide-text" : "intro-header"
            }
          >
            Since Lloyds I've continued to upskill by doing freelance web
            development for an art school that I used to work at. I chose to
            take on this work because I knew the school needed a website and I
            wanted to continue practicing working to a list of user requirements
            provided by someone else. In my free time I've been working on a
            continually deployed, full-stack ASP.NET Core web app.
          </p>
          <p
            className="intro-header read-more"
            onMouseDown={this.handleShowMore}
          >
            {this.state.showMore === false ? "Read more..." : "Show less."}
          </p>
          <p></p>
          <hr />
          <h2 className="projects-header">My Projects</h2>
          <div className="project-card-container">
            <Card className="project-card">
              <Card.Img
                variant="top"
                src="chess-screenshot.png"
                className="project-image"
              />
              <Card.Body className="project-card">
                <Card.Title>
                  <h3>React Multiplayer Chess Website</h3>
                </Card.Title>
                <Card.Text className="project-text">
                  <p>
                    This is an online chess website, created with two friends as
                    part of a three-person group project using agile
                    methodologies.
                  </p>
                  <p>
                    <strong>
                      Note: It may take ~30 seconds to connect to the database if the database hasn't been accessed recently. This is due to the cheap hosting plan that I chose.
                    </strong>
                  </p>
                  <p>
                    Tags: React, SQL, PostgreSQL, Unit Testing, Continuous
                    Deployment, Node.js, Websockets, socket.io, Deno, Netlify,
                    Heroku, JavaScript, CSS, HTML, relational databases,
                    full-stack
                  </p>
                </Card.Text>
                <div className="button-container">
                  <Link to="/chessyem" className="project-link">
                    <Button variant="primary" className="project-button">
                      More Information
                    </Button>
                  </Link>
                  <a
                    href="https://chessyem.netlify.app/"
                    className="project-link"
                  >
                    <Button variant="primary" className="project-button">
                      View Site
                    </Button>
                  </a>
                  <a
                    href="https://github.com/stars/ErikBoonprakong/lists/chessyem"
                    className="project-link"
                  >
                    <Button variant="primary" className="project-button">
                      View Code
                    </Button>
                  </a>
                </div>
              </Card.Body>
            </Card>
            <hr />
            <Card className="project-card">
              <Card.Img
                variant="top"
                src="foodshop-screenshot.png"
                className="project-image"
              />
              <Card.Body className="project-card">
                <Card.Title>
                  <h3>ASP.NET Core 6 E-Commerce Web App</h3>
                </Card.Title>
                <Card.Text className="project-text">
                  <p>
                    My most recent pet project, an online food shop created
                    using ASP.NET Core 6 and C# 10, using the traditional MVC
                    pattern with the addition of some Razor pages.
                  </p>
                  <p>
                    Data for this web app is stored through the use of Entity
                    Framework Core 6.
                  </p>
                  <p>
                    Tags: C# 10, SQL, ASP.NET Core 6, Razor, Blazor, Unit
                    Testing, xUnit, Entity Framework Core 6, Full-stack
                  </p>
                </Card.Text>
                <div className="button-container">
                  <Link to="/foodshop" className="project-link">
                    <Button variant="primary" className="project-button">
                      More Information
                    </Button>
                  </Link>
                  <a
                    href="https://ecommerce-site-aspnet-5ca2ec54bfb3.herokuapp.com/"
                    className="project-link"
                  >
                    <Button variant="primary" className="project-button">
                      View Site
                    </Button>
                  </a>
                  <a
                    href="https://github.com/ErikBoonprakong/FoodShop"
                    className="project-link"
                  >
                    <Button variant="primary" className="project-button">
                      View Code
                    </Button>
                  </a>
                </div>
              </Card.Body>
            </Card>
            <hr />
            <Card className="project-card">
              <Card.Img
                variant="top"
                src="sliderpuzzle-screenshot.png"
                className="project-image"
              />
              <Card.Body className="project-card">
                <Card.Title>
                  <h3>React Puzzle Game Website</h3>
                </Card.Title>
                <Card.Text className="project-text">
                  <p>
                    This is a pet project that I am currently working on. It's a{" "}
                    full-stack React app where the user can sign up and earn
                    varying amounts of points for completing different puzzles.
                    I'm currently working on adding different difficulties and
                    new puzzles for the user to chose from.
                  </p>
                  <p>
                    <strong>
                      Note: The backend to this project is currently down due to
                      ElephantSQL discontinuing their services. This issue will
                      be fixed soon.
                    </strong>
                  </p>
                  <p>
                    Tags: React, SQL, PostgreSQL, Deno, Continuous Deployment,
                    HTML, CSS, JavaScript, Full-stack
                  </p>
                </Card.Text>
                <div className="button-container">
                  <Link to="/puzzle" className="project-link">
                    <Button variant="primary" className="project-button">
                      More Information
                    </Button>
                  </Link>
                  <a
                    href="https://erikspuzzlegame.netlify.app/"
                    className="project-link"
                  >
                    <Button variant="primary" className="project-button">
                      View Site
                    </Button>
                  </a>
                  <a
                    href="https://github.com/stars/ErikBoonprakong/lists/puzzle-game-site"
                    className="project-link"
                  >
                    <Button variant="primary" className="project-button">
                      View Code
                    </Button>
                  </a>
                </div>
              </Card.Body>
            </Card>
            <hr />
            <Card className="project-card">
              <Card.Img
                variant="top"
                src="paint-screenshot.png"
                className="project-image"
              />
              <Card.Body className="project-card">
                <Card.Title>
                  <h3>Vanilla JavaScript Painting App</h3>
                </Card.Title>
                <Card.Text className="project-text">
                  <p>
                    One of my earliest projects, a painting app created with
                    JavaScript canvas.
                  </p>
                  <p>Tags: JavaScript, HTML, CSS</p>
                </Card.Text>
                <div className="button-container">
                  <Link to="/paint" className="project-link">
                    <Button variant="primary" className="project-button">
                      More Information
                    </Button>
                  </Link>
                  <a
                    href="https://htmlpreview.github.io/?https://github.com/ErikBoonprakong/Canvas-paint/blob/main/Paint%20Canvas.html"
                    className="project-link"
                  >
                    <Button variant="primary" className="project-button">
                      View Site
                    </Button>
                  </a>
                  <a
                    href="https://github.com/ErikBoonprakong/Canvas-paint"
                    className="project-link"
                  >
                    <Button variant="primary" className="project-button">
                      View Code
                    </Button>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </div>
          <table className="nav-table">
            <td className="nav-table-cell">
              <Link to="/contact" className="nav-table-cell">
                Contact Me{" "}
                <img
                  src="right-arrow.svg"
                  alt="View projects"
                  className="right-arrow"
                />
              </Link>
            </td>
            <td className="nav-table-cell">
              <a
                href={Pdf}
                target="Erik Boonprakong-Kitching - CV"
                className="nav-table-cell"
              >
                View CV{" "}
                <img
                  src="right-arrow.svg"
                  alt="View projects"
                  className="right-arrow"
                />
              </a>
            </td>
          </table>
        </div>
      </div>
    );
  }
}

export default Entry;
