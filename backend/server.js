const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const routes = require('./routes/index');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const allowedOrigin = process.env.NODE_ENV === 'production' ? 'https://tooltracker.samarmstrong.io' : 'http://localhost:3000'

//import models
const Job = require('./models/job');
const Client = require('./models/client');
const User = require('./models/user');



//Fetch sensitive DB information from env variables to connet to DB
const dbhost = process.env.DB_HOST;
const dbname = process.env.DB_NAME;
const dbpassword = process.env.DB_PASSWORD;
const dbusername = process.env.DB_USERNAME;

//initialise the express app
const app = express();
app.use(cookieParser());

//set CORS headers
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", allowedOrigin);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

//Check for auth cookie and set current user
app.use(function (req, res, next) {
  if (req.originalUrl === '/users/signin' || req.originalUrl === '/users/create') {
    next();
  }
  else if (req.method === 'OPTIONS') res.sendStatus(200);
  else{
    const { authToken } = req.cookies;
    
    if (!authToken) res.sendStatus(401);
    else{
      const { userId } = jwt.verify( authToken, process.env.JWT_SECRET)
      req.userId = userId;
      next();
    }
  }
})

//rquire mongoose, and declare mongoUri
const mongoose = require('mongoose');
let mongoUri;


//create Mlab connection string from env variables - either local or production
if (process.env.NODE_ENV == 'development') {
  mongoUri = 'mongodb://localhost/test'
}
else {
  mongoUri = `mongodb://${dbusername}:${dbpassword}@${dbhost}/${dbname}`;
}
//then connect to the database
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('MongoDB Connected'));

// Serve static files from the React App
// app.use(express.static(path.join(__dirname, 'client/public')));
// app.use(express.static(path.join(__dirname, 'client/src')));
// app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());

//handle all routes in routes/index.js
app.use('/', routes);

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port:' + port);
