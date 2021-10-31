import React from 'react'
import PropTypes from 'prop-types'
// import material ui components
import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
// import custom components
import theme from '../../config/theme'

const ReviewsTab = ({ reviews }) => {
	return (
		<Grid container spacing={3}>
			{reviews && reviews.map((r, id) => (
				<Grid item key={id} xs={12} sm={6} md={4}>
					<Card>
						<Stack padding={3}>
							<Rating readOnly value={r.review.rating / 2} precision={0.5}/>
							<Typography variant="body2" color="primary"> {r.userid} </Typography>
							<Divider />
							<Typography sx={{ marginTop: theme.spacing(2) }}> {r.review.review} </Typography>
						</Stack>
					</Card>
				</Grid>
			))}
			{(!reviews || reviews.length < 1) && (
				<Grid item xs={12}
					sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: theme.spacing(5) }}
				>
					<Typography>No reviews to show...</Typography>
				</Grid>
			)}
		</Grid>
	)
}

ReviewsTab.propTypes = {
	reviews: PropTypes.array.isRequired,
}

export default ReviewsTab
