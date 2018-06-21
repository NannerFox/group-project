var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const Movie = new Schema({
  name: String,
  movie: {
    one: {
      name: {
        type: String,
        default: null
      },
      pic: {
        type: String,
        default: null
      }
    },
    two: {
      name: {
        type: String,
        default: null
      },
      pic: {
        type: String,
        default: null
      }
    },
    three: {
      name: {
        type: String,
        default: null
      },
      pic: {
        type: String,
        default: null
      }
    },
    four: {
      name: {
        type: String,
        default: null
      },
      pic: {
        type: String,
        default: null
      }
    },
    five: {
      name: {
        type: String,
        default: null
      },
      pic: {
        type: String,
        default: null
      }
    }
  }
});

module.exports = mongoose.model('Movie', Movie);
