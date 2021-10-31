/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'
// import material ui components
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { Paper } from '@material-ui/core'
// import custom components
import theme from '../config/theme'
import Layout from '../components/Layout'
import MovieCard from '../components/MovieCard'
import Movie from '../services/movies'
import Review from '../services/reviews'

const Profile = ({ imgURL, isAuthenticated, user, login, logout, onChangeTheme, check }) => {
	const [movies, setMovies] = React.useState([])

	React.useEffect(() => {
		if (user) {
			Review.getWatchlist(user.nickname)
				.then(data =>
					data[0].movies.map(m => Movie.movie(m.movieid)
						.then(data =>
							setMovies(movies => [...movies, data]))))
		}
	}, [user])

	return (
		<Paper>
			<Layout profileDisabled isAuthenticated={isAuthenticated} user={user} login={login} logout={logout} onChangeTheme={onChangeTheme} check={check} >

				{/* Recently Watched title */}
				<Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: theme.spacing(3) }}>
					Recently Watched
				</Typography>

				<Grid container spacing={4}>
					{movies.map((movie) => (
						<Grid key={movie.id}
							item
							xs={6} sm={4} md={3} lg={2}
						>
							<MovieCard hideAddButton img={`${imgURL}/${movie.poster_path}`} title={movie.title} movieID={movie.id}/>
						</Grid>
					))}

				</Grid>

			</Layout>
		</Paper>
	)
}

Profile.propTypes = {
	imgURL: PropTypes.string.isRequired,
}

export default Profile
