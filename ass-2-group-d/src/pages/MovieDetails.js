import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
// import material ui components
import Image from 'material-ui-image'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Rating from '@mui/material/Rating'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
// import icons
import AddCircleIcon from '@mui/icons-material/AddCircle'
import InfoIcon from '@mui/icons-material/Info'
import GroupIcon from '@mui/icons-material/Group'
import MovieIcon from '@mui/icons-material/Movie'
import ChatIcon from '@mui/icons-material/Chat'
// import custom components
import theme from '../config/theme'
import Movie from '../services/movies'
import Layout from '../components/Layout'
import InfoTab from '../components/movieDetailsTabs/InfoTab'

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

const MovieDetails = ({ imgURL }) => {
	const movieID = useParams().id
	const [movie, setMovie] = React.useState()
	const [selectedTab, setSelectedTab] = React.useState(0)

	React.useEffect(() => {
		Movie.movie(movieID).then(data => setMovie(data))
	}, [])

	return (
		<Layout>
			{movie && (
				<Grid container spacing={4}
				>
					{console.log(movie)}
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

								<IconButton color="primary">
									<AddCircleIcon />
								</IconButton>
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
						{selectedTab === 0 && (
							<InfoTab movie={movie}/>
						)}
					</Grid>
				</Grid>
			)}
		</Layout>
	)
}

MovieDetails.propTypes = {
	imgURL: PropTypes.string.isRequired,
}

export default MovieDetails
