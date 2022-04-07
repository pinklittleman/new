const { Socket } = require('socket.io');

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

var users = []

server.listen(5000);

io.on('connect', (socket) => {
  let user = socket.id
  users.push(user)
  console.log(users)
  

  socket.on('disconnect', () => {
    users.slice(user)
    console.log("disconnecting: "+user)
  });
})