const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const slug = require("mongoose-slug-updater");

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

// Add plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

module.exports = mongoose.model("Course", Course);
