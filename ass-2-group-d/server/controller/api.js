const express = require('express')

const apiRouter = express.Router()

apiRouter.post('/api/login', (request, response) => {})

apiRouter.post('/api/register', (request, response) => {})

apiRouter.get('/api/movies', (request, response) => {})

apiRouter.get('/api/movies/:movieid', (request, response) => {})

apiRouter.get('/api/info/:movieid/:userid', (request, response) => {})

apiRouter.post('/api/info/:movieid/:userid', (request, response) => {})

apiRouter.put('/api/info/:movieid/:userid', (request, response) => {})

apiRouter.delete('/api/info/:movieid/:userid', (request, response) => {})


module.exports = apiRouter