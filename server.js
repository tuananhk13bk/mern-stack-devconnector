const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
// Load routes
const users = require('./routes/apis/users/users')
const profiles = require('./routes/apis/profiles/profiles')
const posts = require('./routes/apis/posts/posts')

const app = express()

// middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// passport middleware
app.use(passport.initialize())
// passport config
require('./config/passport')(passport)

// DB config
const db = require('./config/keys').mongoURI

// connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

  app.get('/', (req, res) => res.send('Hello World!'))

  // Use routes
  app.use('/apis/users', users)
  app.use('/apis/profiles', profiles)
  app.use('/apis/posts', posts)

  const port = process.env.PORT || 5000

  app.listen(port, () => console.log(`Server listening on port ${port}`))