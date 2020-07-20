const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    room: {
    type: mongoose.Schema.Types.ObjectId,
    required: "Room is required!",
    ref: "Room",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: "Room is required!",
    ref: "User",
  },
  message: {
    type: String,
    required: "Message is required!",
  }, date: {
    type: Date,
    default: Date.now,
  
  }
});


module.exports = mongoose.model('Message', messageSchema);