const Room = require("./models/Room");
const User = require("./models/User");
const users = [];

const addUser = ({ id, name, room }) => {
  const user = { id, name, room };

  User.findOne({ username: name })
    .then((user) => {
      if (!user.rooms.includes(room)) {
        return user.updateOne({ rooms: [...user.rooms, room] });
      } else {
        return user;
      }
    })
    .catch((err) => res.status(400).json(err));

  Room.findOne({ name: room })
    .then((roomnam) => {
      if (roomnam) {
        return roomnam;
      } else {
        let newRoom = new Room({
          _id: id,
          name: room,
        });

        newRoom.save().then((room) => res.json(room));
      }
    })
    .catch((err) => res.status(400).json(err));

  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) return users.splice(index, 1)[0];
};

const getUser = (id) => users.find((user) => user.id === id);
const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
