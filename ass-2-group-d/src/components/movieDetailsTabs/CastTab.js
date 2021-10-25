import React from 'react'
import PropTypes from 'prop-types'
// import material ui components
import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import InputAdornment from '@mui/material/InputAdornment'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import TextField from '@mui/material/TextField'
// import custom components
import theme from '../../config/theme'
// import icons
import PersonIcon from '@mui/icons-material/Person'
import SearchIcon from '@mui/icons-material/Search'

const CastTab = ({ cast, imgURL }) => {
	const [query, setQuery] = React.useState('')
	const [data, setData] = React.useState([])
	const [searchData, setSearchData] = React.useState([])

	const handleQueryChange = (event) => {
		setQuery(event.target.value)

		// For each item in the array, run the contains function on that item.
		const filteredData = searchData.filter((item) => {
			return contains(item, event.target.value)
		})

		// Set the data displayed to the filtered data
		setData(filteredData)
	}

	// Check if at least some of the word matches the search query
	const contains = (obj, txt) => {
		if (obj.name.toLowerCase().includes(txt.toLowerCase()) ||
      obj.character.toLowerCase().includes(txt.toLowerCase())
		) {
			return true
		}
		return false
	}

	React.useEffect(() => {
		setData(cast)
		setSearchData(cast)
	}, [])

	return (
		<Grid container spacing={2} sx={{ padding: theme.spacing(2) }}>
			<Grid item xs={12}>
				<TextField
					label="Search Cast & Character"
					fullWidth
					variant="standard"
					sx={{ marginTop: theme.spacing(2), marginBottom: theme.spacing(2) }}
					value={query}
					onChange={e => handleQueryChange(e)}
					InputProps={{
						startAdornment: (
							<InputAdornment>
								<SearchIcon />
							</InputAdornment>
						),
					}}
				/>
			</Grid>
			{data.map((c) => (
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
