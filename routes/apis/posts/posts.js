const express = require('express')
const router = express.Router()
const passport = require('passport')

// Load routes
const likes = require('./likes')
const unlikes = require('./unlikes')
const comments = require('./comments')
// validation
const validatePostInput = require('../../../validation/post')
// Load model
const Post = require('../../../models/Post')
const Profile = require('../../../models/Profile')

router.get('/test', (req, res) => res.json({ msg: 'posts works' }))

// use routes
router.use('/likes', likes)
router.use('/unlikes', unlikes)
router.use('/comments', comments)

// get all posts
// public
router.get('/', (req,res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ noPostFound: 'No posts found' }))
})

// get post by id
// public
router.get('/:id', (req,res) => {
  const { id } = req.params
  Post.findById(id)
    .then(post => res.json(post))
    .catch(err => res.status(404).json({ noPostFound: 'No post found with that ID' }))
})

// create post
// Private 
router.post(
  '/', 
  passport.authenticate('jwt', { session: false }), 
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body)
    // check validation
    if (!isValid) {
      return res.status(400).json(errors)
    }
    const { text, name } = req.body
    const { id, avatar } = req.user
    const newPost = new Post({
      text,
      name,
      avatar,
      user: id
    })
  
    newPost
      .save()
      .then(post => res.json(post))
      .catch(err => console.log(err))
  }
) 

// delete post
// private
router.delete(
  '/:postId',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { id } = req.user
    const { postId } = req.params
    Profile.findOne({ user: id })
      .then(profile => {
        Post.findById(postId)
          .then(post => {
            // check for post owner
            if (post.user.toString() !== id) {
              return res.status(401).json({ notAuthorized: 'User not authorized' })
            }

            // delete
            Post.deleteOne({ postId })
              .then(() => res.json({ success: true }))
              .catch(err => res.json({ cantDelete: 'Cant not delete this post' }))
          })
          .catch(err => res.status(404).json({ postNotFound: 'No post found' }))
      })
  }
)

module.exports = router