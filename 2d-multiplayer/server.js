// Minimal amount of secure websocket server
var fs = require('fs');

// read ssl certificate
var privateKey = fs.readFileSync('/home/pink/ssl-cert/privkey.pem', 'utf8');
var certificate = fs.readFileSync('/home/pink/ssl-cert/fullchain.pem', 'utf8');

var credentials = { key: privateKey, cert: certificate };
var https = require('https');

//pass in your credentials to create an https server
var httpsServer = https.createServer(credentials);
httpsServer.listen(5000);

var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({
    server: httpsServer
});

var stuff

wss.on('connection', function connection(ws) {
    ws.on('message2', function incoming(message2) {
        console.log('received: %s', message2);
        ws.send('reply from server : ' + stuff)
    });

    ws.send('something');
});