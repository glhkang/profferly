const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  room: {
    type: mongoose.Schema.Types.String,
    required: "Room is required!",
    ref: "Room",
  },
  user: {
    type: String,
    required: "Message is required!",
  },
  message: {
    type: String,
    required: "Message is required!",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Message", messageSchema);
