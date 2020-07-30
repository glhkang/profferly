import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import "../../index.css";
import "./navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  handleClick() {
    this.props.history.push(`/users/${this.props.currentUser.id}`);
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="navbar-menu-2">
          <div className="user-show" onClick={this.handleClick}>
            {this.props.currentUser.username}
          </div>

          <Link to={"/map"}>
            <FontAwesomeIcon className="globe-icon" icon={faGlobe} />
          </Link>

          <Link onClick={this.logoutUser} to={"/login"}>
            LOG OUT
          </Link>
        </div>
      );
    } else {
      return (
        <div className="navbar-menu">
          <Link to={"/signup"}>Sign up</Link>
          <Link to={"/login"}>Log in</Link>
        </div>
      );
    }
  }

  render() {
    if (
      this.props.location.pathname.startsWith("/map") ||
      this.props.location.pathname.startsWith("/form")
    ) {
      return null;
    } else {
      return (
        <div>
          <div className="navbar-container">
            <section className="navbar-white"></section>
            <div className="navbar-main">
              <div className="navbar-logo">
                <Link to={"/"}>
                  <img
                    src="/assets/images/profferly_logo_white_small.png"
                    alt="Profferly Logo"
                  />
                </Link>
              </div>

              <div className="navbar-left-holder"></div>
              {this.getLinks()}
            </div>
          </div>

          <div className="chat-container">
            <Link className="user-show" to={"/join"}>
              <div className="chat-bubble">
                <FontAwesomeIcon className="chat-button" icon={faCommentDots} />
              </div>
            </Link>
          </div>
        </div>
      );
    }
  }
}

export default NavBar;
