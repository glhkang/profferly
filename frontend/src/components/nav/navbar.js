import React from 'react';
import { Link } from 'react-router-dom';
import MapContainer from "../map/map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faMapMarker, faMap } from "@fortawesome/free-solid-svg-icons";
import '../../index.css';
import './navbar.css';

class NavBar extends React.Component {
//////debugger
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
    this.props.history.push(`/users/${this.props.currentUser.id}`)
  }


  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="navbar-menu-2">
          <div className={"user-show"} onClick={this.handleClick}>
            {this.props.currentUser.username}
          </div>
          <Link to={"/map"}>
            <FontAwesomeIcon className="globe-icon" icon={faGlobe} />
          </Link>

          {/* <img className="globe-icon" src="/assets/icons/world.svg" /> */}
          <Link className={"user-show"} to={"/join"}>
            CHAT
          </Link>
          <Link onClick={this.logoutUser}>LOGOUT</Link>
        </div>
      );
    } else {
      return (
        <div className="navbar-menu">
          <Link to={'/signup'}>Signup</Link>
          <Link to={'/login'}>Login</Link>
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
        <div className="navbar-container">
          <div className="navbar-whitepspace" />
          <div className="navbar-main">
            <div className="navbar-logo">
              <Link to={"/"}>
                <img src="/assets/images/profferly_logo_white_small.png" />
              </Link>
            </div>

            <div className="navbar-left-holder"></div>
            {this.getLinks()}
          </div>
        </div>
      );
    }
    }
}

export default NavBar;