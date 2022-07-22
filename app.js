const express = require('express')
const app = express()
const transactionsController = require('./Controllers/Budget.Data.Controllers')

//Dependencies

const cors = require('cors')
const transactions = require('./Controllers/Budget.Data.Controllers')

//___________________
//Middleware
//___________________

app.use(express.json()) // returns middleware that only parses JSON

// this allows any app/site from anywhere access your API. This is a great way to start to get things up and running. Later, add restrictions, as needed.
app.use(cors())

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to budget app!')
})


app.use((req, res, next) => {
  console.log('This code runs for every request', req.method, req.url)
  next()
})


app.use('/transactions', transactionsController)

module.exports = app
