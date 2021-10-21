import React from 'react'
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

function App () {
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

	return (
		<Router>
			<Switch>
				<Route path="/profile">
					<Profile imgURL={imgURL} />
				</Route>

				<Route path="/movie/:id">
					<MovieDetails imgURL={imgURL}/>
				</Route>

				<Route path="/">
					<Home imgURL={imgURL} />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
