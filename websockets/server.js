var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){

  //send the index.html file for all requests
  res.sendFile(__dirname + '/index.html');

});

http.listen(5000, function(){

  console.log('listening on *:3001');

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

let x = 0
//for testing, we're just going to send data to the client every second
setInterval( function() {

  /*
    our message we want to send to the client: in this case it's just a random
    number that we generate on the server
  */

  setTimeout(() => {
  var msg = ("users:  " + users);
  io.emit('message', msg);
  console.log (msg);
  }, 1000);

  var count = (x = x+1);
  io.emit('message', count);
  console.log (count);

}, 1000);
