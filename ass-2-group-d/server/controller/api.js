const express = require('express')
const Review = require('../models/reviews')
const jwksRsa = require('jwks-rsa')
const jwt = require('express-jwt')
const authConfig = require('../src/auth_config.json')
const apiRouter = express.Router()

const checkJwt = jwt({
	secret: jwksRsa.expressJwtSecret({
		cache: true,
		rateLimit: true,
		jwksRequestsPerMinute: 5,
		jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`,
	}),
	audience: authConfig.audience,
	issuer: `https://${authConfig.domain}/`,
	algorithms: ['RS256'],
})

apiRouter.post('/api/login', (request, response) => {})

apiRouter.post('/api/register', (request, response) => {})

apiRouter.get('/api/reviews/:movieid', (request, response) => {
	const movieid = request.params.movieid
	Review.find({ movieid: movieid }).then(result => {
		response.json(result)
	})
})

apiRouter.get('/api/reviews/:userid:/movieid', (request, response) => {
	const userid = request.params.userid
	const movieid = request.params.movieid

	Review.findOne({ userid: userid, movieid: movieid })
		.then(result => {
			response.json(result)
		}).catch(() => response.status(404).end())
})

apiRouter.post('/api/reviews', checkJwt, async (request, response) => {
	const body = request.body

	if (!body.userid || !body.movieid || !body.rating || body.review) {
		return response.status(400).json({ error: 'missing fields' })
	}

	if (Object.keys(body).length !== 4) {
		return response.status(400).json({ error: 'incorrect number of fields' })
	}

	const review = new Review({
		userid: body.userid,
		movieid: body.movieid,
		rating: body.rating,
		review: body.review,
	})

	review.save().then(result => {
		response.json(result)
	})
})

apiRouter.put('/api/reviews/:userid/:movieid', (request, response) => {})

apiRouter.delete('/api/reviews/:userid/:movieid', (request, response) => {})

module.exports = apiRouter
