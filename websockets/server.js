var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', function(req, res){

  //send the index.html file for all requests
  res.sendFile(__dirname + '/index.html');

});

server.listen(5000, function(){

  console.log('listening on *:5000');

});
let users = 0
io.on('connection', (socket) => {
  console.log('a user connected: ' + socket.id);
  users = users + 1

  socket.on('username', (data) =>{
    console.log(data)
    let data = username
    socket.broadcast.emit('message', data)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected');
    users = users - 1
  });
});

console.log(username)