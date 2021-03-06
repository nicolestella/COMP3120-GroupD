import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import styling
import theme from '../config/theme'
// import material ui components
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import Image from 'material-ui-image'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
// import icons
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'

const MovieCard = ({ img, title, hideAddButton, movieID }) => {
	return (
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
					component={Link}
					to={`movie/${movieID}`}
				>
					<Image
						src={img}
						style={{ position: 'initial' }}
					/>
				</CardActionArea>
			</Card>

			{/* Add to watchlist button */}
			{!hideAddButton && (
				<Button>
					<AddCircleOutlineIcon />
					<Typography
						variant="body3"
						sx={{ marginLeft: theme.spacing(2) }}
					>
								Add to watchlist
					</Typography>
				</Button>
			)}

			{/* Movie title */}
			<Typography
				sx={{ fontWeight: 'bold' }}
				variant="h6"
				align="center"
			>
				{title}
			</Typography>
		</Stack>
	)
}

MovieCard.propTypes = {
	img: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	hideAddButton: PropTypes.bool,
	movieID: PropTypes.number.isRequired,
}

export default MovieCard
