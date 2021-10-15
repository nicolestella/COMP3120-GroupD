import React, {
	useState,
	useEffect,
} from 'react'
import './App.css'
import Home from './pages/Home'
import Profile from './pages/Profile'
import MovieDetails from './pages/MovieDetails'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
} from 'react-router-dom'
import AuthButton from './components/AuthButton'

function App () {
	const imgURL = 'https://image.tmdb.org/t/p/w500'

	return (
		<Router>
			{/* {!isAuthenticated && (
				<AuthButton text="Login" eventHandler={() => loginWithRedirect()}/>
			)}
			{isAuthenticated && (
				<div>
					<h5> {user.name} is Logged in~! </h5>
					<AuthButton text="Logout" eventHandler={() => logout()}/>
				</div>
			)} */}
			<Switch>
				<Route path="/profile/:id">
					<Profile/>
				</Route>

				<Route path="/movie/:id">
					<MovieDetails/>
				</Route>

				<Route path="/">
					<Home imgURL={imgURL} />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
