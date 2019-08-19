var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

var io = require('socket.io')(server);

app.use(express.static('client'));

server.listen(8080, function() {
  console.log('Chat server running');
})

io.on('connection', function(socket) {
  socket.on('message', function(msg) {
    io.emit('message', msg);
  });
});