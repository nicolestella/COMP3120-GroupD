import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
// import material ui components
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Image from 'material-ui-image'
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'
// import icons
import AddCircleIcon from '@mui/icons-material/AddCircle'
import ChatIcon from '@mui/icons-material/Chat'
import GroupIcon from '@mui/icons-material/Group'
import InfoIcon from '@mui/icons-material/Info'
import MovieIcon from '@mui/icons-material/Movie'
import { Paper } from '@material-ui/core'
// import data
import Movie from '../services/movies'
import Reviews from '../services/reviews'
// import custom components
import theme from '../config/theme'
import Layout from '../components/Layout'
import WatchlistPopup from '../components/WatchlistPopup'
import InfoTab from '../components/movieDetailsTabs/InfoTab'
import CastTab from '../components/movieDetailsTabs/CastTab'
import CrewTab from '../components/movieDetailsTabs/CrewTab'
import ReviewsTab from '../components/movieDetailsTabs/ReviewsTab'

const tabs = [
	{
		title: 'Info',
		icon: <InfoIcon />,
	},
	{
		title: 'Cast',
		icon: <GroupIcon />,
	},
	{
		title: 'Crew',
		icon: <MovieIcon />,
	},
	{
		title: 'Reviews',
		icon: <ChatIcon />,
	},
]

const MovieDetails = ({ imgURL, isAuthenticated, user, login, logout, onChangeTheme, check }) => {
	const movieID = useParams().id
	const [movie, setMovie] = React.useState()
	const [cast, setCast] = React.useState([])
	const [reviews, setReviews] = React.useState()
	const [watched, setWatched] = React.useState(false)
	const [selectedTab, setSelectedTab] = React.useState(0)
	const [popupOpened, setPopupOpened] = React.useState(false)

	const generateTab = (id) => {
		if (id === 0) {
			return <InfoTab movie={movie}/>
		} else if (id === 1) {
			return <CastTab imgURL={imgURL} cast={cast.cast}/>
		} else if (id === 2) {
			return <CrewTab crew={cast.crew} />
		} else if (id === 3) {
			return <ReviewsTab reviews={reviews} />
		}
	}

	React.useEffect(() => {
		Movie.movie(movieID).then(data => setMovie(data))
		Movie.movieCast(movieID).then((data) => setCast(data))
		Reviews.getMovieReviews(movieID).then(data => setReviews(data))
		if (user) {
			Reviews.getReview(user.nickname, movieID).then(data => setWatched(data))
		}
	}, [movieID, user, watched])

	return (
		<Paper>
			<Layout
				isAuthenticated={isAuthenticated}
				user={user}
				login={login}
				logout={logout}
				onChangeTheme={onChangeTheme}
				check={check}
			>
				{movie && (
					<Grid container spacing={4}
					>
						<WatchlistPopup user={user} movie={movieID} open={popupOpened} onClose={() => setPopupOpened(false)} />
						{/* The poster */}
						<Grid item xs={12} sm={6} md={5} lg={3}>
							<Card
								sx={{
									aspectRatio: '0.66667',
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'flex-end',
								}}
							>
								<Image
									src={`${imgURL}/${movie.poster_path}`}
									imageStyle={{ position: 'initial' }}
								/>
							</Card>
						</Grid>

						{/* The details */}
						<Grid item xs={12} sm={6} md={7} lg={9}
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<Stack direction="column">

								{/* The movie title */}
								<Stack direction="row" spacing={1}>
									<Typography variant="h4" sx={{ fontWeight: 'bold' }}>
										{movie.title}
									</Typography>

									{/* Add to watchlist button */}
									<Button disabled={!isAuthenticated || watched} color="primary" onClick={() => setPopupOpened(true)}>
										<AddCircleIcon />
									Mark as watched
									</Button>
								</Stack>

								{/* The ratings */}
								<Stack direction="row" alignItems="center" spacing={2}>
									<Rating value={movie.vote_average / 2} precision={0.5} readOnly />
									<Typography variant="body2" color="primary">
										{movie.vote_count} Reviews
									</Typography>
								</Stack>

								{/* The description */}
								<Typography> {movie.overview} </Typography>

								{/* The genres */}
								<Stack direction="row" spacing={1} marginTop={theme.spacing(2)}>
									{movie.genres.map((genre) => (
										<Chip key={genre.id} label={genre.name} variant="outlined"/>
									))}
								</Stack>
							</Stack>
						</Grid>

						{/* The tabs */}
						<Grid item xs={12}>
							<Tabs
								variant="fullWidth"
								value={selectedTab}
								onChange={(e, val) => setSelectedTab(val)}
							>
								{tabs.map((item, id) => (
									<Tab key={id} icon={item.icon} label={item.title} />
								))}
							</Tabs>
							{generateTab(selectedTab)}
						</Grid>
					</Grid>
				)}
			</Layout>
		</Paper>
	)
}

MovieDetails.propTypes = {
	imgURL: PropTypes.string.isRequired,
	isAuthenticated: PropTypes.bool,
	user: PropTypes.object,
	login: PropTypes.func,
	logout: PropTypes.func,
	onChangeTheme: PropTypes.func,
	check: PropTypes.bool,
}

export default MovieDetails
