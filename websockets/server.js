const { countReset } = require('console');

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

const usernames = []

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
  socket.broadcast.emit('message', socket.id)
  
  socket.on('username', (data) =>{
    console.log(data)
    socket.broadcast.emit('message', data)
    console.log(usernames)
  })

  socket.on('cords', (data) => {
    console.log(data)
    socket.broadcast.emit('ncords', data)
    console.log(data)
    // usernames.push(data.user)
    console.log(usernames)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected' + socket.io);
    users = users - 1
  });
});