var fs = require('fs');
var app = require('express')();
// read ssl certificate
var privateKey = fs.readFileSync('/home/pink/ssl-cert/privkey.pem', 'utf8');
var certificate = fs.readFileSync('/home/pink/ssl-cert/fullchain.pem', 'utf8');

var credentials = { key: privateKey, cert: certificate};
var https = require('https')

let users = []
let players = {}

//pass in your credentials to create an https server
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(5000);


var io = require('socket.io')(httpsServer);

app.get('/', function(req, res){
    //send the index.html file for all requests
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    users.push(socket.id)
    console.log(users)

    socket.on('cords', data => {
        clientx = data.x
        clienty = data.y
        playerdata = {
            socketId:socket.id,
            x:data.x,
            y:data.y
        }
        players[socket.id] = playerdata
        console.log(players)
        io.emit('updateplayers',players)
    })

    socket.on('left', move)
    socket.on('up', move2)
    socket.on('right',move3)
    socket.on('down',move4)

    function move(){
        playerdata = {
            socketId:socket.id,
            x:clientx,
            y:clienty,
            left: true,
            up: false,
            right:false,
            down:false
        }
        io.emit('nleft',playerdata)
    }
    function move2(){

    }
    function move3(){

    }
    function move4(){

    }


    socket.on('disconnect', () => {
        delete players[socket.id]
        io.emit('updateplayers',players)
    })

})
