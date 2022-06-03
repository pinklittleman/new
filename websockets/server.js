const { countReset } = require('console');
// setup
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
    res.sendFile(__dirname + '/Synthwave4.mp3');
    
});
//make the server listen on port 5000 
server.listen(5000, function(){
    console.log('listening on :5000');
});
//on connection to the socket do stuff
io.on('connection', (socket) => {
    // log the user that has connected and their socketID
    console.log('a user connected: ' + socket.id);
    socket.emit('ID', socket.id)
    user.push(socket.id)
    console.log(user)
    // when the socket recives files from the client about mouse position call the logging function
    
    socket.on('cordinates', logging)
    setInterval(() => {
        count =  user.length
        socket.emit('userarray', count)
        // console.log(count)
        socket.emit('userarrayimp', user)
    }, 2000);

    // this function adds the cordinates to the array cords

    function logging(data){
        cords.push(data)
        socket.broadcast.emit('newcords',data)
        //console.log(cords) uncomment if you want laggggggg
    }

    socket.on('disconnect', () => {
        console.log('leaving: '+socket.id)
        var pos = user.indexOf(socket.id)
        user.splice(pos,pos+1)
        console.log(user)
    })

})

