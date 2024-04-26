const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/local", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Define a schema for the blogs collection
const blogSchema = new mongoose.Schema({
  id: String,
  title: String,
  body: String,
  author: String,
});

// Create a model based on the schema
const Blog = mongoose.model("Blog", blogSchema);

// Access the 'blogs' collection using the 'Blog' model
const blogsCollection = Blog.collection;
console.log(blogsCollection);

// Now you can perform operations on the 'blogs' collection
