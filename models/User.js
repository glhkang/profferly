const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Comment = require("./Comment").schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  rooms: { type: Array, default: [] },
  comments: [Comment],
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
