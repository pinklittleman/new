const { countReset } = require('console');
// does stuff
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

let currentSketch = []

let usercount = []

let colours = []

var temp1
var temp2
var temp3

var newval

app.get('/', function(req, res){

  //send the index.html file for all requests
  res.sendFile(__dirname + '/index.html');

});

server.listen(5000, function(){

  console.log('listening on :5000');

});
var usr
var user = {}
io.on('connection', (socket) => {
  console.log('a user connected: ' + socket.id);
  user = socket.id
  socket.broadcast.emit('message', socket.id)
  socket.emit('connection', 'connection established')
  socket.emit('sketch', currentSketch)

  socket.on('rgb', (number1, number2, number3) => {
    temp1 = number1
    temp2 = number2
    temp3 = number3
    setInterval(() => {
      setTimeout(() => {
        // colours.push(number1,number2,number3)
      }, 1000);
    }, 2000);
    
    setInterval(() => {
      socket.broadcast.emit('newrgb',temp1,temp2,temp3)
      console.log(colours)
    }, 1000);
  })

  socket.on('username', logname)
  
  socket.on('mouse', mouseMsg)

  socket.on('refresh', aler)

  socket.on('size', size)

  socket.on('clear', arrayclear)

  function size(data){
    newval = data
    socket.broadcast.emit('newsize', newval)
    
  }

  function aler(data){
    socket.broadcast.emit('reload', data)
  }

  function logname(data){
      usr = {
        username: data,
        id: socket.id,
      }
    
    console.log(usr)
    usercount.push(usr.username)
    setInterval(() => {
      socket.broadcast.emit('users', usr)
      setTimeout(() => {
        console.log(usercount)
      }, 3000);
    }, 2000);
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
    console.log('user disconnected ' + usr.username+" "+user.id);
    var search_term = usr.username;
    for (var i=usercount.length-1; i>=0; i--) {
      if (usercount[i] === search_term) {
        usercount.splice(i, 1);
        break;
    }}
  });
});