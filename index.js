/**
 * Created by gao on 2015/8/16.
 */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

var send = require('./send.js');

app.all('*', function(err, req, res, next) {
	next();
});

app.get('/', function(req, res) {
    res.send('lawtalks');
});

app.post('/service/mailer/intern', send.intern);

app.listen(4002, function() {
    console.log('Listening on port 4002...')
})