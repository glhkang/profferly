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



const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const markers = require("./routes/api/markers");
const photos = require("./routes/api/photos");
const comments = require("./routes/api/comments");
const join = require("./routes/api/join");
const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");
const Message = require('./models/Message');


io.on("connect", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.join(user.room);

    socket.emit("message", {
      user: "admin",
      text: `${user.name}, welcome to room ${user.room}.`,
    });
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name} has joined!` });

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit("message", { user: user.name, text: message });

    callback();
  });

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
//       content: msg.content,
//       name: msg.name,
//     });

//     // Save the message to the database.
//     message.save((err) => {
//       if (err) return console.error(err);
//     });

//     // Notify all other users about a new message.
//     socket.broadcast.emit("push", msg);
//   });
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


const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server is running on port ${port}`));


//below for heroku
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "/client/build", "index.html"));
// });
