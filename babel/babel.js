
let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

canvas.width = 800
canvas.height = 400

let colours = ['red', 'green', 'blue']
let x = 0
let y = 0


// function poggers(){
    
//     for (let x = 0; x <= 800; x++) {
//         setTimeout(() => {
//             var randColor = colours[Math.floor(Math.random() * colours.length)];
//             ctx.fillStyle = randColor
//             ctx.fillRect(x, 1, 1, 1);
//             if(x === 800){
//                 x = 0
//                 console.log('hollo')
//             }
//         }, 1000);
        
//     }
       
// }

setInterval(() => {
    var randColor = colours[Math.floor(Math.random() * colours.length)];
    ctx.fillStyle = randColor
    ctx.fillRect(x, 1, 1, 1);
    x++
    console.log(x)
}, 100);
