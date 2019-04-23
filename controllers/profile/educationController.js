const validateEducationInput = require("../../validation/education");

const postAddEducationToProfile = (req, res) => {
  const { errors, isValid } = validateEducationInput(req.body);
  // check validation
  if (!isValid) {
    // return any errors with 400 status
    return res.status(400).json(errors);
  }

  const { id } = req.user;
  const {
    school,
    degree,
    fieldOfStudy,
    from,
    to,
    current,
    description
  } = req.body;
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
      };

      // Add to experience array
      profile.education.unshift(newEdu);

      return profile.save();
    })
    .then(profile => res.status(200).json(profile))
    .catch(err => res.status(404).json(err));
};

const deleteEducation = (req, res) => {
  const { id } = req.user;
  const { edu_id } = req.params;
  Profile.findOne({ user: id })
    .then(profile => {
      // get remove index
      const removeIndex = profile.education
        .map(item => item.id)
        .indexOf(edu_id);
      if (removeIndex !== -1) {
        // splice out of array
        profile.education.splice(removeIndex, 1);
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
  postAddEducationToProfile,
  deleteEducation
};
