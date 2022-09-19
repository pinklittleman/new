let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

function animate(){
    requestAnimationFrame(animate)
    console.log('loop')
    canvas.width = innerWidth
    canvas.height = innerHeight
}

animate()