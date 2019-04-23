const express = require("express");
const router = express.Router();
const passport = require("passport");

const profileController = require("../../../controllers/profile/profileController");
// Use routes
router.use("/experience", require("./experience"));
router.use("/education", require("./education"));

// get curent user profile
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  profileController.getCurrentProfile
);

// get all profile
// public
router.get("/all-profile", profileController.getAllProfiles);

// get profile by handle
// public route
router.get("/handle/:handle", profileController.getProfileByHandle);

// get profile by ID
// public route
router.get("/user/:user_id", profileController.getProfileById);

// Create user profile
// Private route
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  profileController.postCreateProfile
);

// Delete user profile
// Private route
router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  profileController.deleteProfile
);

module.exports = router;
