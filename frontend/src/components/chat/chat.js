import React,{ useState, useEffect} from "react";

import { useDispatch, useSelector } from "react-redux";
import { addRoomToRedux } from "../../actions/session_actions"
import { fetchRoomMessages } from "../../actions/message_action";
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from './bar';
import Input from './input';
import Messages from './messages';
import TextContainer from './text';


import "./Chat.css";

let socket;
console.log(io, "this is io")

const Chat = ({ location }) => {
  const user = useSelector((state) => state.session.user);
  const messagesOld = useSelector((state) => state.messages);
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const dispatch = useDispatch();

  const ENDPOINT = "localhost:3000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);
    console.log(socket, "this is socket");

    setRoom(room);
    setName(name);

    dispatch(addRoomToRedux(room));
    dispatch(fetchRoomMessages("tPpa4Dt8CZKAtRcqAAAA"));



    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
     socket.on("id", (id) => console.log(id, "what?"));
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  console.log(messagesOld, "msg")


  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", {message, room, user }, () => setMessage(""));
    }
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>

      <TextContainer users={users} />
    </div>
  );
};

export default Chat;