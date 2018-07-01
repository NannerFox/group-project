var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const Rating = new Schema({
  name: String,
  rating: Number
  });

module.exports = mongoose.model('Rating', Rating);
