const express = require("express");
const router = express.Router();
const passport = require("passport");
const Message = require("../../models/Message");
const validateMessageInput = require("../../validation/messages");

router.get("/test", (req, res) =>
    res.json({ msg: "This is the messages route" })
);

router.get(
    "/", (req, res) => {
        Message
            .find()
            .sort({ date: -1 })
            .then(messages => res.json(messages))
            .catch(err => res.status(400).json(err))
    }
);

router.post(
    "/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const { errors, isValid } = validateMessageInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const message = new Message({
            room: req.body.room,
            user: req.body.user,
            message: req.body.message
        });

        message.save().then((message) => res.json(message));
    }
);

router.get("/rooms/:room_id", (req, res) => {
  Message.find({ room: req.params.room_id })
    .sort({ date: 1 })
    .limit(20)
    .then((messages) => res.json(messages))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;