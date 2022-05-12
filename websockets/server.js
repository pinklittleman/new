var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', function(req, res){

    //send the index.html file for all requests
    res.sendFile(__dirname + '/index.html');
  
});

server.listen(5000, function(){

    console.log('listening on :5000');
  
});

io.on('connection', (socket) => {
    console.log('a user connected: ' + socket.id);
})

