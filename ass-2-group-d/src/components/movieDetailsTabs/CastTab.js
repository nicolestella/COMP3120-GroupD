import React from 'react'
import PropTypes from 'prop-types'
// import material ui components
import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
// import custom components
import theme from '../../config/theme'
// import icons
import PersonIcon from '@mui/icons-material/Person'

const CastTab = ({ cast, imgURL }) => {
	return (
		<Grid container spacing={2} sx={{ padding: theme.spacing(2) }}>
			{cast.map((c) => (
				<Grid key={c.order} item xs={12} sm={4} md={3}>
					<ListItem >
						<ListItemAvatar>
							{c.profile_path
								? (<Avatar alt={c.name} src={`${imgURL}${c.profile_path}`} />)
								: (<Avatar> <PersonIcon /> </Avatar>)
							}
						</ListItemAvatar>
						<ListItemText primary={c.name} secondary={`as ${c.character}`} />
					</ListItem>
				</Grid>
			))}
		</Grid>
	)
}

CastTab.propTypes = {
	cast: PropTypes.array.isRequired,
	imgURL: PropTypes.string.isRequired,
}

export default CastTab
