var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
  username: String,
  password: String,
  name: String,
  movie: {
      one: {
        name: String,
        pic: String
      },
      two: {
        name: String,
        pic: String
      },
      three: {
        name: String,
        pic: String
      },
      four: {
        name: String,
        pic: String
      },
      five: {
        name: String,
        pic: String
      }
    }
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
