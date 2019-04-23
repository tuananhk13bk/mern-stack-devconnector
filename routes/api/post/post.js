const express = require("express");
const router = express.Router();
const passport = require("passport");

// import controller
const postController = require("../../../controllers/post/postController");

router.get("/test", (req, res) => res.json({ msg: "posts works" }));

// use routes
router.use("/like", require("./like"));
router.use("/unlike", require("./unlike"));
router.use("/comment", require("./comment"));

// get all posts
// public
router.get("/", postController.getAllPosts);

// get post by id
// public
router.get("/:id", postController.getPostById);

// create post
// Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  postController.postCreatePost
);

// delete post
// private
router.delete(
  "/:postId",
  passport.authenticate("jwt", { session: false }),
  postController.deletePost
);

module.exports = router;
