import React from 'react'
import PropTypes from 'prop-types'
// import material ui components
import { DataGrid } from '@mui/x-data-grid'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
// import custom components
import theme from '../../config/theme'
// import icons
import SearchIcon from '@mui/icons-material/Search'

const CrewTab = ({ crew }) => {
	const columns = [
		{ field: 'name', headerName: 'Name', flex: 1 },
		{ field: 'job', headerName: 'Job', flex: 1 },
		{ field: 'department', headerName: 'Department', flex: 1 },
	]
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
      obj.job.toLowerCase().includes(txt.toLowerCase()) ||
      obj.department.toLowerCase().includes(txt.toLowerCase())
		) {
			return true
		}
		return false
	}

	const generateRows = () => {
		const rows = []
		crew.forEach(c => {
			rows.push({
				id: c.id,
				name: c.name,
				job: c.job,
				department: c.department,
			})
		})

		setData(rows)
		setSearchData(rows)
	}

	React.useEffect(() => {
		generateRows()
	}, [])

	return (
		<div>
			<TextField
				label="Search Crew, Jobs, & Departments"
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
			<DataGrid
				rows={data}
				columns={columns}
				disableColumnMenu
				hideFooter
				autoHeight
			/>
		</div>
	)
}

CrewTab.propTypes = {
	crew: PropTypes.array.isRequired,
}

export default CrewTab
