const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
mongoose.plugin(slug);

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema(
  {
    name: { type: String, maxlength: 255, required: true },
    description: { type: String, maxlength: 255 },
    image: { type: String, maxlength: 255 },
    slug: { type: String, slug: "name", unique: true },
    videoId: { type: String, maxlength: 255, required: true },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Course", Course);
