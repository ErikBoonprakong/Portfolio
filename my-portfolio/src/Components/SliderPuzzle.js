import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./project.css";

class Puzzle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <span className="title">Slider Puzzle</span>
        <p className="description-big">
          This is a pet project that I am currently working on. It's a{" "}
          <strong>full-stack React</strong> app where the user can sign up and
          earn varying amounts of points for completing different puzzles. I'm
          currently working on adding different difficulties and new puzzles for
          the user to chose from.
        </p>

        <p className="pic-container">
          <a href="https://erikspuzzlegame.netlify.app/">
            <button className="home-btn">View Website</button>
          </a>{" "}
          <a href="https://github.com/ErikBoonprakong/jigsaw">
            <button className="home-btn">View Code</button>
          </a>
          <p></p>
          <p className="description-big">
            Note: the user score in the left of the header may take around 30
            seconds or so to update after completing a puzzle if the database
            has not been connected to for a while. This is just a result of
            using the free hosting plan with ElephantSQL and most likely would
            not occur if I chose to use one of their paid plans.
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
            <li>Sodoku (unfinished)</li>
            <ul>
              <li>Instructions Page</li>
              <li>Difficulty Selection (work in progress)</li>
            </ul>
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
      </div>
    );
  }
}

export default Puzzle;
