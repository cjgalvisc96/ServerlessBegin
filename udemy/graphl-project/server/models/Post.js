const mongoose = require("mongoose");
const mongooseSchema = mongoose.Schema;

const postSchema = new mongooseSchema({
  comment: String,
  userId: String
});

module.exports = mongoose.model("Post", postSchema);
