import React from 'react';
import { Link } from 'react-router-dom';
import MapContainer from "../map/map";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGlobe, faMapMarker, faMap } from "@fortawesome/free-solid-svg-icons";
import './navbar.css';

class NavBar extends React.Component {
//////debugger
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div>
          {/* <FontAwesomeIcon className="globe-icon" icon={faGlobe} />
          <FontAwesomeIcon className="globe-icon" icon={faMapMarker} />
          <FontAwesomeIcon className="globe-icon" icon={faMap} /> */}

          <Link to={"/map"}>
            <img className="globe-icon" src="/assets/icons/world.svg" />
          </Link>

          <button className="navbar-logout" onClick={this.logoutUser}>
            Logout
          </button>
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
      return (
        <div className="navbar-container">
          <div className="navbar-whitepspace" />
          <div className="navbar-main">
            <div className="navbar-logo"><Link to={'/'}><img src="/assets/images/profferly_logo_white_small.png" /></Link></div>
            
            
            <div className="navbar-left-holder"></div>
            {this.getLinks()}
          </div>
        </div>
    );
  }
}

export default NavBar;