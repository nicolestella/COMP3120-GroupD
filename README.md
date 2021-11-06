# Group D (D-List)

* Nicole Stella 44008724
* Juyoung Lee 45259666
* Daniel Mendham 45957657
* Peter Wu 44890826

## DEPENDENCIES:

You will need to install Node.js and npm.
This website has the following packages installed:
* material-ui
* material-ui-image
* Auth0
* Mongoose
* react-router-dom
* express
* axios
* cors
* bcrypt
* jwksRsa
* jwt

## APPLICATION OUTLINE

The application is essentailly a service that allows users to follow and keep up to date with the latest and popular movies. Users are allowed to login with their details via third party authentication services. Once logged in, the user can add movies to their watchlist and keep track of all the movies that has been watched, and when the user marks a movie as watched, they have to give the movie a rating and review. Each movie has their respective details page with displays all the necessary information about the movie such as duration time, release date, languages etc. The application consists of three different pages: HomePage, ProfilePage and MovieDetailsPage.

#### HomePage

The HomePage displays all the movies in the database in a tile format. On each of these tiles, the movie poster is displayed on the card which is clickable, navigating the user to the details page for that movie. On the top of the screen is the AppBar which consists of the application title, search bar, login button and dark mode functionalities. On the card, there is also the button to add the movie to the watchlist if you are logged in. The search bar matches each character input to the movie title and displays the results in a dropdown list. Each list display the smaller version of the movie poster so it is easier for the user to refer to the movie. Each list iten is also clickable, navigating the user to the details page of that movie.

#### ProfilePage

The ProfilePage is where the logged in user keeps track of their movies list. It is quite similar to the Homepage in terms of the format display of movie cards. The list here is created by the user when adding movies to their watchlist. Once the movie is added to the watchlist, all other functionality works the same as the Homepage

#### MovieDetailsPage

On the MovieDetailsPage, all information that is related to the movie is displayed here such as the synopsis and genre. If the user wants to know more details about a particular movie, this page will have the necessary information, such as the production staff and actors/actresses featured in the movie, with a search functionality that filters by their name. A logged in user can leave reviews for the movie from this page, allowing ratings with comments to be displayed in the reviews section.

## MVP IMPLEMENTATION

In our inital proposal we outlined an MVP (Minimum Viable Product) which gave an idea of the features and
functions that we would have completed by the time the app would be published.
The MVP milestones we proposed were:

#### Viewing movies and adding to a watchlist:
We wanted the user to have the ability to browse through a collection of movies that were gathered from an external
API (MovieDB). Additionally we wanted the user to be able to check off the movies that they had watched already,
which would allow them to get a more concise view of all the top rated movies they've yet to see.
Each movie has its own details page which contains more info about the film including the genre, cast, crew, and reviews

#### Rating and Reviewing movies you've watched:
Once a user has watched a movie they can leave a rating out of 5 and a review of the movie. These reviews are left
in the users name so you can go back to a movie youve seen and look at how your opinion stacks against other
watchers. We also aggregate all the ratings into one so anyone can see the general concensus of public opinion

#### Login function:
A user can log into the app using a google account or a custom account which will unlock the ability
to personalise your profile with a name and leave reviews and ratings on the movies you've viewed

## SOURCE CODE GUIDE  
### API

The backend API is built with Express and implements GET, and POST in server/controller/api.js it uses CORS to manage cross-origin resource sharing.
The data sent and received by the server is read and written from MongoDB.
AXIOS is used by the front-end to send and receive API requests from the services folder to the server.
There is authenication setup on the server, it is implemented through Auth0. However, it is only implemented in the POST endpoint where the user token
provided by Auth0 is required.

The server contains the following endpoints:

```GET /api/reviews/watchlist/:userid```
This looks up the userid in MongoDB and returns the object if it exists

```GET /api/reviews/movie/:movieid```
This looks up the movieid in MongoDB and returns any object that contains the movieid

```GET /api/reviews/:userid/:movieid```
This looks up the movieid and userid in MongoDB and returns true if there is an object that has both userid and movieid otherwise returns false

```POST /api/reviews```
If the user has a token, checks that there is a userid and a movieid then checks for the correct amount of fields. Once these are validated, it checks if
there already exist a watchlist for that user. If there isn't it creates a new entry in MongoDB otherwise it appends the { movieid, rating, review } onto
the existing object. If a review already exist for that movie in the object then it returns an error.

### Mongoose/MongoDB

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

### FRONT-END

The frontend of the application is built with ReactJS, and using a React UI library called Material-UI. There are a few other modules in use as well, namely axios, react-dom-router, and material-ui-image.

App.js is the core of the website, it uses BrowserRouter from react-router-dom to "navigate" between "pages" stored in the pages folder and display them.
BrowserRouter will navigate by changing the URL then generate a view according to that URL. The user State is stored here and when a distributed to other pages
through props.

