var express = require('express');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var csurf = require('csurf');
var csrfProtection = csurf({cookie:true});
var cookieSession = require('cookie-session');
var passport = require('passport');
var flash = require('connect-flash');

var index = require('./routes/index');
var users = require('./routes/users');
var dashboard = require('./routes/breweryManagement');
var account = require('./routes/accountManagement');
var brewPage = require('./routes/brewManagement');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
    secret: 'onDraftBestApp',
    resave: true,
    saveUninitialized: false
}));
// app.use(session({secret: 'onDraftBestApp'}));

require('./lib/passportConfig')(passport);

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(csrfProtection);
app.use('/', index);
app.use('/dashboard', dashboard);
app.use('/dashboard', account);
app.use('/dashboard', brewPage);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
