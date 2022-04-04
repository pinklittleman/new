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
  console.log('a user connected');
  users = users + 1

  socket.on('disconnect', () => {
    console.log('user disconnected');
    users = users - 1
  });
});

io.on('hello', function(users){
  console.log(hello);
});

let x = 0
//for testing, we're just going to send data to the client every second
setInterval( function() {

  /*
    our message we want to send to the client: in this case it's just a random
    number that we generate on the server
  */

  var users2 = ("users:  " + users);
  io.emit('users', users2);
  console.log (users2);

  var msg = (x = x+1);
  io.emit('message', msg);
  console.log (msg);

}, 1000);
