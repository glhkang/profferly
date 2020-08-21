require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const socketio = require("socket.io");
const http = require("http");
const server = http.createServer(app);
const io = socketio(server);
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const markers = require("./routes/api/markers");
const photos = require("./routes/api/photos");
const comments = require("./routes/api/comments");
const rooms = require("./routes/api/rooms");
const messages = require("./routes/api/messages");
const likes = require("./routes/api/likes");
const join = require("./routes/api/join");
const {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
} = require("./chatHelper");
const Message = require("./models/Message");

io.on("connect", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });
    if (error) return callback(error);
    socket.join(user.room);
    // socket.emit("message", {
    //   user: "admin",
    //   text: `${user.name}, welcome to ${user.room}`,
    // });
    socket.emit("id", socket.id);
    // socket.broadcast
    //   .to(user.room)
    //   .emit("message", { user: "admin", text: `${user.name} has joined!` });
    const arr = getUsersInRoom(user.room);
    const items = arr.filter(function (elem, pos) {
      return arr.indexOf(elem) == pos;
    });
    io.to(user.room).emit("roomData", {
      room: user.room,
      users: items,
    });
    callback();
  });

  socket.on("sendMessage", ({ message, room, user }, callback) => {
    const userr = getUser(socket.id);
    const message1 = new Message({
      message,
      user: userr.name,
      room,
      date: Date.now(),
    });
    io.to(userr.room).emit("message", message1);
    message1.save((err) => {
      if (err) return console.error(err);
    });
    callback();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);
    if (user) {
      // io.to(user.room).emit("message", {
      //   user: "Admin",
      //   text: `${user.name} has left`,
      // });
      io.to(user.room).emit("roomData", {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    }
  });
});

app.use("/", express.static(path.join(__dirname, "/client/build")));
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

//below for heroku ** DO NOT DELETE
// app.use("/", express.static(path.join(__dirname, "./client/build")));
app.use("/static", express.static(path.join(__dirname, "/client/build")));

//below for dev ** DO NOT DELETE
// app.get("/", (req, res) => res.send("Hello World"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "frontend", "build", "index.html")
    );
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
app.use("/api/likes", likes);

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server is running on port ${port}`));

//below for heroku ** DO NOT DELETE
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "/index.html"));
});
