const Profile = require("../../models/Profile");
const User = require("../../models/User");
const Post = require("../../models/Post");

const postCreateLike = (req, res) => {
  const { id } = req.user;
  const { postId } = req.params;
  // find the user who wanna like
  User.findById(id)
    .then(user => {
      return Post.findById(postId);
    })
    .then(post => {
      const likeArrayByUserId = post.likes.filter(
        like => like.user.toString() === id
      );
      if (likeArrayByUserId.length > 0) {
        return res.status(400).json({
          alreadyLiked: "User already liked this post"
        });
      }

      // Add user ID to like array
      post.likes.unshift({ user: id });

      // remove user ID from unlike array
      // get remove index
      const removeIndex = post.unlikes
        .map(unlike => unlike.user.toString())
        .indexOf(id);
      // splice out of array
      if (removeIndex !== -1) post.unlikes.splice(removeIndex, 1);

      return post.save();
    })
    .then(post => {
      res.json(post);
    })
    .catch(err => res.status(404).json(err));
};

const postCreateUnLike = (req, res) => {
  const { id } = req.user;
  const { postId } = req.params;
  // find the user who wanna like
  User.findById(id)
    .then(user => {
      return Post.findById(postId);
    })
    .then(post => {
      const unlikeArrayByUserId = post.unlikes.filter(
        unlikes => unlikes.user.toString() === id
      );
      if (unlikeArrayByUserId.length > 0) {
        return res.status(400).json({
          notLiked: "You have not yet liked this post"
        });
      }

      // Add user ID to unlike array
      post.unlikes.unshift({ user: id });
      // remove user ID from like array
      // get remove index
      const removeIndex = post.likes
        .map(like => like.user.toString())
        .indexOf(id);
      // splice out of array
      if (removeIndex !== -1) post.likes.splice(removeIndex, 1);

      return post.save();
    })
    .then(post => res.json(post))
    .catch(err => res.status(404).json(err));
};

module.exports = {
  postCreateLike,
  postCreateUnLike
};
