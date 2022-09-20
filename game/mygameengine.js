let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

canvas.height = innerHeight
canvas.width = innerWidth

let LEFT, RIGHT, UP, DOWN

class Ball{
    constructor(x,y,r){
        this.x = x
        this.y = y
        this.r = r
    }
    drawball(){
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.r,0,2*Math.PI)
        ctx.fillStyle = '#c7ffbf'
        ctx.stroke()
        ctx.fill()
    }
}

document.addEventListener('keydown', function(e){
    if(e.key === 'w'){
        UP = true
    }
    if(e.key === 'a'){
        LEFT = true
    }
    if(e.key === 's'){
        DOWN = true
    }
    if(e.key === 'd'){
        RIGHT = true
    }
})

document.addEventListener('keyup', function(e){
    if(e.key === 'w'){
        UP = false
    }
    if(e.key === 'a'){
        LEFT = false
    }
    if(e.key === 's'){
        DOWN = false
    }
    if(e.key === 'd'){
        RIGHT = false
    }
})

function move(){
    if(UP === true){
        Ball1.y--
    }
    if(LEFT === true){
        Ball1.x--
    }
    if(DOWN === true){
        Ball1.y++
    }
    if(RIGHT === true){
        Ball1.x++
    }
}

function animate(){
    move()
    requestAnimationFrame(animate)
    ctx.clearRect(0,0, canvas.width, canvas.height)
    Ball1.drawball()

}

let Ball1 = new Ball(200,200,30)

animate()