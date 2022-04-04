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
let mad = 0
io.on('connection', (socket) => {
  console.log('a user connected: ' + socket.id);
  users = users + 1
  socket.broadcast.emit('message', socket.id)

  socket.on('num', (data) =>{
    console.log("x = :  " + data)
    mad = mad + data
  })

  
  console.log(mad)
  socket.on('username', (data) =>{
    console.log(data)
    // decide2 = decide2 + 1
    // if(decide2>1){
    //   usernames.push(data)
    // }
    console.log(mad)
    socket.broadcast.emit('message', data)
    console.log(usernames)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected' + socket.io);
    users = users - 1
  });
});