const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/local", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Define a schema for blogs
const blogSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  body: String,
  author: String,
});
const Blog = mongoose.model("Blog", blogSchema);

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors());
// Route to get all blogs
app.get("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route to get a specific blog by ID
app.get("/blogs/:blogId", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.blogId);
    if (blog) {
      console.log(blog);
      res.json(blog);
    } else {
      res.status(404).json({ error: "Blog not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route to create a new blog
app.post("/blogs", async (req, res) => {
  try {
    const { title, body, author } = req.body;
    const blog = new Blog({
      _id: new mongoose.Types.ObjectId(),
      title: req.body.title,
      body: req.body.body,
      author: req.body.author,
    });
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
});

// Route to delete a blog by ID
app.delete("/blogs/:blogId", async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.blogId);
    if (blog) {
      res.json({ message: "Blog deleted successfully" });
    } else {
      res.status(404).json({ error: "Blog not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
