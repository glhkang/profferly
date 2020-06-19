const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AutoIncrement = require("mongoose-sequence")(mongoose);

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  file: { 
    type: String 
  },

  s3_key: { 
    type: String 
  },
});

// postSchema.plugin(AutoIncrement, { inc_field: "photo_id" });

module.exports = Post = mongoose.model("posts", PostSchema);
