import React from 'react'
import PropTypes from 'prop-types'
// import styling
import theme from '../config/theme'
// import material ui
import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
// import icons
import SearchIcon from '@mui/icons-material/Search'

const Layout = ({ children }) => {
	return (
		<div style={{
			backgroundColor: theme.palette.background,
			minHeight: '100vh',
		}}>
			<AppBar
				sx={{
					backgroundColor: 'transparent',
					width: '100vw',
					color: '#000',
					paddingTop: theme.spacing(2),
				}}
				position="static"
				elevation={0}
			>
				<Toolbar>

					{/* Website title */}
					<Typography
						variant="h4"
						component="div"
						sx={{ flexGrow: 1 }}
					>
            name
					</Typography>

					{/* Search bar */}
					<TextField
						label={
							<Stack direction="row" spacing={1}>
								<SearchIcon />
								<Typography>Search movies</Typography>
							</Stack>
						}

						sx={{
							marginRight: theme.spacing(2),
							flexGrow: 0.2,
							backgroundColor: '#fff',
						}}
					/>

					{/* User avatar */}
					<Avatar>AB</Avatar>
				</Toolbar>
			</AppBar>

			{children}
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.node,
}

export default Layout
