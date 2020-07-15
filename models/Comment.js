const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    post: {
        type: Schema.Types.ObjectId,
        ref: "posts",
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    author: {
        authId: {
            type: Schema.Types.ObjectId,
            ref: 'users',
        },
        username: String,
    }
});

module.exports = Comment = mongoose.model("comments", CommentSchema);