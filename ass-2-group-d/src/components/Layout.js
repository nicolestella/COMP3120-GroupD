import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
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
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
// import icons
import SearchIcon from '@mui/icons-material/Search'
import LogoutIcon from '@mui/icons-material/Logout'

const Layout = ({ children, homeDisabled, profileDisabled }) => {
	const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0()

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
						component={Link}
						to={!homeDisabled && '/'}
						sx={{ flexGrow: 1, textDecoration: 'none', color: '#000' }}
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
					{isAuthenticated
						? (
							<Stack direction="row" spacing={1}>
								<Avatar
									component={Link}
									to={!profileDisabled && '/profile'}
									sx={{ padding: 0, minWidth: '0px', textDecoration: 'none' }}
								>
									{user.given_name.charAt(0)}{user.family_name.charAt(0)}
								</Avatar>

								<IconButton onClick={() => logout()} color="primary">
									<LogoutIcon />
								</IconButton>

							</Stack>
						)
						: (
							<Button
								variant="contained"
								onClick={() => loginWithRedirect()}
							>
								Login
							</Button>
						)}

				</Toolbar>
			</AppBar>

			{children}
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.node,
	homeDisabled: PropTypes.bool,
	profileDisabled: PropTypes.bool,
}

export default Layout
