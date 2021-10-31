/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'
// import material ui components
import Grid from '@mui/material/Grid'
// import custom components
import Layout from '../components/Layout'
import MovieCard from '../components/MovieCard'
import Movies from '../services/movies'
import { Paper } from '@material-ui/core'

const Home = ({ imgURL, isAuthenticated, user, login, logout, onChangeTheme, check }) => {
	const [movies, setMovies] = React.useState([])
	const [filter, setFilter] = React.useState(null)

	React.useEffect(() => {
		Movies.movies().then((data) => setMovies(data))
	}, [])

	return (
		<Paper>
			<Layout setFilter={(e) => setFilter(e)}
				homeDisabled
				isAuthenticated={isAuthenticated}
				user={user}
				login={login}
				logout={logout}
				movies={movies}
				onChangeTheme={onChangeTheme}
				check={check}
			>
				<Grid container spacing={4}
				>
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
		</Paper>
	)
}

Home.propTypes = {
	imgURL: PropTypes.string.isRequired,
}

export default Home
