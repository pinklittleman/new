const { Socket } = require('socket.io');

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

var users = []

var userl

server.listen(5000);

io.on('connect', (socket) => {
  let user = socket.id
  console.log("connecting: "+user)
  users.push(user)
  console.log(users)
  
  socket.emit('id', user)
  
  setInterval(() => {
    socket.emit('users', users )
  }, 1000);
  
  socket.on('disconnect', (socket) => {
    userl = socket.id
    console.log("userl: "+userl)
    socket.emit('usersdc', 'users')

    var search_term = user;

    for (var i=users.length-1; i>=0; i--) {
      if (users[i] === search_term) {
        users.splice(i, 1);
        break;
    }}
    console.log("disconnecting: " + search_term)
    console.log(users)

  });
})
