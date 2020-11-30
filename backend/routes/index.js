// const express = require("express");
const router = require("express").Router();
const Blog = require("../models/Blog.model");



router.get('/', (req, res, next) => {
  res.status(200).json({ msg: 'Working' });
});


//map through and display blogs
router.get("/getBlogs", (req, res) => {
  console.log("Called For Blogs");
  Blog.find().then((blogs) => {
    console.log(blogs);
    //set the result to the blogs im pulling from the DB
    res.json({ blogs });
  });
});


//get blog details
router.get("/getBlogDetails", (req, res) => {
  console.log(req.query,"<<<<<<<<<<<<<<<<<<<<<<<<<<Req")
  // console.log(req.params, req.query);
  Blog.findById(req.query.id).then((blogs) => {
    // console.log("lemon-water")
    console.log(blogs)
    res.json({ blogs });
  });
});


module.exports = router;
