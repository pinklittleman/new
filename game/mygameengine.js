const socket = io.connect('wss://pinky.uk.to:5000');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.height = innerHeight -5
canvas.width = innerWidth -5

let LEFT, UP, RIGHT, DOWN;

//velocity gets multiplied by (1-friction)
let friction = 1.2;
let players = {}
let balls = []
let cars = []
let blocks = []
let keyup
let getout, getin
let newballs = []
let userlist = []

class Car{
    constructor(x,y,w,h){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.vel_x = 0;
        this.vel_y = 0;
        this.acc_x = 0;
        this.acc_y = 0;
        this.acceleration = 1;
        cars.push(this)
    }
    draw(){
        ctx.rect(this.x,this.y,this.w,this.h)
        ctx.fillStyle = '#2b43c2'
        ctx.fill()
        ctx.closePath();
    }
}

class Ball{
    constructor(x,y,w,h,name){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.vel_x = 0;
        this.move = {left:false,up:false,right:false,down:false}
        this.vel_y = 0;
        this.acc_x = 0;
        this.acc_y = 0;
        this.name = name
        this.destruct = false
        this.acceleration = 0.5;
        this.player = false;
        this.colour = '#343434'
        balls.push(this)
    }
    draw(){
        ctx.beginPath()
        ctx.rect(this.x,this.y,this.w,this.h)
        ctx.fillStyle = this.colour
        ctx.fill()
        ctx.closePath();
    }
}

class Block{
    constructor(x,y,w,h){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.vel_x = 0;
        this.vel_y = 0;
        this.acc_x = 0;
        this.acc_y = 0;
        this.destruct = false
        this.acceleration = 1;
        blocks.push(this)
    }
    draw(){
        ctx.beginPath()
        ctx.rect(this.x,this.y,this.w,this.h)
        ctx.fillStyle = '#343434'
        ctx.fill()
        ctx.closePath();
    }
}

function intersects(x1, y1, w1, h1, x2, y2, w2, h2) {
    if (w2 !== Infinity && w1 !== Infinity) {
      w2 += x2;
      w1 += x1;
      if (isNaN(w1) || isNaN(w2) || x2 > w1 || x1 > w2) return false;
    }
    if (y2 !== Infinity && h1 !== Infinity) {
      h2 += y2;
      h1 += y1;
      if (isNaN(h1) || isNaN(y2) || y2 > h1 || y1 > h2) return false;
    }
    return true;
  }

function keyControl(b){
    document.addEventListener('keydown', function(e){
        keyup = false
        if(e.key === 'a'){
            LEFT = true;
            b.move.left = true
        }
        if(e.key === 'w'){
            UP = true;
            b.move.up = true
        }
        if(e.key === 'd'){
            RIGHT = true;
            b.move.right = true
        }
        if(e.key === 's'){
            DOWN = true;
            b.move.down = true
        }
        if(e.key === 't'){
            // square1.destruct = true
            // b.move.left = true
            // console.log(b.move)
            getout = true
        }
        if(e.key === 'e'){
            getin = true
        }
    });
    
    document.addEventListener('keyup', function(e){
        keyup = true
        if(e.key === 'a'){
            LEFT = false;
            b.move.left = false
        }
        if(e.key === 'w'){
            UP = false;
            b.move.up = false
        }
        if(e.key === 'd'){
            RIGHT = false;
            b.move.right = false
        }
        if(e.key === 's'){
            DOWN = false;
            b.move.down = false
        }
        if(e.key === 't'){
            // square1.destruct = true
            // b.move.left = true
            // console.log(b.move)
            getout = false
            // ctx.rotate(60 * Math.PI / 180);
        }
        if(e.key === 'e'){
            getin = false
        }
    });

    if(b.move.left === true || b.move.up === true || b.move.right === true || b.move.down === true){
        socket.emit('movement',socketstuff = {socketID: socket.id,movement: b.move})
    }
    //if true, the accelertion component gets a certain value
    if(LEFT){
        b.acc_x = -b.acceleration;
    }
    if(UP){
        b.acc_y = -b.acceleration;
    }
    if(RIGHT){
        b.acc_x = b.acceleration;
    }
    if(DOWN){
        b.acc_y = b.acceleration;
    }
    if(!UP && !DOWN){
        b.acc_y = 0;
    }
    if(!RIGHT && !LEFT){
        b.acc_x = 0;
    }

    //acceleration values added to the velocity components
    b.vel_x += b.acc_x;
    b.vel_y += b.acc_y;
    //velocity gets multiplied by a number between 0 and 1
    b.vel_x *= 1-friction;
    b.vel_y *= 1-friction;
    //velocity values added to the current x, y position
    b.x += b.vel_x;
    b.y += b.vel_y;

}

