### DEPLOYMENT:

The web application is currently deployed on https://group-d-list.herokuapp.com.

## RUN

# "npm start"

Runs the front-end of the app in the development mode in http://localhost:3000.
The page will reload if you make edits. Need to start server as well to populate data and access/develop all functionality.

# "npm run server"

Runs the server in PORT 3001. http://localhost:3001 will display the current production build.
Changes will be reflected on save, as it reloads on save using Nodemon.

## DEPLOY

# HEROKU

This website is deployed to Heroku on a single web dyno.

# "npm run build"

Builds the app for production to the `build` folder so that your app is ready to be deployed.

# "heroku login"

To login to heroku and access the repo

# "heroku create {name}"

Create a new heroku application with the specified name (otherwise if no name is specified then a random name is assigned)

# heroku git:remote -a {name}

Remotely accesses the git repo of the heroku application

# "heroku ps"

To check how many dynos are running

# "heroku ps:scale web=n"

To run on n amount of dynos (only 1 is free)

# "pushing production build to heroku"

To push a new production build to heroku you must use the following commands:
'npm run build'
'heroku login'
'git add .'
'git commit -m "some changes"
'git push heroku master'
