// Minimal amount of secure websocket server
var fs = require('fs');

// read ssl certificate
var privateKey = fs.readFileSync('/home/pink/ssl-cert/privkey.pem', 'utf8');
var certificate = fs.readFileSync('/home/pink/ssl-cert/fullchain.pem', 'utf8');

// var credentials = { key: privateKey, cert: certificate, cors:{origin: ['https://pinky.uk.to/2d-multiplayer/index.html']} };
// var https = require('https');

// //pass in your credentials to create an https server
// var httpsServer = https.createServer(credentials);
// httpsServer.listen(5000);

var io = require('socket.io')(httpsServer);

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