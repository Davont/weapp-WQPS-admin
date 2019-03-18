require('./db');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/nextMonth');
var updateRouter = require('./routes/update');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// 解析 application/json
app.use(bodyParser.json());
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/update', updateRouter);
app.use('/nextMonth', usersRouter);
app.use('/nextMonth/add_ph', usersRouter);
app.use('/nextMonth/add_list', usersRouter);
app.use('/nextMonth/add_dOxy', usersRouter);
app.use('/nextMonth/add_aNit', usersRouter);
app.use('/nextMonth/get_nextMonth_list', usersRouter);
app.use('/nextMonth/get_ph', usersRouter);
app.use('/nextMonth/get_aNit', usersRouter);
app.use('/nextMonth/get_dOxy', usersRouter);
app.use('/update/update_ph', updateRouter);
app.use('/update/update_aNit', updateRouter);
app.use('/update/update_dOxy', updateRouter);
app.use('/update/get_ph', updateRouter);
app.use('/update/get_aNit', updateRouter);
app.use('/update/get_dOxy', updateRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;