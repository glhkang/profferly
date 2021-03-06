import React from "react";
import onlineIcon from "../../icons/onlineIcon.png";
import "./Text.css";

const TextContainer = ({ users }) => (
  <div className="textContainer">
    {users ? (
      <div>
        <h1>USERS ONLINE</h1>
        <div className="activeContainer">
          <h2>
            {users.map((name) => (
              <div key={name} className="activeItem">
                <img
                  className="online-icon"
                  alt="Online Icon"
                  src={onlineIcon}
                />
                &nbsp;&nbsp;
                {name}
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
