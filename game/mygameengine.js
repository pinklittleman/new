const socket = io.connect('wss://pinky.uk.to:5000');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.height = innerHeight -5
canvas.width = innerWidth -5

let LEFT, UP, RIGHT, DOWN;

//velocity gets multiplied by (1-friction)
let friction = 0.06;
let clientBalls = {}
let balls = []
let blocks = []

class Ball{
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
        this.player = false;
        balls.push(this)
    }
    draw(){
        ctx.beginPath()
        ctx.rect(this.x,this.y,this.w,this.h)
        ctx.fillStyle = '#343434'
        ctx.fill()
        ctx.closePath();
    }
    update(){

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
    update(){

    }
}

function rect_collision(x1, y1, size1, x2, y2, size2) {
    var bottom1, bottom2, left1, left2, right1, right2, top1, top2;
    left1 = x1 - size1;
    right1 = x1 + size1;
    top1 = y1 - size1;
    bottom1 = y1 + size1;
    left2 = x2 - size2;
    right2 = x2 + size2;
    top2 = y2 - size2;
    bottom2 = y2 + size2;
    return !(left1 > right2 || left2 > right1 || top1 > bottom2 || top2 > bottom1);
};

function keyControl(b){
    document.addEventListener('keydown', function(e){
        if(e.key === 'a'){
            LEFT = true;
        }
        if(e.key === 'w'){
            UP = true;
        }
        if(e.key === 'd'){
            RIGHT = true;
        }
        if(e.key === 's'){
            DOWN = true;
        }
    });
    
    document.addEventListener('keyup', function(e){
        if(e.key === 'a'){
            LEFT = false;
        }
        if(e.key === 'w'){
            UP = false;
        }
        if(e.key === 'd'){
            RIGHT = false;
        }
        if(e.key === 's'){
            DOWN = false;
        }
    });
    
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

function gameloop(){
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)
    balls.forEach((b) => {
        b.draw()
        if(b.player === true){
            keyControl(b)
        }
    });
    blocks.forEach((bl) => {
        bl.draw()
    });
    
    
    console.log(rect_collision(square1.x,square1.y,square1.w*square1.h,Block1.x,Block1.y,Block1.w*Block1.h))

    requestAnimationFrame(gameloop);
}


let square1 = new Ball(200,200,30,30);
let Block1 = new Block(200,400,10,50)
square1.player = true;

requestAnimationFrame(gameloop);