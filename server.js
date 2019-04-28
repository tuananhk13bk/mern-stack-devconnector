const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cors = require("cors");
const path = require("path");

const app = express();

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

// Use routes
app.use("/api/user", require("./routes/api/user/user"));
app.use("/api/profile", require("./routes/api/profile/profile"));
app.use("/api/post", require("./routes/api/post/post"));
// passport middleware
app.use(passport.initialize());
// passport config
require("./config/passport")(passport);
// DB config
const db = require("./config/keys").mongoURI;

// connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useFindAndModify: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendfile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on port ${port}`));
