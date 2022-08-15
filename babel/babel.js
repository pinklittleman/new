
let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

let x
let y 
let players = []

class Player{
    constructor(x,y,size,color){
        this.x = x
        this.y = y
        this.size = size
        this.color =  color
    }
    update(){
        this.x = x
        this.y = y
    }
}

function animate(){
    requestAnimationFrame(animate)
    // ctx.clearRect(0, 0, canvas.width, canvas.height)
    players.forEach((player)=>{
        player.update()
        ctx.fillRect(x,y,10,10)
    })
}



addEventListener('mousemove', (event) => {
    players.push(new Player(event.clientX,event.clientY,5,'red'))

    x = event.clientX
    y = event.clientY

    console.log(event.clientX)
})
