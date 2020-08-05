import React from "react";
import "./Message.css";

const Message = ({ message: { message, user }, name }) => {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();

  if (user && user.trim().toLowerCase() === trimmedName) {
    isSentByCurrentUser = true;
  }

  if (isSentByCurrentUser) {
    // debugger;
    return (
      <div className="messageContainer justifyEnd">
        <p className="sentText pr-10">{name}</p>
        <div className="messageBox backgroundGreen">
          <p className="messageText colorWhite">{message}</p>
        </div>
      </div>
    );
  } else if (user === "admin") {
    return (
      <div className="messageContainer admin">
        <div className="messageBox-admin">
          <p className="messageText-admin">{message}</p>
        </div>
      </div>
    );
  } else if (!isSentByCurrentUser) {
    // debugger;
    return (
      <div className="messageContainer justifyStart">
        <div className="messageBox backgroundLight">
          <p className="messageText colorDark">{message}</p>
        </div>
        <p className="sentText pl-10 ">{user}</p>
      </div>
    );
  }
};

export default Message;
