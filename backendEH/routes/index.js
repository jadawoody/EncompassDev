// const express = require("express");
const router = require("express").Router();
const Blog = require("../models/Blog.model");

router.get('/', (req, res, next) => {
  res.status(200).json({ msg: 'Working' });
});

//Add a new blog post
// router.post("/newBlog", (req,res) => {
//   Blog.create(req.body).then((blog) => {
//     res.json({ blog });
//   })
// })

//map through and display blogs
router.get("/getBlogs", (req, res) => {
  console.log("Called For Blogs");
  Blog.find().then((blogs) => {
    console.log(blogs);
    //set the result to the blogs im pulling from the DB
    res.json({ blogs });
  });

  //get movie details
router.get("/blogs/:id", (req, res) => {
  console.log(req.params.id);
  Blogs.findById(req.params.id).then((blogs) => {
    res.json({ blogs });
  });
});

});
module.exports = router;
