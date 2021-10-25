/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'
// import material ui components
import Grid from '@mui/material/Grid'
// import custom components
import theme from '../config/theme'
import Layout from '../components/Layout'
import MovieCard from '../components/MovieCard'
import Movies from '../services/movies'
import Reviews from '../services/reviews'

const Home = ({ imgURL, isAuthenticated, user, login, logout }) => {
	const [movies, setMovies] = React.useState([])
	const [simMovies, setSimMovies] = React.useState([])
	const [cast, setCast] = React.useState([])
	const [reviews, setReviews] = React.useState([])
	const [filter, setFilter] = React.useState(null)

	React.useEffect(() => {
		Movies.movies().then((data) => setMovies(data))
		Reviews.getMovieReviews(278).then((data) => setReviews(data))
		Movies.similarMovies(278).then((data) => setSimMovies(data))
		Movies.movieCast(278).then((data) => setCast(data))
	}, [])

	return (
		<Layout setFilter={(e) => setFilter(e)}
			homeDisabled
			isAuthenticated={isAuthenticated}
			user={user}
			login={login}
			logout={logout}
			movies={movies}
		>
			<Grid container spacing={4}>
				{movies.filter((movie) => {
					if (filter !== null && filter !== '') {
						return movie.title.toLowerCase().includes(filter.toLowerCase())
					} else {
						return true
					}
				}).map((movie) => (
					<Grid key={movie.id} item xs={6} sm={4} md={3} lg={2}>
						<MovieCard
							img={`${imgURL}/${movie.poster_path}`}
							title={movie.title}
							movieID={movie.id}
						/>
					</Grid>
				))}
			</Grid>
		</Layout>
	)
}

Home.propTypes = {
	imgURL: PropTypes.string.isRequired,
}

export default Home
