const express = require("express");
const router = express.Router();
const Posts = require("../models/Posts");
// https://dummyjson.com/posts

router.get("/getallposts", async (req, res) => {
  try {
    const posts = await Posts.find();
    res.json(posts);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error...!!");
  }
});

module.exports = router;
