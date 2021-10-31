const express = require('express')
const Review = require('../models/reviews')
const jwksRsa = require('jwks-rsa')
const jwt = require('express-jwt')
const authConfig = require('../../src/auth_config.json')
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

apiRouter.get('/api/reviews/watchlist/:userid', (request, response) => {
	const userid = request.params.userid
	Review.find({ userid: userid })
		.then(result => {
			response.json(result)
		}).catch(() => {
			response.status(404).end()
		})
})

apiRouter.get('/api/reviews/movie/:movieid', (request, response) => {
	const movieid = request.params.movieid
	Review.find({ 'movies.movieid': movieid }).then(result => {
		const review = result.map(r => ({ userid: r.userid, review: r.movies.filter(m => m.movieid === movieid)[0] }))
		response.json(review)
	})
})

apiRouter.get('/api/reviews/:userid/:movieid', (request, response) => {
	const userid = request.params.userid
	const movieid = request.params.movieid

	Review.find({ userid: userid, 'movies.movieid': movieid })
		.then(result => {
			const review = result.map(r => ({ userid: r.userid, review: r.movies.filter(m => m.movieid === movieid)[0] }))
			if (review.length === 0) {
				response.json(false)
			} else {
				response.json(true)
			}
		}).catch(() => {
			response.status(404).end()
		})
})

apiRouter.post('/api/reviews', checkJwt, async (request, response) => {
	const body = request.body

	if (!body.userid || !body.movies.movieid) {
		return response.status(400).json({ error: 'missing fields' })
	}

	if (Object.keys(body).length < 2 || Object.keys(body).length > 4) {
		return response.status(400).json({ error: 'incorrect number of fields' })
	}

	let check = 0

	await Review.countDocuments({ userid: body.userid })
		.then(result => {
			check = result
		}).catch(() => {
			response.status(404).end()
		})

	if (check > 0) {
		const review = { movieid: body.movies.movieid, rating: body.movies.rating, review: body.movies.review }
		await Review.findOne({ userid: body.userid, 'movies.movieid': review.movieid })
			.then((result) => {
				if (result) {
					return response.status(400).json({ error: 'review already exist' })
				} else {
					Review.updateOne({ userid: body.userid }, { $push: { movies: review } })
						.then(result => {
							response.json(result)
						}).catch(() => {
							response.status(404).end()
						})
				}
			})
	} else {
		const review = new Review({
			userid: body.userid,
			movies: { movieid: body.movies.movieid, rating: body.movies.rating, review: body.movies.review },
		})
		review.save().then(result => {
			response.json(result)
		})
	}
})

module.exports = apiRouter
