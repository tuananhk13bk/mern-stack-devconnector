const express = require('express')
const router = express.Router()
const passport = require('passport')

// Like a post with postId
// private route
router.post(
  '/:postId',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { id } = req.user
    const { postId } = req.params
    // find the user who wanna like
    Profile.findOne({ user: id })
      .then(profile => {
        Post.findById(postId)
          .then(post => {
            const likeArrayByUserId = post.likes.filter(
              like => like.user.toString() === id
            )
            if (likeArrayByUserId.length > 0) {
              return res.status(400).json({
                alreadyLiked: 'User already liked this post'
              })
            }

            // Add user ID to like array
            post.likes.unshift({ user: id })

            post.save()
              .then(post => res.json(post))
          })
          .catch(err => res.status(404).json({ postNotFound: 'No post found' }))
      })
  }
)

// Unlike a post with postId
// private route
router.post(
  '/:postId',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { id } = req.user
    const { postId } = req.params
    // find the user who wanna like
    Profile.findOne({ user: id })
      .then(profile => {
        Post.findById(postId)
          .then(post => {
            const likeArrayByUserId = post.likes.filter(
              like => like.user.toString() === id
            )
            if (likeArrayByUserId.length === 0) {
              return res.status(400).json({
                notLiked: 'You have not yet liked this post'
              })
            }

            // Get remove index
            const removeIndex = post.likes
              .map(item => item.user.toString())
              .indexOf(id)

            // splice out of array
            post.likes.splice(removeIndex, 1)

            // save
            post.save()
              .then(post => res.json(post))
          })
          .catch(err => res.status(404).json({ postNotFound: 'No post found' }))
      })
  }
)

module.exports = router