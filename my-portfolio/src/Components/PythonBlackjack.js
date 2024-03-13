import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./project.css";

class PythonBlackjack extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <span className="title">Python Blackjack Game</span>
        <p className="description-big">
          This is a simple console blackjack game created with python.
        </p>
        <p className="pic-container">
          <a href="https://github.com/ErikBoonprakong/PythonBlackjack">
            <button className="home-btn">View Code</button>
          </a>
          <p></p>
          <img src="python-blackjack-screenshot.png" className="display-pic" />
        </p>
        <p className="description-big">
          Rules of the game:
          <ul>
            <li>The player and the dealer each start with 2 cards.</li>
            <li>
              All cards are worth their respective number of points. Aces can be
              worth 1 or 11. J, Q, K are each worth 10.
            </li>
            <li>The player then has the option to 'hit' or 'stick'.</li>
            <li>If the player's total is less than 17 then they must 'hit'.</li>
            <li>'hit' draws the player one more card, updating their total.</li>
            <li>
              The dealer then chooses to hit if the dealer has less than 17
              points, otherwise the dealer will choose to 'stick'.
            </li>
            <li>Exceeding 21 points instantly loses the game.</li>
            <li>
              Once someone has chosen to 'stick' they can no longer draw cards.
            </li>
            <li>The game ends once both people have chosen to stick.</li>
            <li>At the end of the game whoever is closest to 21 wins.</li>
            <li>
              'Blackjack' is achieved when someone sticks with just 2 cards and
              those 2 cards contain an ace and a picture card (J, Q, K).
            </li>
            <li>
              Blackjack is the most valuable score someone can receive and is
              worth more than any other combination totalling 21.
            </li>
            <li>
              If both the player and the dealer score a blackjack then the game
              is a draw.
            </li>
            <li>
              If the player and the dealer have equal scores then the person
              with the most cards in their hand wins.
            </li>
            <li>
              If both scores are equal and both people are holding the same
              number of cards then the game is a draw.
            </li>
          </ul>
        </p>
      </div>
    );
  }
}

export default PythonBlackjack;
