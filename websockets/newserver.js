const { countReset } = require('console');
// setup
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
//save the cords to an array
let cords = []
let user = []
//get the index file for connection
app.get('/', function(req, res){
    //send the index.html file for all requests
    res.sendFile(__dirname + '/index.html');
});
//make the server listen on port 5000 
server.listen(5000, function(){
    console.log('listening on :5000');
});
//on connection to the socket do stuff
io.on('connection', (socket) => {
    // send the clients connected 'socket connected'
    socket.emit('hello',"socket connected")
    // log the user that has connected and their socketID
    console.log('a user connected: ' + socket.id);
    user.push(socket.id)
    console.log(user)
    // when the socket recives files from the client about mouse position call the logging function
    socket.on('cordinates', logging)

    // this function adds the cordinates to the array cords
    function logging(data){
        cords.push(data)
        socket.broadcast.emit('newcords',data)
        //console.log(cords) uncomment if you want laggggggg
    }

    socket.on('disconnect', (socket) => {
        console.log('leaving'+socket.id)
    })

})

