let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

canvas.height = innerHeight
canvas.width = innerWidth

let x = 100
let y = 100

function drawball(x,y,r){
    ctx.beginPath()
    ctx.arc(x,y,r,0,2*Math.PI)
    ctx.fillStyle = '#c7ffbf'
    ctx.stroke()
    ctx.fill()
}

document.addEventListener('keydown', function(e){
    if(e.key === 'w'){
        y--
    }
    if(e.key === 'a'){
        x--
    }
    if(e.key === 's'){
        y++
    }
    if(e.key === 'd'){
        x++
    }
})

function animate(){
    requestAnimationFrame(animate)
    ctx.clearRect(0,0, canvas.width, canvas.height)
    drawball(x,y,50)

}

animate()