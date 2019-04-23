const express = require("express");
const router = express.Router();
const passport = require("passport");

const userController = require("../../../controllers/userController");
router.post("/register", userController.postRegisterUser);

router.post("/login", userController.postLoginUser);

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  userController.getCurrentUser
);

module.exports = router;
