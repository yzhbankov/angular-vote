/**
 * Created by Iaroslav Zhbankov on 26.02.2017.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/voteApp';
var session = require('express-session');
var cookieParser = require('cookie-parser');
var MongoStore = require("connect-mongo")(session);
var mongoose = require("mongoose");

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({secret: "secretword",
    resave: true,
    saveUninitialized: false,
    rolling: true,
    store: new MongoStore({url: url})}));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/', function (req, res) {
    console.log(req.session.user);
    var user = req.session.user;
    if (user){
        res.send(user);
    } else {
        res.send(null);

    }
});

app.get('/test', function (req, res) {
    console.log(req.session);
});

app.post('/signup', function (req, res) {
    var username = req.query.user;
    var email = req.query.email;
    var password = req.query.password;
    MongoClient.connect(url, function (err, db) {
        db.collection('users').findOne({"username": username}, function (err, item) {
            if (item) {
                db.close();
                console.log("user already exist");
                res.send(null);
            } else {
                req.session.user = username;
                db.collection('users').insertOne({
                    "username": username,
                    "email": email,
                    "password": password
                }, function (err, result) {
                    if (!err) {
                        console.log("user " + username + " added successfuly");
                    }
                });
                db.close();
                console.log('user ' + username + ' is signing up');
                res.send(username);
            }
        });
    });
});

app.post('/signin', function (req, res) {
    var username = req.query.user;
    var password = req.query.password;

    MongoClient.connect(url, function (err, db) {
        db.collection('users').findOne({"username": username, "password": password}, function (err, item) {
            if (item) {
                req.session.user = username;
                db.close();
                console.log("user existing");
                console.log(req.session);
                res.send({success: true, username: req.session.user});
            } else {
                db.close();
                res.send({success: false, username: null});
            }
        });
    });
});

app.get('/logout', function (req, res) {
    req.session.destroy();
    console.log("session ends");
    res.send('success');
});

app.listen(3000, function () {
    console.log('listening port 3000');
});