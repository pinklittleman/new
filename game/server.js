var fs = require('fs');
var app = require('express')();
// read ssl certificate
var privateKey = fs.readFileSync('/home/pink/ssl-cert/privkey.pem', 'utf8');
var certificate = fs.readFileSync('/home/pink/ssl-cert/fullchain.pem', 'utf8');

var credentials = { key: privateKey, cert: certificate};
var https = require('https')

let users = []
let UN
let Sc
let combined

//pass in your credentials to create an https server
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(2000);


var io = require('socket.io')(httpsServer);

app.get('/', function(req, res){
    //send the index.html file for all requests
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    users.push(socket.id)
    console.log(users)    

    socket.on('disconnect', () => {

    })

})