const express = require('express')
const router = express.Router()
const passport = require('passport')

// load validation
const validateCommentInput = require('../../../validation/comment')
// Load model
const Post = require('../../../models/Post')

// Add comment to post by postId
// private route
router.post(
  '/:id', 
  passport.authenticate('jwt', { session: false }), 
  (req, res) => {
    const { errors, isValid } = validateCommentInput(req.body)
    // check validation
    if (!isValid) {
      return res.status(400).json(errors)
    }
    const { id } = req.params
    const { text, name } = req.body
    const { avatar, user } = req.user
    Post.findById(id)
      .then(post => {
        const newComment = {
          text,
          name,
          avatar,
          user
        }

        // Add to comment array
        post.comments.unshift(newComment)
        // save
        post.save()
          .then(post => res.json(post))
      })
      .catch(err => res.status(404).json({ postNotFound: 'No post found' }))
  }
)

// Delete comment of post
// private route
router.delete(
  '/:id/:comment_id', 
  passport.authenticate('jwt', { session: false }), 
  (req, res) => {
    const { id, comment_id } = req.params
    Post.findById(id)
      .then(post => {
        if (
          post.comments
            .filter(comment => comment._id.toString() === comment_id)
            .length === 0
        ) {
          return res.status(404).json({ commentNotExists: 'Comment does not exist' })
        }

        // get remove index
        const removeIndex = post.comments
          .map(item => item._id.toString())
          .indexOf(comment_id)

        // splice out of array
        post.comments.splice(removeIndex, 1)
        // save
        post.save()
          .then(post => res.json(post))
      })
      .catch(err => res.status(404).json({ postNotFound: 'No post found' }))
  }
)

module.exports = router