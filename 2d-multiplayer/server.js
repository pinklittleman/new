var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
//save the cords to an array
let cords = []
let user = []
let count = user.length
//get the index file for connection
app.get('/', function(req, res){
    //send the index.html file for all requests
    res.sendFile(__dirname + '/index.html');    
});
//make the server listen on port 5000 
server.listen(5000, function(){
    console.log('listening on :5000');
});

io.on('connection', (socket) => {
    // log the user that has connected and their socketID
    console.log('a user connected: ' + socket.id);

    socket.on('disconnect', () => {
        console.log('leaving: '+socket.id)
        var pos = user.indexOf(socket.id)
        user.splice(pos,pos+1)
        console.log(user)
    })

});