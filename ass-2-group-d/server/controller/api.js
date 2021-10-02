const express = require('express')

const apiRouter = express.Router()

apiRouter.post('/api/login', (request, response) => {})

apiRouter.post('/api/register', (request, response) => {})

apiRouter.get('/api/movies', (request, response) => {})

apiRouter.get('/api/movies/:movieid', (request, response) => {})

apiRouter.get('/api/info/:userid', (request, response) => {})

apiRouter.get('/api/info/:userid:/movieid', (request, response) => {})

apiRouter.post('/api/info/:userid:/movieid', (request, response) => {})

apiRouter.put('/api/info/:userid/:movieid', (request, response) => {})

apiRouter.delete('/api/info/:userid/:movieid', (request, response) => {})


module.exports = apiRouter