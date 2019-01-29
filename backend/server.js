const express = require('express');
const path = require('path');
const Job = require('./models/job');
const Client = require('./models/client');
const bodyParser = require('body-parser')
const routes = require('./routes/index');
require('dotenv').config();

//Fetch sensitive DB information from env variables to connet to DB
const dbhost = process.env.DB_HOST;
const dbname = process.env.DB_NAME;
const dbpassword = process.env.DB_PASSWORD;
const dbusername = process.env.DB_USERNAME;



const app = express();
const mongoose = require('mongoose');
var mongoUri;


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
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// app.use(cors());
app.use(express.static(path.join(__dirname, 'client/public')));
app.use(express.static(path.join(__dirname, 'client/src')));
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());


//handle all routes in routes/index.js
app.use('/', routes);



const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port:' + port);