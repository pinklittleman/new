const { countReset } = require('console');

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

let currentSketch = []

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
  socket.emit('sketch', currentSketch)
  
  socket.on('mouse', mouseMsg)

  socket.on('user', user2)

  socket.on('refresh', aler)

  socket.on('clear', arrayclear)

  function user2(data){
    var username ={
      user:data,
      socketId: socket.id
    }
    socket.emit(username)
  }

  function aler(data){
    socket.broadcast.emit('reload', data)
  }

  function arrayclear(){
    currentSketch.length = 0;
    currentSketch;
  }

  function mouseMsg(data){
    socket.broadcast.emit('incords', data)
    currentSketch.push(data)
  }

  socket.on('disconnect', () => {
    console.log('user disconnected' + socket.io);
    users = users - 1
  });
});