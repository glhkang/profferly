const express = require("express");
const router = express.Router();
const passport = require("passport");

const Room = require("../../models/Room");
const validateRoomInput = require("../../validation/rooms");

router.get("/", (req, res) => {
  Room.find()
    .sort({ date: -1 })
    .then((rooms) => res.json(rooms))
    .catch((err) => res.status(400).json(err));
});

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateRoomInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newRoom = new Room({
      name: req.body.name,
    });

    newRoom.save().then((room) => res.json(room));
  }
);
module.exports = router;