socket.on('userlist', yes2)
function yes2(data){
    userlist = data
    addnewusers()
}
socket.on('movementup',yes)
function yes(data){
    // console.log(data)
    players = data
    updateplayers(data)
}

function addnewusers(){
    for(i in userlist){
        if(userlist[i] !== socket.id){
            i = new Ball(100,100,30,30,userlist[i])
        }
    }
}

function updateplayers(data){
//     for(let i in players){
//         users++
//         console.log(users)
//         if (players.hasOwnProperty(i)) {
//             // console.log(i + " -> " + JSON.stringify(players[i].movement));
//             if(players[i].socketID !== socket.id){
//                 socket.id = new Ball(200,300,30,30)
//             }
//         }
//     }
    for(i in balls){
        if(balls[i].name !== undefined){
            // console.log(balls[i])
            if(data.movement.left){
                balls[i].vel_x = 8
            }
        }
    }


}

function gameloop(){
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)
    balls.forEach((b) => {
        b.draw()
        if(b.player === true){
            keyControl(b)
        }
        if(b.destruct === true){
            pos = balls.indexOf(b)
            balls.splice(pos,pos+1)
        }
        if(intersects(b.x,b.y,b.w,b.h,car1.x,car1.y,car1.w,car1.h) === true ){
            // console.log('touching car press e to enter')
            b.x = car1.x
            b.y = car1.y
            b.h = 70
            b.w = 50
            b.colour = '#424242'
            car1.vel_x = b.vel_x
            car1.vel_y = b.vel_y
            car1.x += car1.vel_x;
            car1.y += car1.vel_y;
            if(getout){
                // console.log('getout')
                b.x += 100
                b.y += 50
                b.h = 30
                b.w = 30
                b.colour = '#343434'
            }
        }
    });
    blocks.forEach((bl) => {
        bl.draw()
    });
    cars.forEach((car) => {
        car.draw()
    })

    // console.log(intersects(square1.x,square1.y,square1.w,square1.h,Block1.x,Block1.y,Block1.w,Block1.h))

    if(intersects(square1.x,square1.y,square1.w,square1.h,Block1.x,Block1.y,Block1.w,Block1.h) === true){
        square1.vel_x = 1
    }
    if(intersects(square1.x,square1.y,square1.w,square1.h,Block2.x,Block2.y,Block2.w,Block2.h) === true){
        square1.vel_y = 1
    }
    if(intersects(square1.x,square1.y,square1.w,square1.h,Block3.x,Block3.y,Block3.w,Block3.h) === true){
        square1.vel_x = -1
    }
    if(intersects(square1.x,square1.y,square1.w,square1.h,Block4.x,Block4.y,Block4.w,Block4.h) === true){
        square1.vel_y = -1
    }

    if(intersects(car1.x,car1.y,car1.w,car1.h,Block1.x,Block1.y,Block1.w,Block1.h) === true){
        car1.vel_x = 1
    }
    if(intersects(car1.x,car1.y,car1.w,car1.h,Block2.x,Block2.y,Block2.w,Block2.h) === true){
        car1.vel_y = 1
    }
    if(intersects(car1.x,car1.y,car1.w,car1.h,Block3.x,Block3.y,Block3.w,Block3.h) === true){
        car1.vel_x = -1
    }
    if(intersects(car1.x,car1.y,car1.w,car1.h,Block4.x,Block4.y,Block4.w,Block4.h) === true){
        car1.vel_y = -1
    }

    requestAnimationFrame(gameloop);
}

let square1 = new Ball(200,200,30,30,socket.id);
let Block1 = new Block(0,0,10,1080)
let Block2 = new Block(0,0,1920,10)
let Block3 = new Block(canvas.width-5,0,10,1080)
let Block4 = new Block(0,canvas.height-5,1920,10)
let car1 = new Car(300,300,50,70)
square1.player = true;

requestAnimationFrame(gameloop);
