const express = require("express");
const router = express.Router();

const Like = require("../../models/Like");
const Dislike = require("../../models/Dislike");

router.post("/getLikes", (req, res) => {
  let obj = {};
  if (req.body.postId) {
    obj = { postId: req.body.postId };
  }

  Like.find(obj).exec((err, likes) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, likes });
  });
});

router.post("/getDislikes", (req, res) => {
  let obj = {};
  if (req.body.postId) {
    obj = { postId: req.body.postId };
  }

  Dislike.find(obj).exec((err, dislikes) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, dislikes });
  });
});

router.post("/upLike", (req, res) => {
  let obj = {};
  if (req.body.postId) {
    obj = { postId: req.body.postId, userId: req.body.userId };
  }

  const like = new Like(obj);
  //save in mongoDB
  like.save((err, likeResult) => {
    if (err) return res.json({ success: false, err });

    Dislike.findOneAndDelete(obj).exec((err, disLikeResult) => {
      if (err) return res.status(400).json({ success: false, err });
      res.status(200).json({ success: true });
    });
  });
});

router.post("/unLike", (req, res) => {
  let obj = {};
  if (req.body.postId) {
    obj = { postId: req.body.postId, userId: req.body.userId };
  }

  Like.findOneAndDelete(obj).exec((err, result) => {
    if (err) return res.status(400).json({ success: false, err });
    res.status(200).json({ success: true });
  });
});

router.post("/unDislike", (req, res) => {
  let obj = {};
  if (req.body.postId) {
    obj = { postId: req.body.postId, userId: req.body.userId };
  }

  Dislike.findOneAndDelete(obj).exec((err, result) => {
    if (err) return res.status(400).json({ success: false, err });
    res.status(200).json({ success: true });
  });
});

router.post("/upDislike", (req, res) => {
  let obj = {};
  if (req.body.postId) {
    obj = { postId: req.body.postId, userId: req.body.userId };
  }

  const dislike = new Dislike(obj);

  dislike.save((err, dislikeResult) => {
    if (err) return res.json({ success: false, err });
    //if like button is already clicked, decrease like by 1
    Like.findOneAndDelete(obj).exec((err, likeResult) => {
      if (err) return res.status(400).json({ success: false, err });
      res.status(200).json({ success: true });
    });
  });
});

module.exports = router;
