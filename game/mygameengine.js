let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

canvas.height = innerHeight
canvas.width = innerWidth

let x = 100
let y = 100

let LEFT, RIGHT, UP, DOWN

function drawball(x,y,r){
    ctx.beginPath()
    ctx.arc(x,y,r,0,2*Math.PI)
    ctx.fillStyle = '#c7ffbf'
    ctx.stroke()
    ctx.fill()
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

function move(){
    if(UP === true){
        y++
    }
    if(LEFT === true){
        x--
    }
    if(DOWN === true){
        y--
    }
    if(RIGHT === true){
        x++
    }
}

function animate(){
    requestAnimationFrame(animate)
    ctx.clearRect(0,0, canvas.width, canvas.height)
    drawball(x,y,50)

}

animate()