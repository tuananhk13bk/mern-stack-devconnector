const express = require("express");
const router = express.Router();
const passport = require("passport");

const educationController = require("../../../controllers/profile/educationController");

// add education to profile
// private route
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  educationController.postAddEducationToProfile
);

// delete education
// private route
router.delete(
  "/:edu_id",
  passport.authenticate("jwt", { session: false }),
  educationController.deleteEducation
);

module.exports = router;
