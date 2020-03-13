const express = require('express')
const app = express()
const port = 3000
const router = require('./router')
const exphbs = require('express-handlebars')

// -- Configuration
// Set handlebars as view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// -- Middleware
// Serve static assets from ./public dir
app.use(express.static('public'))

// Parse data provided by form
app.use(express.urlencoded())

// Custom middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`)
  next();
})

// Routes
app.use(router)

// -- Start listening for incoming HTTP requests
app.listen(port, () => console.log(`MVC Express example app listening on port ${port}!`))
