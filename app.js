var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/blog');

var gameRoutes = require('./routes/game');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



// app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 3000));

app.use('/api', gameRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


module.exports = app;
