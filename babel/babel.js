let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

canvas.width = 800
canvas.height = 400

ctx.fillStyle = '#F0DB4F';
ctx.strokeStyle = 'red';

function poggers(){
    for (let i = 0; i <= 800; i++) {
        ctx.fillRect(i, 50, 1, 1);
    }
}
