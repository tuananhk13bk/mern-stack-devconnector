const Post = require("../../models/Post");
const validatePostInput = require("../../validation/post");

const getAllPosts = (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(allPosts => res.json(allPosts))
    .catch(err => res.status(404).json({ noPostFound: "No posts found" }));
};

const getPostById = (req, res) => {
  const { id } = req.params;
  Post.findById(id)
    .then(post => res.json(post))
    .catch(err =>
      res.status(404).json({ noPostFound: "No post found with that ID" })
    );
};

const postCreatePost = (req, res) => {
  const { errors, isValid } = validatePostInput(req.body);
  // check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const { text, name } = req.body;
  const { id, avatar } = req.user;
  const newPost = new Post({
    text,
    name,
    avatar,
    user: id
  });

  newPost
    .save()
    .then(post => res.json(post))
    .catch(err => console.log(err));
};

const deletePost = (req, res) => {
  const { id } = req.user;
  const { postId } = req.params;
  Profile.findOne({ user: id }).then(profile => {
    Post.findById(postId)
      .then(post => {
        // check for post owner
        if (post.user.toString() !== id) {
          return res.status(401).json({ notAuthorized: "User not authorized" });
        }

        // delete
        Post.deleteOne({ postId })
          .then(() => res.json({ success: true }))
          .catch(err => res.json({ cantDelete: "Cant not delete this post" }));
      })
      .catch(err => res.status(404).json({ postNotFound: "No post found" }));
  });
};

module.exports = {
  getAllPosts,
  getPostById,
  postCreatePost,
  deletePost
};
