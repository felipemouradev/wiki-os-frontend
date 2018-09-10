const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Posts = require('./models/Posts');



const indexPosts = require('./routes/Posts');
const usersRouter = require('./routes/Register');

mongoose.connect('mongodb://localhost/wiki');
mongoose.Promise = global.Promise;

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();

});
console.log("ok");

app.use('/api/posts', indexPosts);
app.use('/api/register', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    res.status(402).send({error: err.message})
});

module.exports = app;
