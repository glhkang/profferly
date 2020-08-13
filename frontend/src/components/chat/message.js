import React from "react";
import "./Message.css";
import Moment from "react-moment";
const Message = ({ message: { message, user, text, date }, name }) => {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();
  if (user && user.trim().toLowerCase() === trimmedName) {
    isSentByCurrentUser = true;
  }
  if (isSentByCurrentUser) {
    return (
      <div>
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{name}</p>
          <div className="messageBox backgroundGreen">
            <p className="messageText colorWhite">{message}</p>
          </div>
        </div>
        <div className="message-current-date">
          <Moment format="MMM DD, YYYY [at] h:mmA">{date}</Moment>
        </div>
      </div>
    );
    // } else if (user.toLowerCase() === "admin") {
    //   return (
    //     <div className="messageContainer admin">
    //       <div className="messageBox-admin">
    //         <p className="messageText-admin">{text}</p>
    //       </div>
    //     </div>
    //   );
  } else if (!isSentByCurrentUser) {
    // if (text) {
    //   return (
    //     <div className="messageContainer justifyStart">
    //       <div className="messageBox backgroundLight">
    //         <p className="messageText colorDark">{text}</p>
    //         <p className="sentText pl-10 ">{user}</p>
    //       </div>
    //     </div>
    //   );
    // } else {
    return (
      <div>
        <div className="messageContainer justifyStart">
          <div className="messageBox backgroundLight">
            <p className="messageText colorDark">{message}</p>
          </div>
          <p className="sentText pl-10 ">{user}</p>
        </div>
        <div className="message-other-date">
          <Moment format="MMM DD, YYYY [at] h:mmA">{date}</Moment>
        </div>
      </div>
    );
  }
  // }
};
export default Message;
