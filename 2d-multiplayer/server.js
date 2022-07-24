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

let counter2 = []
let counting2 = {}
let counter = 5

io.on('connection', (socket) => {

    // log the user that has connected and their socketID
    console.log('a user connected: ' + socket.id);
    users.push(socket.id)
    console.log(users)
    counter = 5
    for(i in users){
        console.log('hello: ', users[i])
        counting2 = {
            socketID:users[i],
            countID:counter,
        }
        counter2.push(counting2)
        socket.emit('test', counting2)
        console.log(counting2)
        counter++
        i++
    }


    setInterval(() => {
        socket.emit('update',users)
        socket.emit('update2',counter2)
    }, 1000);

    socket.on('disconnect', () => {

        console.log('leaving: '+socket.id)
        var pos = users.indexOf(socket.id)
        users.splice(pos,pos+1)
        console.log(users)
        counter - 1
        for(i in counter2){
            if(counter2[i].socketID === socket.id){
                console.log(counter[i])
                counter2.splice(counter2[i],counter2[i]+1)
            }
        }
        console.log(counter2)
    })

})