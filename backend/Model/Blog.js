const mongoose = require("mongoose");
const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  desc: {
    type: String,
  },
});

const Blog = mongoose.model("blog", BlogSchema);

module.exports = Blog;
