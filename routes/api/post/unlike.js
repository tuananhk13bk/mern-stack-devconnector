const express = require("express");
const router = express.Router();
const passport = require("passport");

const likeController = require("../../../controllers/post/likeController");

// unlike a post with postId
// private route
router.post(
  "/:postId",
  passport.authenticate("jwt", { session: false }),
  likeController.deleteLike
);

module.exports = router;
