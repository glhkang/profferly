import React from 'react';
import { Link } from 'react-router-dom';
import MapContainer from "../map/map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMinimize } from "@fortawesome/free-solid-svg-icons";
import { faGlobe, faMapMarker, faMap, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import '../../index.css';
import './navbar.css';
import ChatModal from '../chat/chat_modal';

class NavBar extends React.Component {
//////debugger
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    // this.openModal = this.openModal.bind(this);
    // this.closeModal = this.closeModal.bind(this);
    this.handleClick = this.handleClick.bind(this);
    
  }
  
  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  handleClick() {
    this.props.history.push(`/users/${this.props.currentUser.id}`)
  }

  openModal() {
    const modal = document.getElementsByClassName("chat-modal");
    modal.className += "open-modal";
  }

  closeModal() {
    const modal = document.getElementsByClassName("chat-modal");
    modal.className += "close-modal";
    modal.removeClass("open-modal");
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

          {/* <Link className="user-show" to={"/join"}>
            CHAT
          </Link> */}
          <Link onClick={this.logoutUser} to={"/login"}>LOG OUT</Link>
        </div>
      );
    } else {
      return (
        <div className="navbar-menu">
          <Link to={'/signup'}>Sign up</Link>
          <Link to={'/login'}>Log in</Link>
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
                  <img src="/assets/images/profferly_logo_white_small.png" />
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
              {/* <span className="modal-minimize">
                  <FontAwesomeIcon className="minimize-button" icon={faWindowMinimize} />
              </span>
            <div className="chat-modal"> */}
              {/* <ChatModal /> */}
            {/* </div> */}
        </div>
      </div>
      );
    }
    }
}

export default NavBar;