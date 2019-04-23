const Profile = require("../../models/Profile");
const User = require("../../models/User");
const validateProfileInput = require("../../validation/profile");

const getAllProfiles = (req, res) => {
  let errors = {};
  Profile.find()
    .populate("user", ["name", "avatar"])
    .then(profiles => {
      if (!profiles) {
        errors.noProfile = "There are no profiles";
        return res.status(404).json(errors);
      }
      res.json(profiles);
    })
    .catch(err => res.status(404).json({ profile: "There are no profiles" }));
};

const getProfileBy = (param, res) => {
  Profile.findOne(param)
    .populate("user", ["name", "avatar"])
    .then(profile => {
      if (!profile)
        return res
          .status(404)
          .json({ error: "There is not profile for this user" });
      res.status(200).json(profile);
    })
    .catch(err => {
      res.status(404).json(err);
    });
};

const getCurrentProfile = (req, res) => {
  getProfileBy({ user: req.user.id }, res);
};

const getProfileByHandle = (req, res) => {
  getProfileBy({ handle: req.params.handle }, res);
};

const getProfileById = (req, res) => {
  getProfileBy({ user: req.params.user_id }, res);
};

const postCreateProfile = (req, res) => {
  const { errors, isValid } = validateProfileInput(req.body);
  // check validation
  if (!isValid) {
    // return any errors with 400 status
    return res.status(400).json(errors);
  }

  // get fields
  const profileFields = {};
  const { id } = req.user;
  const {
    handle,
    company,
    website,
    profileLocation,
    bio,
    status,
    github,
    skills,
    youtube,
    twitter,
    facebook,
    linkedin,
    instagram
  } = req.body;
  profileFields.user = id;
  if (handle) profileFields.handle = handle;
  if (company) profileFields.company = company;
  if (website) profileFields.website = website;
  if (profileLocation) profileFields.profileLocation = profileLocation;
  if (bio) profileFields.bio = bio;
  if (status) profileFields.status = status;
  if (github) profileFields.github = github;

  // Skills - split into array
  if (skills) profileFields.skills = skills.replace(/ /g, "").split(",");
  // Social
  profileFields.social = {};
  if (youtube) profileFields.social.youtube = youtube;
  if (twitter) profileFields.social.twitter = twitter;
  if (facebook) profileFields.social.facebook = facebook;
  if (linkedin) profileFields.social.linkedin = linkedin;
  if (instagram) profileFields.social.instagram = instagram;

  Profile.findOne({ user: id }).then(profile => {
    if (profile) {
      // update
      Profile.findOneAndUpdate(
        { user: id },
        { $set: profileFields },
        { new: true }
      )
        .then(profile => res.status(200).json(profile))
        .catch(err => res.status(404).json(err));
    } else {
      // create

      // Check if handle exists
      Profile.findOne({ handle: profileFields.handle })
        .then(profile => {
          if (profile) {
            errors.handle = "That handle already exists";
            return res.status(400).json(errors);
          }

          // Save profile
          return new Profile(profileFields).save();
        })
        .then(profile => res.status(200).json(profile))
        .catch(err => res.status(404).json(err));
    }
  });
};

const deleteProfile = (req, res) => {
  const { id } = req.user;
  Profile.findOneAndRemove({ user: id })
    .then(() => {
      return User.findOneAndRemove({ _id: id });
    })
    .then(() => res.json({ success: true }))
    .catch(err => res.status(404).json(err));
};

module.exports = {
  getAllProfiles,
  getCurrentProfile,
  getProfileByHandle,
  getProfileById,
  postCreateProfile,
  deleteProfile
};
