const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Marker = require("../../models/Marker");
const validateMarkerInput = require("../../validation/markers");

//GET SINGLE MARKER
router.get("/:id", (req, res) => {
  Marker.findById(req.params.id)
    .then((marker) => res.json(marker))
    .catch((err) => res.status(400).json(err));
});

//GET ALL MARKERS (index)
router.get("/", (req, res) => {
  Marker.find()
    .sort({ date: -1 })
    .then((markers) => res.json(markers))
    .catch((err) => res.status(400).json(err));
});

//POST/CREATE A SINGLE MARKER
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateMarkerInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newMarker = new Marker({
      user: req.user.id,
      title: req.body.title,
      description: req.body.description,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
    });

    newMarker.save().then((marker) => res.json(marker));
  }
);

module.exports = router;
