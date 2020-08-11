import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRoomToRedux } from "../../actions/session_actions";
import {
  fetchRoomMessages,
  newLocalMessage,
} from "../../actions/message_action";
import queryString from "query-string";
import io from "socket.io-client";
import InfoBar from "./bar";
import Input from "./input";
import Messages from "./messages";
import TextContainer from "./text";
import "./Chat.css";

let socket;

const Chat = ({ location }) => {
  const user = useSelector((state) => state.session.user);
  const messagesOld = useSelector((state) => state.messages.messages);
  const loading = useSelector((state) => state.messages.loading);
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io();

    setRoom(room);
    setName(name);

    dispatch(addRoomToRedux(room));
    dispatch(fetchRoomMessages(room));

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      if (message.user.toUpperCase() === user.username.toUpperCase()) {
        return;
      }

      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      const unique = [...new Set(users.map((item) => item.name))];
      setUsers([...unique]);
    });
  }, []);

  // const messagesOldMapped = messagesOld.map((o) => ({
  //   user: o.user,
  //   // text: o.message,
  //   text: "onomonopia",
  // }));

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      debugger;
      socket.emit("sendMessage", { message, room, user }, () => setMessage(""));
      dispatch(
        newLocalMessage({
          message,
          user: user.username,
          room,
        })
      );
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  console.log(message, messagesOld, messages);
  return (
    <div className="outerContainer">
      <TextContainer className="users-online" users={users} />
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={[...messagesOld, ...messages]} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};
export default Chat;
