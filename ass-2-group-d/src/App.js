import React, {
	useState,
	useEffect,
} from 'react'
import './App.css'
import Home from './pages/HomePage'
import Profile from './pages/ProfilePage'
import MovieDetails from './pages/MovieDetailsPage'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
} from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import AuthButton from './components/AuthButton'

function App () {
	const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0()

	return (
		<Router>
			{!isAuthenticated && (
				<AuthButton text="Login" eventHandler={() => loginWithRedirect()}/>
			)}
			{isAuthenticated && (
				<div>
					<h5> {user.name} is Logged in~! </h5>
					<AuthButton text="Logout" eventHandler={() => logout()}/>
				</div>
			)}
			<Switch>
				<Route path="/profile/:id">
					<Profile/>
				</Route>

				<Route path="/movie/:id">
					<MovieDetails/>
				</Route>

				<Route path="/">
					<Home/>
				</Route>
			</Switch>
		</Router>
	)
}

export default App
