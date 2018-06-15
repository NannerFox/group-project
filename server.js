// module imports
const express = require('express');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors());

// app middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(passport.initialize());
app.use(passport.session());
app.use(session({
  secret: 'mvdamvp',
  resave: false,
  saveUninitialized: true
}));

app.get('/test', (req, res) => {
  res.json([
    {id:1, name: "this"},
    {id:2, name: "is"},
    {id:3, name: "a"},
    {id:4, name: "test"}
  ]);
});

app.get('/auth', (req, res, next) => {
	if (req.session.passport.user) {
		return res.json({ user: req.session.passport.user })
	} else {
		return res.json({ user: null })
	}
})

app.post('/register', function(req, res) {
  User.register(new User({ username : req.body.username }), req.body.password, function(err, user) {
    if (err) {
      // return console.log( user : user );
    }
    passport.authenticate('local')(req, res, function () {
      res.redirect('/');
    });
  });
});

app.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/#profile');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

mongoose.connect('mongodb://movieurl:ilikepie1@ds235609.mlab.com:35609/heroku_c8sz2s7d');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Development mode port
const port = process.env.PORT || 5000;
app.listen(port)

module.exports = app;
