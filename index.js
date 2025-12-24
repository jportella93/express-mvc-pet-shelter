const path = require('path')

const express = require('express')
const helmet = require('helmet')
const { engine } = require('express-handlebars')

const router = require('./router')

const app = express()
const port = process.env.PORT || 3000

// -- Configuration
// Set handlebars as view engine
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

// Render (and other platforms) sit behind a proxy/load balancer
app.set('trust proxy', 1)
app.disable('x-powered-by')

// -- Middleware
app.use(helmet())

// Serve static assets from ./public dir
app.use(express.static(path.join(__dirname, 'public')))

// Parse data provided by form
app.use(express.urlencoded({ extended: false }))

// Custom middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`)
  next();
})

// Routes
app.use(router)

// Error handler (keeps stacktraces out of responses in production)
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).send('Internal Server Error')
})

// -- Start listening for incoming HTTP requests
app.listen(port, () => console.log(`MVC Express example app listening on port ${port}!`))
