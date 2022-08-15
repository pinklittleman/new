
let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

let x = 0
let y = 0
let players = []

class Player{
    constructor(x,y,size,color,velocity){
        this.x = x
        this.y = y
        this.size = size
        this.color =  color
        this.velocity = velocity
    }
    update(){
        this.draw()
        this.x = x
        this.y = y
    }
}

function animate(){
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    players.forEach((player)=>{
        player.update()
    })
}



addEventListener('mousemove', (event) => {
    players.push(new Player(event.clientX,event.clientY,5,'red'))

    x = event.clientX
    y = event.clientY

    console.log(event.clientX)
})
