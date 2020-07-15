const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Comment = require("../../models/Comment");
const validateCommentInput = require("../../validation/comments");

router.get("/test", (req, res) =>
    res.json({ msg: "This is the comments route" })
);

router.post(
    "/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const { errors, isValid } = validateCommentInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors) ;
        }
        const newComment = new Comment({
            author: {
                authorId: req.user.id,
                username: req.user.username },
            text: req.body.text,
            post: req.body.post,
        });

        newComment.save().then((comment) => res.json(comment));
    }
);


//TESTED WORKS IN BROWSER
router.get("/", (req, res) => {
    Comment
        .find()
        .sort({ date: -1 })
        .then((comments) => res.json(comments))
        .catch((err) => res.status(400).json(err));
});


router.get("/post/:post_id", (req, res) => {
    Comment
        .find({ post: req.params.post_id })
        .sort({ date: -1 })
        .then((comments) => res.json(comments))
        .catch((err) => res.status(400).json(err));
});

// router.post("/post/:post_id", (req, res) => {
//     Comment
//         .find({ post: req.params.post_id })
//         .sort({ date: -1 })
//         .then((comments) => res.json(comments))
//         .catch((err) => res.status(400).json(err));
// });


//TESTED IN POSTMAN AND WORKS
router.get("/:id", (req, res) => {
    Comment
        .findById(req.params.id)
        .then((comment) => res.json(comment))
        .catch((err) => res.status(400).json(err));
});

//TESTED IN POSTMAN AND WORKS
router.delete("/:commentId", (req, res) => {
    Comment
        .findByIdAndRemove(req.params.commentId)
        .then((comment) => {
            if (!comment) {
                    return res.status(404).send({
                    message: `Comment with id ${req.params.commentId} not found`,
                    });
            }
            return res.send({ message: "Comment successfully deleted" });
        })
        .catch((err) => {
            if (err.kind === "ObjectId" || err.name === "NotFound") {
                    return res.status(404).send({
                    message: `Comment with id ${req.params.commentId} not found`,
                    });
            }

            return res.status(500).send({
                    message: `Could not delete comment with id ${req.params.commentId}`,
            });
        });
});



// router.get("/user/:user_id", (req, res) => {
//     Comment
//         .find({ user: req.params.user_id })
//         .sort({ date: -1 })
//         .then((comments) => res.json(comments))
//         .catch((err) => res.status(400).json(err));
// });

module.exports = router;