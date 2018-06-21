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
const User = require('./models/User');
const Movie = require('./models/Movie');
const morgan = require('morgan');

mongoose.connect('mongodb://movieurl:ilikepie1@ds235609.mlab.com:35609/heroku_c8sz2s7d', function(err) {
  if (err) {
    console.err(err);
  } else {
    console.log('Connected');
  }
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('DB connected!');
});
mongoose.set('bufferCommands', false);
mongoose.set('debug', true);

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors());

// app middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(morgan('combined'))
app.use(passport.initialize());
app.use(passport.session());
app.use(session({
  secret: 'mvdamvp',
  resave: false,
  saveUninitialized: true
}));

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get('/test', (req, res) => {
  res.json([
    {id:1, name: "this"},
    {id:2, name: "is"},
    {id:3, name: "a"},
    {id:4, name: "test"}
  ]);
});

app.put('/movie', function(req, res) {
  let id = { "$oid" : req.body.id };
  let moviename = req.body.moviename;
  let pic = req.body.pic;

  Movie.findOne(id, function(err, doc) {
    if (err) {
      console.error('error!!!');
      res.end();
    }
    else if (doc) {
        if (doc.movie.one.name == null){
          doc.movie.one.name = moviename;
          doc.movie.one.pic = pic;
        }
        else if (doc.movie.two.name == null){
          doc.movie.two.name = moviename;
          doc.movie.two.pic = pic;
        }
        else if (doc.movie.three.name == null){
          doc.movie.three.name = moviename;
          doc.movie.three.pic = pic;
        }
        else if (doc.movie.four.name == null){
          doc.movie.four.name = moviename;
          doc.movie.four.pic = pic;
        }
        else if (doc.movie.five.name == null){
          doc.movie.five.name = moviename;
          doc.movie.five.pic = pic;
        }
        else {
          console.error('All slots filled!');
          res.end();
        }
        doc.save(function (err, updatedMov) {
          if (err) return handleError(err);
          res.send(updatedMov);
        });
      }
      else {
        console.log('no matched query');
        res.end();
      }
    },
    { new : true }
);
});

app.get('/movie', (req, res) => {
  Movie.find(function(err, users){
    res.json(users);
  });
})

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
    Movie.create({ name : req.body.username});
  });
});

app.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/#profile');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// Development mode port
const port = process.env.PORT || 5000;
app.listen(port)

module.exports = app;
