// Minimal amount of secure websocket server
var fs = require('fs');
var app = require('express')();
// read ssl certificate
var privateKey = fs.readFileSync('/home/pink/ssl-cert/privkey.pem', 'utf8');
var certificate = fs.readFileSync('/home/pink/ssl-cert/fullchain.pem', 'utf8');

var credentials = { key: privateKey, cert: certificate};
var https = require('https')

let users = []

//pass in your credentials to create an https server
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(5000);


var io = require('socket.io')(httpsServer);

app.get('/', function(req, res){
    //send the index.html file for all requests
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    // log the user that has connected and their socketID
    console.log('a user connected: ' + socket.id);
    users.push(socket.id)
    console.log(users)

    socket.on('jump', jumpin)
    socket.on('crouch', crouchin)

    function crouchin() {
        socket.broadcast.emit('crouching')
    }

    function jumpin(){
        console.log('jumped')
        socket.broadcast.emit('pog')
    }

    socket.on('disconnect', () => {
        console.log('leaving: '+socket.id)
        var pos = users.indexOf(socket.id)
        users.splice(pos,pos+1)
        console.log(users)
    })

})