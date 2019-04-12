const express = require('express')
const router = express.Router()
const passport = require('passport')

// load validation
const validateEducationInput = require('../../../validation/education')
// add education to profile
// private route
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateEducationInput(req.body)
  // check validation
  if (!isValid) {
    // return any errors with 400 status
    res.status(400).json(errors)
  }

  const { id } = req.user
  const { school, degree, fieldOfStudy, from, to, current, description } = req.body
  Profile.findOne({ user: id })
    .then(profile => {
      const newEdu = {
        school,
        degree,
        fieldOfStudy,
        from,
        to,
        current,
        description
      }

      // Add to experience array
      profile.education.unshift(newEdu)

      profile
        .save()
        .then(profile => res.json(profile))
    })
})

// delete education
// private route
router.delete('/:edu_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { id } = req.user
  const { edu_id } = req.params
  Profile.findOne({ user: id })
    .then(profile => {
      // get remove index
      const removeIndex = profile.education
        .map(item => item.id)
        .indexOf(edu_id)
      if (removeIndex !== -1) {
        // splice out of array
        profile.education.splice(removeIndex, 1)
        // save
        profile
          .save()
          .then(profile => res.json(profile))
          .catch(err => console.log(err))
      } else {
        res.status(404).json({ errors: 'This profile is not exists'})
      }
    })
    .catch(err => res.status(404).json(err))
})


module.exports = router