var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
// var DynamicRoutes = require('dynamic-routes');
var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//Dynamically added line starts

var countryRouter = require('./routes/country');

app.use('/country', countryRouter);
app.use('/country/:id', countryRouter);

//Dynamically added Ends//Dynamically added line starts

var cityRouter = require('./routes/city');

app.use('/city', cityRouter);
app.use('/city/:id', cityRouter);

//Dynamically added Ends//Dynamically added line starts

var countrylanguageRouter = require('./routes/countrylanguage');

app.use('/countrylanguage', countrylanguageRouter);
app.use('/countrylanguage/:id', countrylanguageRouter);

//Dynamically added Ends

// DynamicRoutes(app, __dirname + '/routes/');
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
