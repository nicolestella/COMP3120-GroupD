const mongoose = require('mongoose')

const url = process.env.MONGO_URL

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('connected to MongoDB')
	})
	.catch((error) => {
		console.log('error connecting to MongoDB:', error.message)
	})

const reviewSchema = new mongoose.Schema({
	userid: String,
	movies: [{ movieid: String, rating: Number, review: String }],
})

reviewSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
	},
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review
