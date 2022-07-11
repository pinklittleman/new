// Minimal amount of secure websocket server
var fs = require('fs');
var app = require('express')();
// read ssl certificate
var privateKey = fs.readFileSync('/home/pink/ssl-cert/privkey.pem', 'utf8');
var certificate = fs.readFileSync('/home/pink/ssl-cert/fullchain.pem', 'utf8');

var credentials = { key: privateKey, cert: certificate};
var https = require('https')

let users = []
let count = 4

//pass in your credentials to create an https server
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(5000);


var io = require('socket.io')(httpsServer);

app.get('/', function(req, res){
    //send the index.html file for all requests
    res.sendFile(__dirname + '/index.html');
});

let user

setInterval(() => {
    if(users.length === 0){
        count = 4
    }
}, 1000);

io.on('connection', (socket) => {
    // log the user that has connected and their socketID
    console.log('a user connected: ' + socket.id);
    users.push(socket.id)
    console.log(users)
    setTimeout(() => {
        user = {
            id: socket.id,
            usrId: count
        }
    }, 500);
    count = count + 1
    socket.broadcast.emit('join', user)
    setTimeout(() => {
        socket.emit('join', user)
    }, 500);
    
    setInterval(() => {
        socket.broadcast.emit('users', users)
        setTimeout(() => {
            socket.emit('users', users)
        }, 500);
    }, 1000);

    socket.on('update',sendCordsBack)

    function sendCordsBack(data){
        socket.broadcast.emit('update2',data)  
    }

    socket.on('disconnect', () => {
        console.log('leaving: '+socket.id)
        var pos = users.indexOf(socket.id)
        users.splice(pos,pos+1)
        console.log(users)
        count = count - 1
        socket.broadcast.emit('left', count)
        setTimeout(() => {
            socket.emit('left', count)
        }, 500);
    })

})