const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AutoIncrement = require("mongoose-sequence")(mongoose);

let photoSchema = new Schema(
  {
    post_id: { type: Schema.Types.ObjectId, ref: "posts" },
    description: { type: String },
    fileLink: { type: String },
    s3_key: { type: String },
  },
  {
    timestamps: true,
  }
);

photoSchema.plugin(AutoIncrement, { inc_field: "photo_id" });

module.exports = mongoose.model("Photo", photoSchema);
