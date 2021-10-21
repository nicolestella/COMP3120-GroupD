import React from 'react'
import PropTypes from 'prop-types'
// import material ui components
import Grid from '@mui/material/Grid'
// import custom components
import theme from '../config/theme'
import Layout from '../components/Layout'
import MovieCard from '../components/MovieCard'
import Movies from '../services/movies'

const Home = ({ imgURL }) => {
	const [movies, setMovies] = React.useState([])

	React.useEffect(() => {
		Movies.movies().then(data => setMovies(data))
	}, [])

	return (
		<Layout homeDisabled>
			<Grid container spacing={4} sx={{ padding: theme.spacing(4) }}>
				{movies.map((movie) => (
					<Grid
						key={movie.id}
						item
						xs={6} sm={4} md={3} lg={2}
					>
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
