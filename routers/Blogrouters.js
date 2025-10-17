const express = require('express');
// Bedel 'logcontroller' → 'Blogcontroller'
const { getAllBlogs, addBlog, updateBlog, deleteBlog } = require('../Controllers/Blogcontroller');
const router = express.Router();

router.get('/', getAllBlogs);
router.post('/', addBlog);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog);

module.exports = router;