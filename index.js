/**
 * Created by gao on 2015/8/16.
 */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

var send = require('./send.js');

app.all('*', function(req, res, next){
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
    res.set('Access-Control-Max-Age', 60*60*24*30);
    res.set('Access-Control-Expose-Headers', 'Content-Range');
    if ('OPTIONS' == req.method) return res.send(200);
    next();
});

app.get('/service/mailer', function(req, res) {
    res.send('lawtalks email');
});

app.post('/service/mailer/intern', send.intern);

app.listen(4002, function() {
    console.log('Listening on port 4002...')
})