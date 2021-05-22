const express = require("express");

const feedController = require("../controllers/feed")

const router = express.Router();

//GET /api/v1/feed/posts
router.get("/posts", feedController.getPosts);

//POST /api/v1/post
router.post("/post", feedController.createPost);

module.exports = router;
