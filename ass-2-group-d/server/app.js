require('dotenv').config()

const express = require('express')
const cors = require('cors')
const apiRouter = require('./controller/api')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('build'))
app.use(apiRouter)

module.exports = app
