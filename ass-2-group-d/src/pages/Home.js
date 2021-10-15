import React from 'react'
import PropTypes from 'prop-types'
// import styling
import theme from '../config/theme'
// import material ui components
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import Image from 'material-ui-image'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
// import icons
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
// import custom components
import Layout from '../components/Layout'
import Movies from '../services/movies'

const Home = ({ imgURL }) => {
	const [movies, setMovies] = React.useState([])

	React.useEffect(() => {
		Movies.movies().then(data => setMovies(data))
	}, [])

	return (
		<Layout>
			{console.log(movies)}
			<Grid container spacing={4} sx={{ padding: theme.spacing(4) }}>
				{movies.map((movie) => (
					<Grid
						key={movie.id}
						item
						xs={6} sm={4} md={3} lg={2}
					>
						<Stack
							sx={{ width: '100%', height: '100%' }}
							alignItems="center"
						>
							{/* Movie poster */}
							<Card
								sx={{
									width: '100%',
									aspectRatio: '0.66667',
								}}
							>
								<CardActionArea
									sx={{ width: '100%', height: '100%' }}
								>
									<Image
										src={`${imgURL}/${movie.poster_path}`}
										style={{ position: 'initial' }}
										// cover
									/>
								</CardActionArea>
							</Card>

							{/* Add to watchlist button */}
							<Button>
								<AddCircleOutlineIcon />
								<Typography
									variant="body3"
									sx={{ marginLeft: theme.spacing(2) }}
								>
								Add to watchlist
								</Typography>
							</Button>

							{/* Movie title */}
							<Typography
								sx={{ fontWeight: 'bold' }}
								variant="h6"
								align="center"
							>
								{movie.title}
							</Typography>
						</Stack>
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
