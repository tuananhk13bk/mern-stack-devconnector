const express = require("express");
const router = express.Router();
const passport = require("passport");

const commentController = require("../../../controllers/post/commentController");

// Add comment to post by postId
// private route
router.post(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  commentController.postAddCommentToPost
);

// Delete comment of post
// private route
router.delete(
  "/:id/:comment_id",
  passport.authenticate("jwt", { session: false }),
  commentController.deleteComment
);

module.exports = router;
