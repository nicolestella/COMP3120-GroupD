import axios from 'axios'
const baseURL = '/api/reviews'

const getMovieReviews = (movieid) => {
	return axios
		.get(
			baseURL + `/movie/${movieid}`,
		)
		.then(response => response.data)
}

const getReview = (userid, movieid) => {
	return axios
		.get(
			baseURL + `/${userid}/${movieid}`,
		)
		.then(response => response.data)
}

const getWatchlist = (userid) => {
	return axios
		.get(
			baseURL + `/watchlist/${userid}`,
		)
		.then(response => response.data)
}

const postReview = (token, userid, movieid, rating, review) => {
	return axios
		.post(
			baseURL, {
				userid: userid,
				movies: {
					movieid: movieid,
					rating: rating,
					review: review,
				},
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		)
}

export default { getMovieReviews, getReview, getWatchlist, postReview }
