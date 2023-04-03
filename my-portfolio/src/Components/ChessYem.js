import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./project.css";

class ChessYem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <span className="title">
          ChessYEM - Online Multiplayer Chess Website
        </span>
        <p className="description-big">
          This is an online chess website, created as part of a 3 person group
          project using agile methodologies.
        </p>
        <p className="pic-container">
          <a href="https://hardcore-kepler-5bee6e.netlify.app/">
            <button className="home-btn">View Website</button>
          </a>{" "}
          <a href="https://github.com/ErikBoonprakong/chess-frontend">
            <button className="home-btn">View Frontend Code</button>
          </a>{" "}
          <a href="https://github.com/ErikBoonprakong/chess-backend">
            <button className="home-btn">View Backend Code</button>
          </a>{" "}
          <a href="https://github.com/ErikBoonprakong/chess-websocket">
            <button className="home-btn">View Websocket Code</button>
          </a>
          <p className="description-big">
            Note: the backend functionality is currently unavailable due to Heroku introducing hosting charges, however the backend code can still be viewed.
          </p>
          <img src="chess-screenshot.png" className="display-pic" />
        </p>
        <p className="description-big">
          List of features:
          <ul>
            <li>Account creation</li>
            <li>Play against AI opponent</li>
            <ul>
              <li>Customisable difficulty</li>
              <li>Toggleable features (e.g undo last move, show hints etc.)</li>
              <li>Save game to resume later from saved games menu</li>
            </ul>
            <li>Play against a friend online</li>
            <ul>
              <li>Live chat while playing</li>
              <li>Game results are automatically uploaded to leaderboard</li>
              <li>Extra people may spectate game</li>
            </ul>
            <li>Online game leaderboard</li>
            <li>Saved Games Menu</li>
          </ul>
        </p>
        <p className="description-big">
          My role in this group was the software architect as well as a general
          engineer. I was personally responsible for designing and creating the
          back-end servers and websockets, as well as the account creation
          functionality and leaderboard component.
        </p>
        <p className="description-little">
          <strong>React</strong> was used for creating the{" "}
          <strong>front end</strong> user interface as we wanted to have an
          ultra-responsive feel to the site and also to make use of the many
          open source <strong>libraries</strong> available with React. React
          Router Dom v5 was used to handle all redirects.
        </p>
        <p className="description-little">
          The <strong>back end</strong> consists of two servers, one to
          communicate with the database and another to function as a{" "}
          <strong>websocket</strong> to handle{" "}
          <strong>bidirectional communication</strong> between the client and
          server required for the play online component. The{" "}
          <strong>database</strong> server was made using Deno mostly due to
          Deno's browser API's which made writing front end code really
          convenient as all the communication with the server could be done
          through a standardised fetch function. We had various options for
          hosting the database online (postgres, mySQL...) so we chose Postgres
          because we were already familiar with it and it is more complex, and
          therefore less restrictive should we choose to continue working on
          this project. Socket.io was used to create the websocket server
          because of it's convenient built-in commands to broadcast a message
          (or move) to all people in a room at the tradeoff of slightly higher
          network traffic. Following the official socket.io documentation I used
          Node and Express for this server. Another option was to use Deno
          again, which would have been the obvious choice if implementing the
          websocket in the same server that communicates with the backend, but I
          had already decided that I wanted a{" "}
          <strong>multi-server setup</strong> to minimise downtime.
        </p>
        <p className="description-little">
          <strong>Testing</strong> was done using a combination of Enzyme, Jest
          and react-testing-library. Enzyme to create shallow copies of
          components where Jest could be used to mock certain function (e.g
          handleSubmit()) and react-testing-library to compare received values
          to expected values.
        </p>
        <p className="description-little">
          Chess JS is a JavaScript <strong>library</strong> we used for chess
          move generation/validation, piece movement and result detection.
          However, Chess.js is headless so we were required to integrate it with
          another library, react-chessboard. React-chessboard is a React
          Component that provides actual functionality to the Chessboard. We
          used the onPieceDrop property to run a function whenever the animation
          shows a piece has been dropped on a square.
        </p>
        <p className="description-little">
          Programming the different difficulty levels for the AI opponent was
          done by adopting a Machine Learning Algorithm written by Thomas Ahle.
          The Algorithm was built around a simple, but efficient MTD-bi search
          algorithm. For each piece type, the algorithm contains an 8x8 table of
          integers mapping board pieces to values of the pieces in particular
          positions.
        </p>
        <p className="description-little">
          <strong>Deployment</strong> was done by deploying the front end to{" "}
          <strong>Netlify</strong> and the servers to <strong>Heroku</strong>.
          Both of these options were chosen because of their ability to have the
          site continually deployed from a github repo. So anytime changes were
          pushed to the main branch of a repo the site would be automatically
          redeployed.
        </p>
      </div>
    );
  }
}

export default ChessYem;
