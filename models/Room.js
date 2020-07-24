const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  _id: String,
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Room", roomSchema);
