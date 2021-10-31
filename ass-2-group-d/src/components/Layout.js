/* eslint-disable react/prop-types */
import React from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
// import styling
import theme from '../config/theme'
// import material ui
import { Autocomplete } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import LogoutIcon from '@mui/icons-material/Logout'
import Movies from '../services/movies'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
// import icons
import SearchIcon from '@mui/icons-material/Search'
import { Switch } from '@material-ui/core'

// eslint-disable-next-line react/prop-types
const Layout = ({ children, homeDisabled, profileDisabled, isAuthenticated, user, login, logout, change, check, onChangeTheme }) => {
	const [movies, setMovies] = React.useState([])

	const imgURL = 'https://image.tmdb.org/t/p/w500'

	const history = useHistory()

	React.useEffect(() => {
		Movies.movies().then((data) => setMovies(data))
	}, [])

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
            D-List
					</Typography>

					{/* {Search bar functionality} */}
					<Autocomplete
						onChange={(_, movie) => {
							history.push(`/movie/${movie.id}`)
						}}
						getOptionLabel={(movie) => {
							// filter value
							return movie.title
						}}
						freeSolo
						options={movies}
						renderOption={(props, movie) => (
							<Box
								component="li"
								sx={{
									'& > img': {
										mr: 2,
										flexShrink: 0,
									},
								}}
								{...props}
							>
								<img
									loading="lazy"
									width="50"
									src={`${imgURL}/${movie.poster_path}`}
									srcSet={`${imgURL}/${movie.poster_path}`}
									alt=""
								/>
								{movie.title}
							</Box>
						)}

						renderInput={(params) => (
							<TextField
								{...params}
								variant="filled"
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
									width: 400,
								}}
							/>
						)}
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
								onClick={login}
							>
								Login
							</Button>
						)}

					<Switch
						// defaultChecked
						// color='default'
						onChange={onChangeTheme}
						checked={check}
					/>

				</Toolbar>
			</AppBar>

			<div style={{ padding: theme.spacing(5) }}>
				{children}
			</div>
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.node,
	homeDisabled: PropTypes.bool,
	profileDisabled: PropTypes.bool,
	setFilter: PropTypes.func,
}

export default Layout
