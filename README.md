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

The backend API is built with Express and implements GET, POST, and PUT in server/server.js it uses CORS to manage cross-origin resource sharing.
The data sent and received by the server is read and written from MongoDB.
AXIOS is used by the front-end to send and receive API requests from services/API.js to the server.
There is no authenication setup on the server, however all incoming request must have the header "bob: Bobalooba" or it will return a 401 unauthorised request

GET /api/reviews/watchlist/:userid

GET /api/reviews/movie/:movieid

GET /api/reviews/:userid/:movieid

POST /api/reviews

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
