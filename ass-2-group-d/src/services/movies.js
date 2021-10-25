import axios from 'axios'
const baseURL = 'https://api.themoviedb.org/3/movie'
const APIKey = 'api_key=d376228a124d9077ef3238a86c282792'

const movies = () => {
	return axios
		.get(
			baseURL + `/top_rated?${APIKey}&language=en-US&page=1%27`,
		)
		.then(response => response.data.results)
}

const movie = (movieid) => {
	return axios
		.get(
			`${baseURL}/${movieid}?${APIKey}&language=en-US`,
		)
		.then(response => response.data)
}

const similarMovies = (movieid) => {
	return axios
		.get(
			`${baseURL}/${movieid}/similar?${APIKey}&language=en-US&page=1`,
		)
		.then(response => response.data.results)
}

const movieCast = (movieid) => {
	return axios
		.get(
			`${baseURL}/${movieid}/credits?${APIKey}&language=en-US`,
		)
		.then(response => response.data.cast)
}

export default { movies, movie, similarMovies, movieCast }
