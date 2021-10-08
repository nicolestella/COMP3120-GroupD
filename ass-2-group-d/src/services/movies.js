import axios from 'axios'
const baseURL = 'https://api.themoviedb.org/3/movie'

const movies = () => {
	return axios
		.get(
			baseURL + '/top_rated?api_key=d376228a124d9077ef3238a86c282792&language=en-US&page=1%27',
		)
		.then(responce => responce.data.results)
}

const movie = (movieid) => {
	return axios
		.get(
			baseURL + '/' + movieid + '?api_key=d376228a124d9077ef3238a86c282792&language=en-US',
		)
		.then(responce => responce.data.results)
}

export default { movies, movie }
