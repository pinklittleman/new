// Minimal amount of secure websocket server
var fs = require('fs');
var app = require('express')();
// read ssl certificate
var privateKey = fs.readFileSync('/home/pink/ssl-cert/privkey.pem', 'utf8');
var certificate = fs.readFileSync('/home/pink/ssl-cert/fullchain.pem', 'utf8');

var credentials = { key: privateKey, cert: certificate};
var https = require('https')

let users = []
var roomnum = 1;

//pass in your credentials to create an https server
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(5000);


var io = require('socket.io')(httpsServer);

app.get('/', function(req, res){
    //send the index.html file for all requests
    res.sendFile(__dirname + '/index.html');
    
});

io.on('connection', (socket) => {
    if(users.length % 2 === 0 && users.length !== 0){
        console.log('even')
        roomnum = roomnum + 1
        console.log(roomnum)
    }
    else{
        console.log('no new room')
    }
    socket.join("room-"+roomnum);
    // log the user that has connected and their socketID
    io.sockets.in("room-"+roomnum).emit('connectToRoom', "You are in room no. "+roomnum);
    console.log('a user connected: ' + socket.id);
    users.push(socket.id)
    console.log(users)

    socket.on('cords', ball)
    
    function ball(data){
        socket.broadcast.emit('newball', data)
    }

    socket.on('disconnect', () => {
        console.log('leaving: '+socket.id)
        var pos = users.indexOf(socket.id)
        users.splice(pos,pos+1)
        console.log(users)
        roomnum = roomnum - 1
        console.log(roomnum)
    })

})