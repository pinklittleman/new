
document.getElementById('hide_id').style.cursor = 'none';

const socket = io.connect('wss://pinky.uk.to:4000');

let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

let x
let y
let play
let players = []

ctx.fillRect(10,10,10,10)

class Player{
    constructor(x,y,size,color){
        this.x = x
        this.y = y
        this.size = size
        this.color =  color
    }
    update(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x,this.y,this.size,this.size)
    }
}

function animate(){
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    players.forEach((player) => {
        player.update()
        var pos = players.indexOf(player)
        players.splice(pos,pos+1)

        
    })
    play = {
        x: x,
        y: y
    }
    socket.emit('test', play)
    ctx.fillRect(x,y,10,10)

}


socket.on('test2', test)

function test(data){
    ctx.fillStyle = 'blue'
    console.log(data)
    ctx.fillRect(data.x,data.y,10,10)
}


addEventListener('mousemove', (event) => {
    players.push(new Player(event.clientX,event.clientY,10,'red'))
    x = event.clientX
    y = event.clientY
})

animate()