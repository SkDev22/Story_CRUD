const express = require("express");
const {
  getAllPosts,
  addPosts,
  getPost,
  updatePost,
  deletePost,
} = require("../controllers/postController.js");
const router = express.Router();

//Get posts
router.get("/", getAllPosts);

//Create post
router.post("/add", addPosts);

//Get each post by id
router.get("/:id", getPost);

//Update post
router.put("/update/:id", updatePost);

//Delete post
router.delete("/:id", deletePost);

module.exports = router;
