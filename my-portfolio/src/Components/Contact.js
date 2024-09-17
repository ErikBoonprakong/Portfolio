import React from "react";
import { Link, Redirect } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./entry.css";
import emailjs from "emailjs-com";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      message: "",
      enquirySentMsg: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_w3mlz17",
        "template_8cfun3h",
        e.target,
        "cMcs3juBrIGAHJML_"
      )
      .then(
        (result) => {
          console.log("Message Sent Successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
    this.setState({
      fname: "",
      lname: "",
      email: "",
      message: "",
      enquirySentMsg: "Your message has been sent, thank you.",
    });
  };

  render() {
    return (
      <div className="entry text-container">
        <h1 className="projects-header">Contact Me</h1>
        <div className="back-button">
          <Link to="/entry" className="project-link-large">
            <Button variant="primary" className="project-button">
              Back to My Projects
            </Button>
          </Link>
        </div>
        <div className="result-message">{this.state.enquirySentMsg}</div>
        <div className="contact-form">
          <form className="contact-table" onSubmit={this.handleSubmit}>
            <table className="contact-table">
              <tbody>
                <tr className="contact-name">
                  <td className="contact-cell-small">
                    <label for="fname">First Name:</label>
                    <input
                      type="text"
                      placeholder="First Name(s)"
                      className="contact-input-small"
                      name="fname"
                      id="fname"
                      value={this.state.fname}
                      onChange={this.handleChange}
                    ></input>
                  </td>
                  <td className="contact-cell-small right-hand-cell">
                    <div className="last-name-label">
                      <label for="lname">Last Name:</label>
                    </div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="contact-input-small"
                      name="lname"
                      id="lname"
                      value={this.state.lname}
                      onChange={this.handleChange}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td className="contact-cell-medium">
                    <label for="email">Email Address:</label>
                    <input
                      type="text"
                      placeholder="Email Address"
                      className="contact-input-medium"
                      name="email"
                      id="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td className="contact-cell-large">
                    <label for="message">Message:</label>
                    <input
                      type="text"
                      placeholder="Message"
                      className="contact-input-large"
                      name="message"
                      id="message"
                      value={this.state.message}
                      onChange={this.handleChange}
                    ></input>
                  </td>
                </tr>
              </tbody>
            </table>
            <Button
              variant="primary"
              className="submit-button bottom"
              type="submit"
            >
              Send Enquiry
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
