let LEFT, RIGHT, UP, WJUMP, doublejump = 0, collidingL = false, collidingR = false, crouch = false
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Body = Matter.Body,
    Composite = Matter.Composite,
    Composites = Matter.Composites,
    Query = Matter.Query,
    Constraint = Matter.Constraint,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Events = Matter.Events,
Bodies = Matter.Bodies;

let engine = Engine.create();
let render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 800,
        height: 600,
        wireframes: false,
        // showAngleIndicator: true
    },
});

Matter.Runner.run(engine);
Render.run(render);

let isCrouched = false;
let floorColl = Body.nextGroup(true);
let bottom = Bodies.rectangle(0, 600, 3500, 50,{isStatic: true, friction: 0.001})
let topw = Bodies.rectangle(100, 0, 3500, 50,{isStatic: true})
let left = Bodies.rectangle(0, 600, 50, 3500,{isStatic: true})
let right = Bodies.rectangle(800, 100, 50, 3500,{isStatic: true})
let player = Bodies.rectangle(400,560,30,30, {friction: 0.0001})
let enemy = Bodies.rectangle(800,560,20,20,{collisionFilter: { group: floorColl }})

Composite.add(engine.world,[bottom,topw,left,right,player,enemy])


function mainloop(){

    player.render.fillStyle = "#ffffba" 

    if((Matter.Collision.collides(player, right) != null)){
        collidingR = true
    }
    else{
        collidingR = false
    }

    if((Matter.Collision.collides(player, left) != null)){
        collidingL = true
    }
    else{
        collidingL = false
    }

    if(collidingR){
        Matter.Body.setVelocity(player, {x:0.75,y:-0.01})
    }
    if(collidingL){
        Matter.Body.setVelocity(player, {x:-0.75,y:-0.01})
    }

    if(LEFT && !collidingL){
        Matter.Body.setVelocity(player, {x:-4,y:player.velocity.y})
    }
    if(RIGHT && !collidingR){
        Matter.Body.setVelocity(player, {x:4,y:player.velocity.y})
    }
    if(WJUMP === true){
        if(collidingL){
            Matter.Body.setVelocity(player, {x:player.velocity.x+6,y:player.velocity.y})
            setTimeout(() => {
                Matter.Body.setVelocity(player, {x:player.velocity.x,y:-3})
            }, 50)
        }
        if(collidingR){
            Matter.Body.setVelocity(player, {x:player.velocity.x-6,y:player.velocity.y})
            setTimeout(() => {
                Matter.Body.setVelocity(player, {x:player.velocity.x,y:-3})
            }, 50);
        }
        
    }
    if(UP === true){
        if(Matter.Collision.collides(player, bottom) != null || doublejump <= 1){
            Matter.Body.setVelocity(player, {x:player.velocity.x,y:-8})
            doublejump++
        }
    }

    if((Matter.Collision.collides(player, bottom) != null)){
        doublejump = 0
    }

    if(crouch){
        if(!isCrouched){
            Matter.Body.scale(player, 1, 0.5,{x:player.position.x,y:player.position.y+10})
            isCrouched = true;
        }
    }
    else if(isCrouched){
        Matter.Body.scale(player, 1, 2)
        isCrouched = false;
    }

    requestAnimationFrame(mainloop)
}

document.onkeydown = function(e){

    if(e.key === "Control"){
        crouch = true
    }
    if(e.key === "w"){
        
    }
    if(e.key === "a"){
        LEFT = true
    }
    if(e.key === "d"){
        RIGHT = true
    }
    if(e.key === " "){
        WJUMP = true
        UP = true
    }
}


document.onkeyup = function(e){

    if(e.key === "Control"){
        crouch = false
    }
    if(e.key === "w"){
        
    }
    if(e.key === "a"){
        LEFT = false
    }
    if(e.key === "d"){
        RIGHT = false
    }
    if(e.key === " "){
        WJUMP = false
        UP = false
    }
}


requestAnimationFrame(mainloop)