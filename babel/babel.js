
let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

let x
let y 
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
        ctx.fillRect(this.x,this.y,this.size,this.size)
    }
}

function animate(){
    requestAnimationFrame(animate)
    // ctx.clearRect(0, 0, canvas.width, canvas.height)
    players.forEach((player)=>{
        player.update()
    })
}



addEventListener('mousemove', (event) => {
    players.push(new Player(event.clientX,event.clientY,10,'red'))
    console.log(event.clientX)
})

animate()