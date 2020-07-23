require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const socketio = require('socket.io');
const http = require('http');

const server = http.createServer(app);
const io = socketio(server);

// require("./chatServer")(server);

const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const markers = require("./routes/api/markers");
const photos = require("./routes/api/photos");
const comments = require("./routes/api/comments");
const rooms = require('./routes/api/rooms');
const messages = require('./routes/api/messages');
const join = require("./routes/api/join");
const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");
const Message = require('./models/Message');
const User = require('./models/User');


io.on("connect", (socket) => {

  socket.on("join", ({ name, room }, callback) => {
  
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.join(user.room);

    socket.emit("message", {
      user: "admin",
      text: `${user.name}, welcome to room ${user.room}.`,
    });

    socket.emit("id", socket.id);

    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name} has joined!` });

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    io.to(socket.id).emit("this is from the back!");

    callback();
  });

  socket.on("sendMessage", ({message, room, user }, callback) => {
    const userr = getUser(socket.id);
    io.to(userr.room).emit("message", { user: userr.name, text: message });
    const message1 = new Message({
      message,
      user: userr.name,
      room,
    });

       message1.save((err) => {
      if (err) return console.error(err);
    });

    callback();
  });

  // socket.on("sendMessage", (msg, callback) => {
  //   // Create a message with the content and the name of the user.
  //   const message = new Message({
  //     message: msg.message,
  //     user: msg.user,
  //     room: msg.room
  //   });

  //   message.save((err) => {
  //     if (err) return console.error(err);
  //   });

  //   const user = getUser(socket.id);

  //   io.to(user.room).emit("message", { user: user.name, text: message });

  //   callback();

  //   //     // Notify all other users about a new message.
  //   socket.broadcast.emit("push", msg);
  //   });


  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit("message", {
        user: "Admin",
        text: `${user.name} has left.`,
      });
      io.to(user.room).emit("roomData", {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    }
  });
});


// 2.put!!
// io.on("connection", (socket) => {
//   // Get the last 10 messages from the database.
//   Message.find()
//     .sort({ createdAt: -1 })
//     .limit(10)
//     .exec((err, messages) => {
//       if (err) return console.error(err);

//       // Send the last messages to the user.
//       socket.emit("init", messages);
//     });

//   // Listen to connected users for a new message.
//   socket.on("message", (msg) => {
//     // Create a message with the content and the name of the user.
//     const message = new Message({
//       message: msg.message,
//       user: msg.user,
//       room: msg.room
//     });

// //     // Save the message to the database.
//     message.save((err) => {
//       if (err) return console.error(err);
//     });

// //     // Notify all other users about a new message.
//     socket.broadcast.emit("push", msg);
// //   });
// });
// below for heroku
app.use("/", express.static(path.join(__dirname, "/client/build")));

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));


app.get("/", (req, res) => res.send("Hello World"));


if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

app.use(passport.initialize());
require("./config/passport")(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/markers", markers);
app.use("/api/photos", photos);
app.use("/api/comments", comments);
app.use("/api/join", join);
app.use("/api/rooms", rooms);
app.use("/api/messages", messages);


const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server is running on port ${port}`));


//below for heroku
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "/client/build", "index.html"));
// });
