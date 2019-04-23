const Profile = require("../../models/Profile");
const validateExperienceInput = require("../../validation/experience");

const postAddExperienceToProfile = (req, res) => {
  const { errors, isValid } = validateExperienceInput(req.body);
  // check validation
  if (!isValid) {
    // return any errors with 400 status
    return res.status(400).json(errors);
  }
  const { id } = req.user;
  const {
    title,
    company,
    experienceLocation,
    from,
    to,
    current,
    description
  } = req.body;
  Profile.findOne({ user: id }).then(profile => {
    const newExp = {
      title,
      company,
      experienceLocation,
      from,
      to,
      current,
      description
    };

    // Add to experience array
    profile.experience.unshift(newExp);

    profile.save().then(profile => res.json(profile));
  });
};

const deleteExperience = (req, res) => {
  const { id } = req.user;
  const { exp_id } = req.params;
  Profile.findOne({ user: id })
    .then(profile => {
      // get remove index
      const removeIndex = profile.experience
        .map(item => item.id)
        .indexOf(exp_id);
      if (removeIndex !== -1) {
        // splice out of array
        profile.experience.splice(removeIndex, 1);
        // save
        profile
          .save()
          .then(profile => res.json(profile))
          .catch(err => console.log(err));
      } else {
        res.status(404).json({ errors: "This profile is not exists" });
      }
    })
    .catch(err => res.status(404).json(err));
};

module.exports = {
  postAddExperienceToProfile,
  deleteExperience
};
