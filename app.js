var express = require('express');
var app = express();
var db = require('./models/');

//Passport

var passport = require('passport');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var bcrypt = require('bcryptjs');
var Sequelize = require('sequelize');

var SequelizeStore = require('connect-session-sequelize')(session.Store)

//Middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cookieParser());

//set-up sessions

var myStore = new SequelizeStore({
    db: db.sequelize
})

app.use(session({
    secret: 'hellothere;',
    store: myStore,
    resave: false,
    proxy: true
}))

app.set('view engine','ejs');
app.set('views','views');
app.use(express.static("public"));

app.use(require('./routes/index'));

app.listen(3000, ()=>{
    console.log('listeing on port 3000')
})

//npm install
// bluebird
// ejs
// express-fileupload
// pg-promise

// #Passport
// passport
// passport-local
// cookie-Parser
// body-parser
// express-session
// bcryptjs
// sequelize
// pg
// pg-hstore
// express

// #Authentication
// connect-pg-simple
// sequelize-session-store

// #Password Hashing
// pbkdf2  var pbkdf2 = require('pbkdf2)
// var crypto = require('crypto')
// var
