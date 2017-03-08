/**
 * Created by Iaroslav Zhbankov on 26.02.2017.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var cookieParser = require('cookie-parser');

//var url = 'mongodb://localhost:27017/voteApp';
var url = 'mongodb://yzhbankov:password1360@ds051893.mlab.com:51893/heroku_47700xpx';
app.use(bodyParser.urlencoded({extended: false}));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use(express.static(__dirname + '/app'));

app.set('views', __dirname + '/app');
app.set('view engine', 'html');

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/dashboard', function (req, res) {
    res.render('index.html');
});

app.get('/dashboard', function (req, res) {
    res.render('index');
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
                db.close();
                console.log("user existing");
                res.send({success: true, username: username});
            } else {
                db.close();
                res.status(401).send({error: 'User not found!'});
                //res.send({success: false, username: null});
            }
        });
    });
});

app.post('/save-problem', function (req, res) {
    var username = req.query.user;
    var title = req.query.title;
    var customer = req.query.customer;
    var competitor = req.query.competitor;

    MongoClient.connect(url, function (err, db) {
        db.collection('problems').findOne({"username": username, "title": title}, function (err, item) {
            if (item) {
                db.close();
                console.log("problem already exist");
                res.send(false);
            } else {
                db.collection('problems').insertOne({
                    "username": username,
                    "title": title,
                    "customer": customer,
                    "competitor": competitor
                }, function (err, result) {
                    if (!err) {
                        console.log("problem " + title + " added successfuly");
                    }
                });
                db.close();
                res.send(true);
            }
        });
    });
});

app.get('/problems', function (req, res) {
    var username = req.query.user;
    MongoClient.connect(url, function (err, db) {
        var resent = db.collection('problems').find({"username": username}, {
            'username': true,
            "title": true
        }).toArray(function (err, result) {
            if (result.length < 1) {
                res.send([]);
            } else {
                var problems = [];
                for (var i = 0; i < result.length; i++) {
                    problems.push(result[i].title);
                }
                res.send(problems);
            }
        });
        db.close();
    });
});

app.get('/get-problem', function (req, res) {
    var username = req.query.user;
    var title = req.query.title;
    MongoClient.connect(url, function (err, db) {
        db.collection('problems').findOne({"username": username, "title": title}, function (err, item) {
            if (item) {
                var username = item.username;
                var title = item.title;
                var customer = item.customer;
                var competitor = item.competitor;
                db.close();
                res.send({username: username, title: title, customer: customer, competitor: competitor});
            } else {
                console.log('no such problem');
                db.close();
                res.send(null);
            }
        });
    });
});

app.get('/delete', function (req, res) {
    var username = req.query.user;
    var title = req.query.title;
    MongoClient.connect(url, function (err, db) {
        db.collection('problems').remove({"username": username, "title": title});
        db.close();
        res.send('problem removed');
    });
});

app.listen(process.env.PORT || 3000, function () {
    console.log('listening port 3000');
});