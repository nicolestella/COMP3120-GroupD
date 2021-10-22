import React from 'react'
import PropTypes from 'prop-types'
// import material ui components
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
// import custom components
import theme from '../config/theme'
import Layout from '../components/Layout'
import MovieCard from '../components/MovieCard'
import Movie from '../services/movies'
import Review from '../services/reviews'

const watchedList = [526702, 496243, 592350, 424, 724089]

const Profile = ({ imgURL }) => {
	const [movies, setMovies] = React.useState([])

	React.useEffect(() => {
		Review.getWatchlist('nicole.stella')
			.then(data =>
				data[0].movies.map(m => Movie.movie(m.movieid)
					.then(data =>
						setMovies(movies => [...movies, data]))))
	}, [])

	return (
		<Layout profileDisabled>

			{/* Recently Watched title */}
			<Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: theme.spacing(3) }}>
					Recently Watched
			</Typography>

			<Grid container spacing={4}>
				<Grid item
					xs={6} sm={4} md={3} lg={2}
				>
					{/* Add new button */}
					<Button
						sx={{
							width: '100%',
							aspectRatio: '0.66667',
							backgroundColor: 'transparent',
						}}
						variant="outlined"
					>
						<Typography variant="h1"> + </Typography>
					</Button>
				</Grid>
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
	)
}

Profile.propTypes = {
	imgURL: PropTypes.string.isRequired,
}

export default Profile
