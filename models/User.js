const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// use normal function (not arrow function) to use this pointer (point to this of class)
UserSchema.methods.hashPassword = function(password) {
  let isHashed = false;
  return bcrypt
    .genSalt(10)
    .then(salt => {
      return bcrypt.hash(password, salt);
    })
    .then(hash => {
      this.password = hash;
      isHashed = true;
      return isHashed;
    })
    .catch(err => {
      console.log(err);
      return isHashed;
    });
};

UserSchema.statics.checkExists = function(condition) {
  let isExists = false;
  return this.model("users")
    .findOne(condition)
    .then(user => {
      if (!user) return { isExists, user: null };
      isExists = true;
      return { isExists, user };
    })
    .catch(console.log);
};

UserSchema.statics.comparePassword = function(password, password2) {
  return bcrypt
    .compare(password, password2)
    .then(isMatch => isMatch)
    .catch(console.log);
};

module.exports = User = mongoose.model("users", UserSchema);
