const gravatar = require("gravatar");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

const User = require("../models/User");

const postRegisterUser = (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  // check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { name, email, password } = req.body;
  User.checkExists({ email })
    .then(({ isExists }) => {
      if (isExists) {
        errors.email = "Email already exists";
        return res.status(400).json(errors);
      }
      const avatar = gravatar.url(email, {
        s: "200", // size
        r: "pg", // rating
        d: "mm" // default
      });

      const newUser = new User({
        name,
        email,
        password,
        avatar
      });

      newUser
        .hashPassword(password)
        .then(isHashed => {
          if (!isHashed)
            return res.status(500).json({ errors: "Can't not hash password" });
          newUser
            .save()
            .then(user => res.status(200).json(user))
            .catch(err => res.status(500).json(err));
        })
        .catch(err => res.status(500).json(err));
    })
    .catch(err => res.status(500).json(err));
};

const postLoginUser = (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  // check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { email, password } = req.body;
  // find user by email
  User.checkExists({ email })
    .then(({ isExists, user }) => {
      if (!isExists) {
        errors.email = "User not found";
        return res.status(404).json(errors);
      }
      // check password
      User.comparePassword(password, user.password)
        .then(isMatch => {
          if (!isMatch) {
            errors.password = "Password Incorrect!";
            return res.status(400).json(errors);
          }
          const { id, name, avatar } = user;
          const payload = { id, name, avatar };
          // Sign Token
          jwt.sign(
            payload,
            keys.secretOrKey + "123",
            { expiresIn: 3600 },
            (err, token) => {
              res.json({
                success: true,
                token: `Bearer ${token}`
              });
            }
          );
        })
        .catch(err => res.status(404).json(err));
    })
    .catch(err => res.status(404).json(err));
};

const getCurrentUser = (req, res) => {
  const { id, name, email } = req.user;
  res.json({ id, name, email });
};

module.exports = {
  postRegisterUser,
  postLoginUser,
  getCurrentUser
};
