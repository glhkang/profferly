const Room = require('./models/Room');
const User = require('./models/User');
const users = [];

const addUser = ({ id, name, room}) => {
  // name = name.trim().toLowerCase();
  // room = room.trim().toLowerCase();

  // const existingUser = users.find(
  //   (user) => user.room === room && user.name === name
  // );

  // if (!name || !room) return { error: "Username and room are required." };
  // if (existingUser) return { error: "Username is taken." };

  const user = { id, name, room};

  User
    .findOne({username:name})
    .then(user => {
      if (!user.rooms.includes(room)) {
        return user.updateOne({rooms: [...user.rooms, room]})
      } else {
        return console.log("the room is there")
      }
    })
    // .then(user => user.updateOne({rooms: user.rooms.push()
    .catch(err => res.status(400).json(err));

  

  // User.findOne({username:name})
  //   .then((user) => {
  //     if (!user.rooms.includes(room)) {
  //         user.rooms.push(room);
  //     } else {
  //       console.log("we got room")
  //     }
  //   }).catch(() => console.log("err"));

  console.log(id);

  Room.findOne({name:room})
    .then(roomnam => {
      if (roomnam) {
        console.log("we have a room in the db");
      } else {
        let newRoom = new Room({
          _id: id, 
          name: room
        })
       
        newRoom.save().then((room) => (res.json(room)));
        console.log(room)
        console.log("we made a room")
      }
    }).catch(() => console.log("this is a problem"));

  //1. find a user where username===name 
  //2. check if he has the room in user.rooms 
  //3. check if the room is in db 

  users.push(user);

  // const room = new Room ({ name: room});


  // Room.findOne({ name: room})
  //   .then((room) => {
  //     // if (room) {
  //     //   // errors.room= "This room already exists";
  //     //   // return res.status(400).json(errors)
  //     //   return { error: "This room already exists" };
  //     // } else {
  //       newRoom = new Room({
  //         name: room
  //       })
  //       newRoom.save().then((room) => res.json(room));
  //   });

  // Message
  //   .find()
  //   .sort({ date: -1 })
  //   .then(messages => res.json(messages))
  //   .catch(err => res.status(400).json(err))


  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) return users.splice(index, 1)[0];
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
