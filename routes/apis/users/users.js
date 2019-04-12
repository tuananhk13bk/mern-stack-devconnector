const express = require('express')
const router = express.Router()
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const keys = require('../../../config/keys')

// Load input validation
const validateRegisterInput = require('../../../validation/register')
const validateLoginInput = require('../../../validation/login')
// Load User model
const User = require('../../../models/User')

router.get('/test', (req, res) => res.json({ msg: 'users works' }))
 
router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body)
  // check validation
  if (!isValid) {
    return res.status(400).json(errors)
  }

  const { name, email, password } = req.body
  User.findOne({ email })
    .then(user => {
      if (user) {
        errors.email = 'Email already exists'
        return res.status(400).json(errors)
      } else {
        const avatar = gravatar.url(email, {
          s: '200', // size
          r: 'pg', // rating
          d: 'mm' // default
        })

        const newUser = new User({
          name,
          email,
          password,
          avatar
        })

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err
            newUser.password = hash
            newUser.save()
              .then(user => {
                const { name, email, avatar, date } = user
                res.json({ name, email, avatar, date })
              })
              .catch(err => console.log(err))
          })
        })
      }
    })
})

router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body)
  // check validation
  if (!isValid) {
    return res.status(400).json(errors)
  }

  const { email, password } = req.body
  // find user by email
  User.findOne({ email })
    .then(user => {
      if (!user) {
        errors.email = 'User not found'
        return res.status(404).json(errors)
      }
      // check password
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const { id, name, avatar } = user
            const payload = { id, name, avatar }
            // Sign Token
            jwt.sign(
              payload, 
              keys.secretOrKey, 
              { expiresIn: 3600 }, 
              (err, token) => {
                res.json({
                  success: true,
                  token: `Bearer ${token}`
                })
              }
            )
          } else {
            errors.password = 'Password Incorrect!'
            res.status(400).json(errors)
          }
        })
    })
})

router.get(
  '/current', 
  passport.authenticate('jwt', { session: false }), 
  (req, res) => {
    const { id, name, email } = req.user
    res.json({ id, name, email })
  }
)

module.exports = router