const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Post = require("../../models/Post");
const validatePostInput = require("../../validation/posts");

router.get("/test", (req, res) =>
  res.json({ msg: "This is the posts route" })
);


router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newPost = new Post({
      text: req.body.text,
      user: req.user.id,
    });

    newPost.save().then((post) => res.json(post));
  }
);

router.get(
    "/", (req, res) => {
        Post
        .find()
        .sort({ date: -1 })
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json(err))
    }
);

router.get(
    "/user/:user_id", (req, res) => {
    Post.find({ user: req.params.user_id })
      .sort({ date: -1 })
      .then((posts) => res.json(posts))
      .catch((err) => res.status(400).json(err));
    }
);



router.get(
    "/:id", (req, res) => {
        Post 
        .findById(req.params.id)
        .then(post => res.json(post))
        .catch(err => res.status(400).json(err))
    }
);

router.delete(
    "/:postId", (req, res) => {
        Post
        .findByIdAndRemove(req.params.postId)
        .then((post) => {
            if (!post) {
                return res.status(404).send({
                message: `Post with id ${req.params.postId} not found`,
            });
        }
        return res.send({ message: "Post successfully deleted" });
        })
        .catch((err) => {
            if (err.kind === "ObjectId" || err.name === "NotFound") {
            return res.status(404).send({
            message: `Post with id ${req.params.postId} not found`,
            });
        }

        return res.status(500).send({
        message: `Could not delete post with id ${req.params.postId}`,
      });
    });
});

module.exports = router;