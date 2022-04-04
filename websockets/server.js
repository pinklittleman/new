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
let mad = false
let count = 0
io.on('connection', (socket) => {
  console.log('a user connected: ' + socket.id);
  users = users + 1
  socket.broadcast.emit('message', socket.id)

  socket.on('num', (data) =>{
    setInterval(() => {
      console.log("x = :  " + data)
    }, 2000);
  })

  
  console.log(mad)
  socket.on('username', (data) =>{
    console.log(data)
    if(mad === "true"){
      if(count<1){
        usernames.push(data)
      }
      count++
    }
    console.log("this is mad: "+mad)
    socket.broadcast.emit('message', data)
    console.log(usernames)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected' + socket.io);
    users = users - 1
  });
});