### COMPONENTS

For this project, we made components in a separate folder from the pages. We stored the components in the `components` folder, and we used them in the pages which are stored in the `pages` folder.

This is done so that some components can be easily reused or modified, and the page files are easier to read and understand. For example, the `Layout` component is reused in every page. This helps to keep the pages consistent, and if future developers want to modify the page layout, such as change the website logo or add a footer component, this can be easily done by just changing `Layout.js`.

Another reason to separate the components is for pages such as the home page, where there is a grid of movie cards, it is much simpler to use the Javascript array functions such as `map()` when the movie cards are made into separate components.

# SERVICES

We constructed two service components to help the front end communicate with the API that we created, they are in the form of functions that the front end developer can call and will return with a responce that can be processed and displayed to the page.

### Movies:

```movies = ()```
This service grabs all of the movies that are going to be in our database in a single JSON Object array

```movie = (movieid)```
This service grabs a single movie with the ID of movieID, it returns a more detailed JSON Object about
the movie

```similarMovies = (movieid)```
This service queries the MovieDB API for an object array that it thinks are similar to the movie with the ID
movieID and returns an object array similar to the service movies = ()

```movieCast = (movieid)```
This service returns a JSON Object array of the cast and crew of the movie with the ID of movieID

### Reviews:

```getMovieReviews = (movieid)```
This service returns all of the ratings and reviews for the movie with ID of movieID and sends a responce containing
a JSON Object array containing the UserID, rating and review text fields

```getReview = (userid, movieid)```
This service returns just the review left by a user with the ID of userID on the movie with ID of movieID, since a user can only leave 1 review per movie this has no multiplicity errors

```getWatchlist = (userid)```
This service returns a JSON Object array containing all the movies that are in the watchlist of the user with ID of user ID

```postReview = (token, userid, movieid, rating, review)```
This service posts a review to a movie under the user with the corresponding userID and movieID, it holds the rating, review and the token for authentication to post to the database.

## PAGES

All Pages have the navigation bar containing a link to the HomePage, a Search Bar, Login button and dark-mode button.

* HomePage

* MovieDetailsPage

* ProfilePage

## FUTURE IMPLEMENTATIONS

This application has the potential to grow into a much larger web service with the possibility of many more features to implement. 
- TV Shows  
The other main idea was to include not just movies but also TV shows, which will require some method or identification to distinguish from movies. 
- Trailer clips  
Another useful feature to implement would be trailer clips from youtube, embedded in each of the details page so that the user can directly watch the trailer from the website. 
- Extending profile page functionality  
Further styling to the profile page can also be necessary such as allowing the user to create a profile picture and a notifications system that alerts the user for new movies/shows added to the database. 
- Extending movie-related functionality  
The main database that stores the movies can be updated monthly so that the latest movies can be displayed. Furthermore, we can display another list of movies sorted by the rating, indicating its popularity. It would also be useful to the user if there are direct links or information about where to stream these services. In terms of filtering, the ability to filter movies based on other categories such as genre would be useful if a user is interested in a few genres only. Also, the application can include a recommendation system that suggests similar type of movies/shows the user has in their custom list.
- Removing items from the watched list  
It would be useful to implement a feature that can allow users to remove items from the watchlist in the future.
- Movie playlists  
An idea that the team had for a future implementation is a feature that can allow users to create custom lists of watched movies, similar to how a music playlist works on apps like Spotify.
 
## PROJECT MANAGEMENT

In this project we used a few tools to stay on top of development.

For communication we used a discord group chat to stay in touch and talk to other group members about what we were doing, or if any of us needed assistance or opinions on how certain parts of the project should work. We also had weekly discord calls so we could communicate verbally for more in-depth discussion.

We used Google Docs to construct our project proposal, where we all contributed to parts of it and could access it from our own workstations. Google Sheets was used so that we could have a scheduling and work allocation table which was able to be updated with the progress of each team member on their task.

GitHub was also used as a code repository tool where the project was hosted on and we could commit and push changes to the rest of the group when a task was completed. We used branches to work on the assignment separately and not interfere with the functions of the rest of the group as we progressed.

### Roles and tasks completed:

```Nicole Stella```: Front end developer and UI/UX designer
Finalising page designs and element positioning
Front end implementation of Home page, Profile page and MovieDetailsPage
Material UI refactoring

```Juyoung Lee```: Back end and server infrastructure developer
Page routing and switching, skeleton for data routing
Set up server.js and server/app.js
Dark mode, Search functionality and navigation

```Daniel Mendham```: Back end and API services developer
REST Client/Unirest requesting from MovieDB API
Service component data distribution to frontend
Reviews and Movies data handling

```Peter Wu```: Back end, API endpoint developer and data manager
Set up github, MongoDB and Auth0
MongoDB and endpoints for watched list and delete endpoint
Profile page data set up & displayed and submit review functionality
