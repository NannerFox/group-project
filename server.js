// module imports
const express = require('express');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const morgan = require('morgan');
const db = mongoose.connection;
const app = express();
const User = require('./models/User');
const Movie = require('./models/Movie');
// Development mode port
const port = process.env.PORT || 5000;
app.listen(port)

// app middleware
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(morgan('dev'))
app.use(passport.initialize());
app.use(passport.session());
app.use(session({
  secret: 'mvdamvp',
  resave: false,
  saveUninitialized: true
}));

mongoose.connect('mongodb://movieurl:ilikepie1@ds235609.mlab.com:35609/heroku_c8sz2s7d', function(err) {
  if (err) {
    console.err(err);
  } else {
    console.log('Connected');
  }
});

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('DB connected!');
});
mongoose.set('bufferCommands', false);
mongoose.set('debug', true);

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
//
app.get('/userlist', (req, res) => {
  let inName = req.query.name;
  let name = { name : inName };
  Movie.findOne(name, function(err, list){
    if (err) {
      console.error('error!!!');
      res.redirect('/#home');
    }
    else if (list){
      res.json(list);
    }
    else {
      console.log('no matched query');
      res.redirect('/#home');
    }
  });
})

app.post('/delone', function(req, res) {
  let inName = req.body.name;
  let name = { name : inName };

  Movie.findOne(name, function(err, doc) {
    if (err) {
      console.error('error!!!');
      res.redirect('/#profile');
    }
    else if (doc) {
      doc.movie.one.name = null;
      doc.movie.one.pic = null;
      doc.save(function (err, mov) {
        if (err) return handleError(err);
        res.redirect('/#profile');
      });
    }
    else {
      console.log('no matched query');
      res.redirect('/#profile');
    }
  },
  { new : true }
);
});

app.post('/deltwo', function(req, res) {
  let inName = req.body.name;
  let name = { name : inName };

  Movie.findOne(name, function(err, doc) {
    if (err) {
      console.error('error!!!');
      res.redirect('/#profile');
    }
    else if (doc) {
      doc.movie.two.name = null;
      doc.movie.two.pic = null;
      doc.save(function (err, mov) {
        if (err) return handleError(err);
        res.redirect('/#profile');
      });
    }
    else {
      console.log('no matched query');
      res.redirect('/#profile');
    }
  },
  { new : true }
);
});

app.post('/delthree', function(req, res) {
  let inName = req.body.name;
  let name = { name : inName };

  Movie.findOne(name, function(err, doc) {
    if (err) {
      console.error('error!!!');
      res.redirect('/#profile');
    }
    else if (doc) {
      doc.movie.three.name = null;
      doc.movie.three.pic = null;
      doc.save(function (err, mov) {
        if (err) return handleError(err);
        res.redirect('/#profile');
      });
    }
    else {
      console.log('no matched query');
      res.redirect('/#profile');
    }
  },
  { new : true }
);
});

app.post('/delfour', function(req, res) {
  let inName = req.body.name;
  let name = { name : inName };

  Movie.findOne(name, function(err, doc) {
    if (err) {
      console.error('error!!!');
      res.redirect('/#profile');
    }
    else if (doc) {
      doc.movie.four.name = null;
      doc.movie.four.pic = null;
      doc.save(function (err, mov) {
        if (err) return handleError(err);
        res.redirect('/#profile');
      });
    }
    else {
      console.log('no matched query');
      res.redirect('/#profile');
    }
  },
  { new : true }
);
});

app.post('/delfive', function(req, res) {
  let inName = req.body.name;
  let name = { name : inName };

  Movie.findOne(name, function(err, doc) {
    if (err) {
      console.error('error!!!');
      res.redirect('/#profile');
    }
    else if (doc) {
      doc.movie.five.name = null;
      doc.movie.five.pic = null;
      doc.save(function (err, mov) {
        if (err) return handleError(err);
        res.redirect('/#profile');
      });
    }
    else {
      console.log('no matched query');
      res.redirect('/#profile');
    }
  },
  { new : true }
);
});

app.post('/onetwo', function(req, res) {
  let inName = req.body.name;
  let name = { name : inName };
  let onepic = req.body.onepic;
  let onemov = req.body.onemov;
  let twopic = req.body.twopic;
  let twomov = req.body.twomov;

  Movie.findOne(name, function(err, doc) {
    if (err) {
      console.error('error!!!');
      res.redirect('/#profile');
    }
    else if (doc) {
      doc.movie.one.name = twomov;
      doc.movie.one.pic = twopic;
      doc.movie.two.name = onemov;
      doc.movie.two.pic = onepic;
      doc.save(function (err, mov) {
        if (err) return handleError(err);
        res.redirect('/#profile');
      });
    }
    else {
      console.log('no matched query');
      res.redirect('/#profile');
    }
  },
  { new : true }
);
});

