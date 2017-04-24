var express = require('express');
var cookieParser = require('cookie-parser')
var bee = require('./routes/collect');
var app = express();


app.use(cookieParser());
app.use('/beehive', bee);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.status(404);
    console.log('%s %d %s', req.method, res.statusCode, req.url);
    res.json({
        error: 'Not found'
    });
    return;
});

// error handlers
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    console.log('%s %d %s', req.method, res.statusCode, err.message);
    res.json({
        error: err.message
    });
    return;
});

module.exports = app;