const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');

const PORT = 3000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static('dist'));
//app.use(express.static('src'));

io.on('connection', function(socket){
    console.log('connected');
});

http.listen(PORT, function(){
    console.log('listening on '+ PORT);
});


