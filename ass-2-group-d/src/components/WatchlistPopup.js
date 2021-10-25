import React from 'react'
import PropTypes from 'prop-types'
// import material ui components
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button'

const WatchlistPopup = ({ open, onClose }) => {
	const [data, setData] = React.useState({
		rating: 0,
		review: '',
	})

	const handleSubmit = () => {
	}

	return (
		<Dialog open={open}>
			<DialogTitle sx={{ fontWeight: 'bold' }}>
				{'Mark This Movie As Watched'}
			</DialogTitle>

			<DialogContent>
				<DialogContentText> Give it a rating </DialogContentText>
				<Rating
					value={data.rating}
					onChange={(e, v) => setData({ ...data, rating: v })}
					precision={0.5}
				/>

				<DialogContentText> Give it a review </DialogContentText>
				<TextField multiline fullWidth minRows={5}/>
			</DialogContent>

			<DialogActions>
				<Button onClick={onClose}> Cancel </Button>
				<Button onClick={handleSubmit}> Submit </Button>
			</DialogActions>
		</Dialog>
	)
}

WatchlistPopup.propTypes = {
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
}

export default WatchlistPopup
