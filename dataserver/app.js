/******************************************************************************
 *
 *  app.js - Main Application File - Data Server
 *
 * user_id    DD/MM/YYYY    Note
 * mohashah   12/10/2016    Created
 *
 *****************************************************************************/

/* Get the tools */
var express = require('express');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var multer = require('multer');
var cors = require('cors');
var serveStatic = require('serve-static');
var apiRoutes = require('./routes/api');
var config = require('./config');
var app = express();

/* Set the Configuration */
var SERVER_HOST = config.server.host;
var SERVER_PORT = config.server.port;
var DB_URI = config.db.uri;
var DB_HOST = config.db.host;
var DB_PORT = config.db.port;
var DB_NAME = config.db.name;
var LOG_FILE_NAME = config.logFile;
var CORS_WHITE_LIST = config.cors;

/* Set up middlewares */
app.use(logger('dev'));
app.use(session({
    secret: '1234',
    store: new MongoStore({
        uri: DB_URI,
        db: DB_NAME,
        //ttl: 14 * 24 * 60 * 60, // = 14 days
        autoRemove: 'interval',
        autoRemoveInterval: 60 // In minutes
    }),
    resave: true,
    saveUninitialized: false
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(serveStatic(path.join(__dirname, 'public')));

/* CORS */
var whitelist = CORS_WHITE_LIST;

var corsOptionsDelegate = function (req, callback) {
    var corsOptions;
    if (whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true, credentials: true }; // reflect (enable) the requested origin in the CORS response
    } else {
        corsOptions = { origin: false }; // disable CORS for this request
    }
    callback(null, corsOptions); // callback expects two parameters: error and options
};

app.use(cors(corsOptionsDelegate));

app.use('/api', apiRoutes);

/* Catch 404 and forward to error handler */
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/* No stack traces leaked to user */
app.use(function (err, req, res, next) {

    res.status(err.status || 500)
        .send({
            status: 'dif',
            message: err.message
        });
});

module.exports = app;

/***********************************  END  ***********************************/
