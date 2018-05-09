const express = require('express');
const app = express();

const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const Routes = require('./app/routes/routes');


const { url } = require('./config/database.js');

mongoose.connect(url);
Routes.assignRoutes(app);
require('./config/passport-local')(passport);

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// app.use(bodyParser.urlencoded({extended: false}));
// required for passport
app.use(session({
	secret: 'nodebaselogin',
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// routes
require('./app/routes/passport-login-local.js')(app, passport);

// start the server
app.listen(app.get('port'), () => {
	console.log('server on port ', app.get('port'));
});
