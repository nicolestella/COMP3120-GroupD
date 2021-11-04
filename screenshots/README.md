# Key Pages

## Home

This is the first page the user will see when visiting the website. It shows a grid of the top rated movies fetched from the API (TheMovieDB).

On the home page and all the other pages, there is an app bar on the top of the screen. It has the following features:

- The website name is displayed on the left and will redirect the user to the homepage when clicked on.
- A search bar where users can search for movie titles from any page.
- A login button that can allow users to log in.
- If a user is already logged in, the login button is replaced with a profile avatar that will redirect the user to the profile page when clicked, and a log out button that will log the user out.
- A switch that will toggle dark mode.

## Movie Details

When a user clicks on a movie card such as the one from the home page, they will be redirected to the movie details page. This section will show the full poster preview, the synopsis, rating, genres, and some other details.

When the user scrolls down on this page, they will be able to see more details depending on which tab is selected. These are what the different tabs show:

- Info: Some additional details about the movie such as full title, languages, runtime, and more.
- Cast: A searchable list of cast members.
- Crew: A searchable and sortable list of crew members who contributed in the movie production.
- Reviews: User reviews fetched from our MongoDB database.

## Profile

If a user is logged in, they will be able to see a list of movies that they've marked as watched. Users who are logged in will be able to mark movies as watched from the movie details page.
