var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var server = app.listen(port, function(){
  console.log('URL: http://localhost:' + port);
});

app.use(express.static('public'));

var socket =  require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
  // console.log(socket);
  console.log('New client: ' + socket.id);
  // broadcast client socket data
  socket.on('mouse', mouseMSG);
  function mouseMSG(data) {
    // broadcast sends to all other clients
    socket.broadcast.emit('mouse', data);
    // ...emit send to all - including the original sender
    // io.sockets.emit('mouse', data);
    // console.log('x\:' + data.x + ' y\:' + data.y + ' > clientID: ' + socket.id);
  }
}


// console.log(process);
