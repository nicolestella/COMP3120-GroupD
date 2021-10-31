import React from 'react'
import PropTypes from 'prop-types'
// import material ui components
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
// import custom components
import theme from '../../config/theme'

const InfoTab = ({ movie }) => {
	const fields = [
		{
			title: 'Title',
			type: 'string',
			value: movie.title,
		},
		{
			title: 'Languages',
			type: 'array',
			value: movie.spoken_languages,
		},
		{
			title: 'Runtime',
			type: 'int',
			value: `${movie.runtime} min`,
		},
		{
			title: 'Production Studios',
			type: 'array',
			value: movie.production_companies,
		},
		{
			title: 'Release Date',
			type: 'string',
			value: movie.release_date,
		},
		{
			title: 'Revenue',
			type: 'int',
			value: `US$ ${Number(movie.revenue).toLocaleString()}`,
		},
		{
			title: 'Original Title',
			type: 'string',
			value: movie.original_title,
		},
		{
			title: 'Original Language',
			type: 'string',
			value: movie.original_language,
		},
		{
			title: 'Production Countries',
			type: 'array',
			value: movie.production_countries,
		},
	]
	return (
		<List>
			{fields.map((item, id) => (
				<div key={id}>
					<ListItem >
						<ListItemText
							primary={
								<React.Fragment>
									<Stack direction="row">
										{/* The field title */}
										<Typography
											sx={{
												flex: 1,
												fontWeight: 'bold',
											}}
										>
											{item.title}:
										</Typography>

										{/* The field value */}
										<Stack
											sx={{
												flex: 4,
												[theme.breakpoints.down('md')]: {
													flex: 1,
												},
											}}
										>

											{/* If the field value isn't an array, display it in text */}
											{item.type !== 'array'
												? (
													<Typography>
														{item.value}
													</Typography>
												)
												: (

											// If the field value is an array, display it as chips.
											// If the array length is 0, display 'N/A'
													item.value.length > 0
														? (

															<Stack direction="row" spacing={1}>
																{item.value.map((i, id) => (
																	<Chip key={id} label={i.name} variant="outlined" />
																))}
															</Stack>
														)
														: (
															<Typography>N/A</Typography>
														)
												)}
										</Stack>
									</Stack>
								</React.Fragment>
							}
						/>
					</ListItem>
					<Divider />
				</div>
			))}
		</List>
	)
}

InfoTab.propTypes = {
	movie: PropTypes.object.isRequired,
}

export default InfoTab
