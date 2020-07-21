const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const Post = require("../../models/Post");
const validatePostInput = require("../../validation/posts");

// photo integrations //
require("dotenv").config();
const multer = require("multer");
const Photo = require("../../models/Photo");
let AWS = require("aws-sdk");
let storage = multer.memoryStorage();
let upload = multer({ storage: storage });

router.get("/test", (req, res) =>
  res.json({ msg: "This is the posts route" })
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

// router.get("/:id/photos", (req, res) => {
//   Photo
//       .find({ _id: req.params.post_id })
//       .sort({ date: -1 })
//       .then((photos) => res.json(photos))
//       .catch((err) => res.status(400).json(err));
// });

// router.post(
//   "/",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     const { errors, isValid } = validatePostInput(req.body);

//     if (!isValid) {
//       return res.status(400).json(errors);
//     }

//     const newPost = new Post({
//       text: req.body.text,
//       user: req.user.id,
//     });

//     newPost.save().then((post) => res.json(post));
//   }
// );

router.post("/", upload.single("file"), 
            passport.authenticate("jwt", { session: false }), 
            function (req, res) {
debugger
  const { errors, isValid } = validatePostInput(req.body);
      if (!isValid) {
        return res.status(400).json(errors);
      }

  let newPost;
  const file = req.file;

  if (file) {
    let s3bucket = new AWS.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION,
    });
  
    let params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: file.originalname,
        Body: file.buffer,
        ContentType: file.mimetype,
        ACL: "public-read",
    };

    newPost = new Post({
        text: req.body.text,
        user: req.user.id,
        file: s3FileURL + file.originalname,
        s3_key: params.Key,
        });

    const s3FileURL = process.env.AWS_Uploaded_File_URL_LINK;

    s3bucket.upload(params, function (err, data) {
        if (err) {
        res.status(500).json({ error: true, Message: err });
        } else {
        res.send({ data });
        
        // let newFileUploaded = {
        //         post_id: req.body.post_id,
        //         description: req.body.description,
        // };
    
            
            newPost.save().then((post) => res.json(post));
        }
    });
    } else {
        newPost = new Post({
            text: req.body.text,
            user: req.user.id,
            // s3_key: params.Key
        })

        newPost.save().then((post) => res.json(post));
    }
debugger
});

module.exports = router;