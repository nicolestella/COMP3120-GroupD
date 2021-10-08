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

function App () {
	return (
		<Router>
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
