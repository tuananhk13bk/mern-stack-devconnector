const express = require('express')
const mongoose = require('mongoose')

// Load routes
const users = require('./routes/apis/users')
const profile = require('./routes/apis/profile')
const posts = require('./routes/apis/posts')

const app = express()

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
  app.use('/apis/profile', profile)
  app.use('/apis/posts/', posts)

  const port = process.env.PORT || 5000

  app.listen(port, () => console.log(`Server listening on port ${port}`))