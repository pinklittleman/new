const { countReset } = require('console');
// does stuff
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

let cords = []

app.get('/', function(req, res){
    //send the index.html file for all requests
    res.sendFile(__dirname + '/index.html');
});

server.listen(5000, function(){
    console.log('listening on :5000');
});
io.on('connection', (socket) => {
    socket.emit('hello',"socket connected")
    console.log('a user connected: ' + socket.id);
})

socket.on('cordinates', logging)

function logging(data){
    cords.push(data)
    console.log(cords)
}

setInterval(() => {
    
}, 1000);