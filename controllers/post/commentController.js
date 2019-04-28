const Post = require("../../models/Post");
const validateCommentInput = require("../../validation/comment");

const postAddCommentToPost = (req, res) => {
  console.log(req.params);
  console.log(req.body);
  const { errors, isValid } = validateCommentInput(req.body);
  // check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const { postId } = req.params;
  const { text } = req.body;
  const { id, name, avatar } = req.user;
  Post.findById(postId)
    .then(post => {
      const newComment = {
        text,
        name,
        avatar,
        user: id
      };

      // Add to comment array
      post.comments.unshift(newComment);
      // save
      post.save().then(post => res.json(post));
    })
    .catch(err => res.status(404).json({ postNotFound: "No post found" }));
};

const deleteComment = (req, res) => {
  const { id, comment_id } = req.params;
  Post.findById(id)
    .then(post => {
      if (
        post.comments.filter(comment => comment._id.toString() === comment_id)
          .length === 0
      ) {
        return res
          .status(404)
          .json({ commentNotExists: "Comment does not exist" });
      }

      // get remove index
      const removeIndex = post.comments
        .map(item => item._id.toString())
        .indexOf(comment_id);

      // splice out of array
      post.comments.splice(removeIndex, 1);
      // save
      post.save().then(post => res.json(post));
    })
    .catch(err => res.status(404).json({ postNotFound: "No post found" }));
};

module.exports = {
  postAddCommentToPost,
  deleteComment
};
