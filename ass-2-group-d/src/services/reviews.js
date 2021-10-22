import axios from 'axios'
const baseURL = 'http://localhost:3001/api/reviews'

const getMovieReviews = (movieid) => {
	return axios
		.get(
			baseURL + `/movie/${movieid}`,
		)
		.then(responce => responce.data)
}

const getReview = (userid, movieid) => {
	return axios
		.get(
			baseURL + `/${userid}/${movieid}`,
		)
		.then(responce => responce.data)
}

const getWatchlist = (userid) => {
	return axios
		.get(
			baseURL + `/watchlist/${userid}`,
		)
		.then(responce => responce.data)
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
/*
const deleteReview = () => {
	return axios
		.delete(

		)
		.then()
}
*/

export default { getMovieReviews, getReview, getWatchlist, postReview }