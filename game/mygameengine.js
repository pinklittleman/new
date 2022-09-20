let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

canvas.height = innerHeight
canvas.width = innerWidth

function drawball(x,y,r){
    ctx.beginPath()
    ctx.arc(x,y,r,0,2*Math.PI)
    ctx.fillStyle = '#c7ffbf'
    ctx.stroke()
    ctx.fill()
}

document.addEventListener('keydown', function(e){
    console.log(e)
    if(e.key === 'w'){
        console.log('up')
    }
})

drawball(100,100,50)