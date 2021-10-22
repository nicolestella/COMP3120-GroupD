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

const Home = ({ imgURL }) => {
	const [movies, setMovies] = React.useState([])
	const [reviews, setReviews] = React.useState([])
	const [filter, setFilter] = React.useState(null)

	React.useEffect(() => {
		Movies.movies().then((data) => setMovies(data))
		Reviews.getMovieReviews(278).then((data) => setReviews(data))
	}, [])

	return (
		<Layout setFilter={(e) => setFilter(e)} homeDisabled>
			{console.log(movies)}
			{console.log(reviews)}
			<Grid container spacing={4} sx={{ padding: theme.spacing(4) }}>
				{movies.filter((movie) => {
					if (filter !== null && filter !== '') {
						return movie.title.toLowerCase().includes(filter.toLowerCase())
					} else {
						return true
					}
				}).map((movie) => (
					<Grid key={movie.id} item xs={6} sm={4} md={3} lg={2}>
						<MovieCard img={`${imgURL}/${movie.poster_path}`} title={movie.title} />
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
