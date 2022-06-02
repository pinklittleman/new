const socket = io('/')
const myPeer = new Peer(undefined, {
    host: '/',
    port: '3001'
})

myPeer.on('open', id =>{
    socket.emit('join-room', ROOM_ID, id)
})

socket.on('userconnected', userId => {
    console.log('user connected: ' + userId )
})