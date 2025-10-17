const Blog = require('../Models/Blogmodel');

// Get all blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json({ message: 'Blogs fetched successfully', data: blogs });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a new blog
const addBlog = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newBlog = new Blog({ title, description });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a blog
const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );
    res.json(updatedBlog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a blog
const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    await Blog.findByIdAndDelete(id);
    res.json({ message: 'Blog deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { getAllBlogs, addBlog, updateBlog, deleteBlog };