Group D

Nicole Stella 44008724
Juyoung Lee 45259666
Daniel Mendham 45957657
Peter Wu 44890826

# DEPENDENCIES:

You will need to install Node.js and npm.
This website has the following packages installed:
-material-ui
-material-ui-image
-Auth0
-Mongoose
-react-router-dom
-express
-axios
-cors
-bcrypt
-jwksRsa
-jwt

# APPLICATION OUTLINE

# MVP IMPLEMENTATION

# API

The backend API is built with Express and implements GET, and POST in server/controller/api.js it uses CORS to manage cross-origin resource sharing.
The data sent and received by the server is read and written from MongoDB.
AXIOS is used by the front-end to send and receive API requests from the services folder to the server.
There is authenication setup on the server, it is implemented through Auth0. However, it is only implemented in the POST endpoint where the user token
provided by Auth0 is required.

The server contains the following endpoints:

GET /api/reviews/watchlist/:userid
This looks up the userid in MongoDB and returns the object if it exists

GET /api/reviews/movie/:movieid
This looks up the movieid in MongoDB and returns any object that contains the movieid

GET /api/reviews/:userid/:movieid
This looks up the movieid and userid in MongoDB and returns true if there is an object that has both userid and movieid otherwise returns false

POST /api/reviews
If the user has a token, checks that there is a userid and a movieid then checks for the correct amount of fields. Once these are validated, it checks if
there already exist a watchlist for that user. If there isn't it creates a new entry in MongoDB otherwise it appends the { movieid, rating, review } onto
the existing object. If a review already exist for that movie in the object then it returns an error.

# Mongoose/MongoDB

The backend uses Mongoose to access MongoDB
MongoDB stores data on the users watchlist and their ratings and reviews
It is stored in the following structure:

    {
        userid: String,
        movies: [{
            movieid: String,
            rating: Number,
            review: String
        }]
    }

userid is the user.nickname provided by Auth0
movies are an array of all the movies the user has set as watched so far
movieid is the id of the movie provided by MovieDB
ratings is an Number between 0 and 10 (inclusive) representing the user's rating for the movieid of that item
review is a String that contains the user's review for the movieid of that item

# APP

App.js is the core of the website, it uses BrowserRouter from react-router-dom to "navigate" between "pages" stored in the pages folder and display them.
BrowserRouter will navigate by changing the URL then generate a view according to that URL. The user State is stored here and when a distributed to other pages
through props.

# COMPONENTS

MovieDetailsTabs

Layout

MovieCard

WatchlistPopup

# SERVICES

Login

Movies

Reviews

# PAGES

All Pages have the navigation bar containing a link to the HomePage, a Search Bar and

HomePage

MovieDetailsPage

ProfilePage

# FUTURE IMPLEMENTATIONS

# PROJECT MANAGEMENT