app.post('/twothree', function(req, res) {
  let inName = req.body.name;
  let name = { name : inName };
  let threepic = req.body.threepic;
  let threemov = req.body.threemov;
  let twopic = req.body.twopic;
  let twomov = req.body.twomov;

  Movie.findOne(name, function(err, doc) {
    if (err) {
      console.error('error!!!');
      res.redirect('/#profile');
    }
    else if (doc) {
      doc.movie.three.name = twomov;
      doc.movie.three.pic = twopic;
      doc.movie.two.name = threemov;
      doc.movie.two.pic = threepic;
      doc.save(function (err, mov) {
        if (err) return handleError(err);
        res.redirect('/#profile');
      });
    }
    else {
      console.log('no matched query');
      res.redirect('/#profile');
    }
  },
  { new : true }
);
});

app.post('/threefour', function(req, res) {
  let inName = req.body.name;
  let name = { name : inName };
  let threepic = req.body.threepic;
  let threemov = req.body.threemov;
  let fourpic = req.body.fourpic;
  let fourmov = req.body.fourmov;

  Movie.findOne(name, function(err, doc) {
    if (err) {
      console.error('error!!!');
      res.redirect('/#profile');
    }
    else if (doc) {
      doc.movie.three.name = fourmov;
      doc.movie.three.pic = fourpic;
      doc.movie.four.name = threemov;
      doc.movie.four.pic = threepic;
      doc.save(function (err, mov) {
        if (err) return handleError(err);
        res.redirect('/#profile');
      });
    }
    else {
      console.log('no matched query');
      res.redirect('/#profile');
    }
  },
  { new : true }
);
});

app.post('/fourfive', function(req, res) {
  let inName = req.body.name;
  let name = { name : inName };
  let fivepic = req.body.fivepic;
  let fivemov = req.body.fivemov;
  let fourpic = req.body.fourpic;
  let fourmov = req.body.fourmov;

  Movie.findOne(name, function(err, doc) {
    if (err) {
      console.error('error!!!');
      res.redirect('/#profile');
    }
    else if (doc) {
      doc.movie.five.name = fourmov;
      doc.movie.five.pic = fourpic;
      doc.movie.four.name = fivemov;
      doc.movie.four.pic = fivepic;
      doc.save(function (err, mov) {
        if (err) return handleError(err);
        res.redirect('/#profile');
      });
    }
    else {
      console.log('no matched query');
      res.redirect('/#profile');
    }
  },
  { new : true }
);
});

app.post('/movie', function(req, res) {
  let inName = req.body.name;
  let name = { name : inName };
  let moviename = req.body.moviename;
  let pic = req.body.pic;

  Movie.findOne(name, function(err, doc) {
    if (err) {
      console.error('error!!!');
      res.redirect('/#profile');
    }
    else if (doc) {
        if (doc.movie.one.name == null){
          doc.movie.one.name = moviename;
          doc.movie.one.pic = pic;
          doc.save(function (err, updatedMov) {
            if (err) return handleError(err);
            res.redirect('/#profile');
          });
        }
        else if (doc.movie.two.name == null){
          doc.movie.two.name = moviename;
          doc.movie.two.pic = pic;
          doc.save(function (err, updatedMov) {
            if (err) return handleError(err);
            res.redirect('/#profile');
          });
        }
        else if (doc.movie.three.name == null){
          doc.movie.three.name = moviename;
          doc.movie.three.pic = pic;
          doc.save(function (err, updatedMov) {
            if (err) return handleError(err);
            res.redirect('/#profile');
          });
        }
        else if (doc.movie.four.name == null){
          doc.movie.four.name = moviename;
          doc.movie.four.pic = pic;
          doc.save(function (err, updatedMov) {
            if (err) return handleError(err);
            res.redirect('/#profile');
          });
        }
        else if (doc.movie.five.name == null){
          doc.movie.five.name = moviename;
          doc.movie.five.pic = pic;
          doc.save(function (err, updatedMov) {
            if (err) return handleError(err);
            res.redirect('/#profile');
          });
        }
        else {
          console.log('All slots filled!');
          res.redirect('/#profile');
        }
      }
      else {
        console.log('no matched query');
        res.redirect('/#profile');
      }
    },
    { new : true }
);
});

app.get('/userprofile', (req, res) => {
  let inName = req.query.name;
  let name = { name : inName };
  Movie.findOne(name, function(err, list){
    if (err) {
      console.error('error!!!');
      res.redirect('/#profile');
    }
    else if (list){
      res.json(list);
    }
    else {
      console.log('no matched query');
      res.redirect('/#profile');
    }
  });
})

app.get('/listall', (req, res) => {
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
      return console.log(err);
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

app.get('/logout', function(req, res) {
  req.logOut();
  req.session.destroy(function (err) {
    res.redirect('/'); //Inside a callback… bulletproof!
  });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

module.exports = app;
