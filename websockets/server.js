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
  

  socket.on('disconnect', (socket) => {
    var search_term = socket.id;

    for (var i=array.length-1; i>=0; i--) {
      if (array[i] === search_term) {
        array.splice(i, 1);
        break;
    }}
    console.log("disconnecting: "+search_term)

  });
})