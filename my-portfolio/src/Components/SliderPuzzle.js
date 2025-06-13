import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./entry.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

class Puzzle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="entry text-container">
        <h1 className="projects-header">Puzzle Game App</h1>
        <div className="back-button">
          <Link to="/entry" className="project-link">
            <Button variant="primary" className="project-button">
              Back to My Projects
            </Button>
          </Link>
        </div>
        <p className="description-big">
          This is a pet project that I am currently working on. It's a{" "}
          <strong>full-stack React</strong> app where the user can sign up and
          earn varying amounts of points for completing different puzzles. I'm
          currently working on adding different difficulties and new puzzles for
          the user to chose from.
        </p>

        <p className="pic-container">
          <div className="button-container">
            <a
              href="https://erikspuzzlegame.netlify.app/"
              className="project-link-large"
            >
              <Button variant="primary" className="project-button">
                View Site
              </Button>
            </a>
            <a
              href="https://github.com/stars/ErikBoonprakong/lists/puzzle-game-site"
              className="project-link-large"
            >
              <Button variant="primary" className="project-button">
                View Code
              </Button>
            </a>
          </div>
          <p></p>
          <p className="description-big">
            Note: The backend to this project is currently down due to
            ElephantSQL discontinuing their services. This issue will be fixed
            soon.
          </p>
          <img src="puzzlegame-screenshot.png" className="display-pic" />
        </p>

        <p className="description-big">
          List of features:
          <ul>
            <li>User Account system</li>
            <li>Home Page</li>
            <li>
              Relative style sizing, so the app should be comfortable to play on
              different sized screens
            </li>
            <li>Slider Puzzle game</li>
            <ul>
              <li>Instructions Page</li>
              <li>Difficulty Selection (work in progress)</li>
            </ul>
            <li>Sodoku (unfinished)</li>
            <li>Database + Server to connect with DB</li>
            <li>Header displaying user info</li>

            <li>
              If signed in, the user earns points upon completion of the puzzle
            </li>
            <li>Win message is displayed once puzzle is completed</li>
          </ul>
        </p>
        <p className="description-little">
          This is a full stack <strong>React</strong> app. I chose React for
          this app to minimise loading time as it enables me to just reload the
          game board each time a move is made instead of reloading the entire
          page.
        </p>
        <p className="description-little">
          I <strong>deployed</strong> this to <strong>Netlify</strong>. The
          server is deployed to <strong>Heroku</strong>. I chose to use Netlify
          and Heroku as they both offer <strong>continuous deployment</strong>{" "}
          from a GitHub repo. I used <strong>PostgreSQL</strong> for my online
          database as I was already familiar with it from using it in my chess
          project and it is the most complex option (as opposed to something
          like MySql), meaning it is less likely to cause limitations if I want
          to continue developing this project long into the future.
        </p>
        <p className="description-little">
          My future goals for this project are:
          <ul>
            <li>Come up with a better name</li>
            <li>Finish Sodoku</li>
            <ul>
              <li>Add validation upon completion</li>
              <li>Update score upon successful validation</li>
              <li>Highlight errors upon bad validation</li>
              <li>Highlight selected table cell</li>
              <li>Make preloaded cells unchangeable</li>
              <li>Style buttons</li>
              <li>Add restart and reload buttons</li>
            </ul>
            <li>Add more puzzles</li>
            <li>
              Implement multiple difficulties for the player to chose from in a
              way that doesn't repeat code unnecessarily and that I could add
              more difficulties without too much extra code
            </li>
            <li>Add more pictures for the user to chose as their puzzle.</li>
            <ul>
              <li>
                Potentially look into letting the user upload a picture to use
              </li>
            </ul>
            <li>Leader Board</li>
            <li>Rewards to be purchased with points</li>
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

export default Puzzle;
