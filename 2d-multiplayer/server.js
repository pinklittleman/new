// Minimal amount of secure websocket server
var fs = require('fs');
var app = require('express')();
// read ssl certificate
var privateKey = fs.readFileSync('/home/pink/ssl-cert/privkey.pem', 'utf8');
var certificate = fs.readFileSync('/home/pink/ssl-cert/fullchain.pem', 'utf8');

var credentials = { key: privateKey, cert: certificate};
var https = require('https')

let user = []

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
    socket.emit('ID', socket.id)
    user.push(socket.id)
    console.log(user)
    


    socket.on('video', sendingstuff)

    function sendingstuff(data){
        console.log('send function called')
        socket.emit('outcam', data)
    }

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