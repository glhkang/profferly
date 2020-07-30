const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dislikeSchema = new Schema(
  {
    postId: {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = DisLike = mongoose.model("dislikes", dislikeSchema);
