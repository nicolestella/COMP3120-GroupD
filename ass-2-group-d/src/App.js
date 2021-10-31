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

function App () {
	const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0()
	const imgURL = 'https://image.tmdb.org/t/p/w500'

	return (
		<Router>
			<Switch>
				<Route path="/profile">
					<Profile imgURL={imgURL} isAuthenticated={isAuthenticated} user={user} login={loginWithRedirect} logout={logout}/>
				</Route>

				<Route path="/movie/:id">
					<MovieDetails imgURL={imgURL} isAuthenticated={isAuthenticated} user={user} login={loginWithRedirect} logout={logout} />
				</Route>

				<Route path="/">
					<Home imgURL={imgURL} isAuthenticated={isAuthenticated} user={user} login={loginWithRedirect} logout={logout} />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
