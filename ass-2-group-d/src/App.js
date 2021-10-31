import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './App.css'
import Home from './pages/Home'
import Profile from './pages/Profile'
import MovieDetails from './pages/MovieDetails'
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom'
import movies from './services/movies'
import {
	createTheme,
	ThemeProvider,
} from '@material-ui/core/styles'

function App () {
	const [darkmode, setDarkMode] = React.useState(false)

	const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0()
	const imgURL = 'https://image.tmdb.org/t/p/w500'

	function getMovies () {
		movies.movies().then(
			data => {
				return data
			})
	}

	function getMovie (movieId) {
		movies.movie(movieId).then(
			data => {
				return data
			})
	}

	const darkTheme = createTheme({
		palette: {
			type: darkmode ? 'dark' : 'light',
		},
	})

	return (

		<Router>
			<Switch>

				<Route path="/profile">
					<ThemeProvider theme={darkTheme}>
						<Profile imgURL={imgURL} isAuthenticated={isAuthenticated} user={user} login={loginWithRedirect} logout={logout} onChangeTheme={() => setDarkMode(!darkmode)}/>
					</ThemeProvider>
				</Route>

				<Route path="/movie/:id">
					<ThemeProvider theme={darkTheme}>
						<MovieDetails imgURL={imgURL} isAuthenticated={isAuthenticated} user={user} login={loginWithRedirect} logout={logout} onChangeTheme={() => setDarkMode(!darkmode)}/>
					</ThemeProvider>
				</Route>

				<Route path="/">
					<ThemeProvider theme={darkTheme}>
						<Home imgURL={imgURL} isAuthenticated={isAuthenticated} user={user} login={loginWithRedirect} logout={logout} onChangeTheme={() => setDarkMode(!darkmode)}/>
					</ThemeProvider>
				</Route>

			</Switch>
		</Router>

	)
}

export default App
