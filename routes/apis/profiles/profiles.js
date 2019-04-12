const express = require('express')
const router = express.Router()
const passport = require('passport')

// load validation
const validateProfileInput = require('../../../validation/profile')
// Load model
const Profile = require('../../../models/Profile')
const User = require('../../../models/User')
// Load routes
const experience = require('./experience')
const education = require('./education')
// Use routes
router.use('/experience', experience)
router.use('/education', education)

router.get('/test', (req, res) => res.json({ msg: "It's works" }))

// get curent user profile
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  let errors = {}

  Profile.findOne({ user: req.user.id })
    .populate('user', ['name', 'avatar'])
    .then(profile => {
      if (!profile) {
        errors.noProfile = 'There is no profile for this user'
        res.status(404).json(errors)
      }
      res.json(profile)
    })
    .catch(err => res.status(404).json(err))
})

// get all profile
// public
router.get('/all', (req, res) => {

  let errors = {}
  Profile
    .find()
    .populate('user', ['name', 'avatar'])
    .then(profiles => {
      if (!profiles) {
        errors.noProfile = 'There are no profiles'
        return res.status(404).json(errors)
      }
      res.json(profiles)
    })
    .catch(err => 
      res.status(404).json({ profile: 'There are no profiles'})  
    )
})

// get profile by handle
// public route
router.get('/handle/:handle', (req, res) => {
  let errors = {}
  const { handle } = req.params
  Profile.findOne({ handle })
    .populate('user', ['name', 'avatar'])
    .then(profile => {
      if (!profile) {
        errors.noProfile = 'There is no profile for this user'
        res.status(404).json(errors)
      }
      res.json(profile)
    })
    .catch(err => {
      res.status(404).json({ noProfile: 'There is no profile for this user'})  
    })
})

// get profile by ID
// public route
router.get('/user/:user_id', (req, res) => {
  let errors = {}
  const { user_id } = req.params
  Profile.findOne({ user: user_id })
    .populate('user', ['name', 'avatar'])
    .then(profile => {
      if (!profile) {
        errors.noProfile = 'There is no profile for this user'
        res.status(404).json(errors)
      }
      res.json(profile)
    })
    .catch(err => 
      res.status(404).json({ noProfile: 'There is no profile for this user'})
    )
})


// Create user profile
// Private route
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateProfileInput(req.body)
  // check validation
  if (!isValid) {
    // return any errors with 400 status
    return res.status(400).json(errors)
  }

  // get fields
  const profileFields = {}
  const { id } = req.user
  const {
    handle,
    company,
    website,
    location,
    bio,
    status,
    githubUsername,
    skills,
    youtube,
    twitter,
    facebook,
    linkedin,
    instagram
  } = req.body
  profileFields.user = id
  if (handle) profileFields.handle = handle
  if (company) profileFields.company = company
  if (website) profileFields.website = website
  if (location) profileFields.location = location
  if (bio) profileFields.bio = bio
  if (status) profileFields.status = status
  if (githubUsername) profileFields.githubUsername = githubUsername

  // Skills - split into array
  if (skills) profileFields.skills = skills.split(',')
  // Social
  profileFields.social = {}
  if (youtube) profileFields.social.youtube = youtube
  if (twitter) profileFields.social.twitter = twitter
  if (facebook) profileFields.social.facebook = facebook
  if (linkedin) profileFields.social.linkedin = linkedin
  if (instagram) profileFields.social.instagram = instagram

  Profile.findOne({ user: id })
    .then(profile => {
      if (profile) {
        // update
        Profile.findOneAndUpdate(
          { user: id }, 
          { $set: profileFields }, 
          { new: true }
        )
          .then(profile => res.json(profile))
      } else {
        // create

        // Check if handle exists
        Profile.findOne({ handle: profileFields.handle })
          .then(profile => {
            if (profile) {
              errors.handle = 'That handle already exists'
              res.status(400).json(errors)
            }

            // Save profile
            new Profile(profileFields)
              .save()
              .then(profile => res.json(profile))
          })
      }
    })
})

// Delete user profile
// Private route
router.delete('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { id } = req.user
  Profile.findOneAndRemove({ user: id })
    .then(() => {
      User.findOneAndRemove({ _id: id })
        .then(() => res.json({ success: true }))
    })
})


module.exports = router 