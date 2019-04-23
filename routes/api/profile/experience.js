const express = require("express");
const router = express.Router();
const passport = require("passport");

const experienceController = require("../../../controllers/profile/experienceController");
// add experience to profile
// private route
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  experienceController.postAddExperienceToProfile
);

// delete experience
// private route
router.delete(
  "/:exp_id",
  passport.authenticate("jwt", { session: false }),
  experienceController.deleteExperience
);

module.exports = router;
