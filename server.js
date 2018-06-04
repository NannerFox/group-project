// module imports
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors());

// app middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.get('/test', (req, res) => {
  res.json([
    {id:1, name: "this"},
    {id:2, name: "is"},
    {id:3, name: "a"},
    {id:4, name: "test"}
  ]);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

mongoose.connect('mongodb://movieurl:ilikepie1@ds235609.mlab.com:35609/heroku_c8sz2s7d');

// Development mode port
const port = process.env.PORT || 5000;
app.listen(port)

module.exports = app;
