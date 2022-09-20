let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

canvas.height = innerHeight
canvas.width = innerWidth

let LEFT, RIGHT, UP, DOWN

const balls = []

class Ball{
    constructor(x,y,r){
        this.x = x
        this.y = y
        this.r = r
        balls.push(this)
    }
    drawball(){
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.r,0,2*Math.PI)
        ctx.fillStyle = '#c7ffbf'
        ctx.stroke()
        ctx.fill()
    }
}

function kontrol(b){
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
    
    if(UP === true){
        b.y--
    }
    if(LEFT === true){
        b.x--
    }
    if(DOWN === true){
        b.y++
    }
    if(RIGHT === true){
        b.x++
    }
}

function animate(){
    requestAnimationFrame(animate)
    ctx.clearRect(0,0, canvas.width, canvas.height)
    kontrol(Ball1)
    Ball1.drawball()

}

let Ball1 = new Ball(200,200,30)

animate()