let LEFT, RIGHT, UP, WJUMP, doublejump = 0, stopping = false
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

let floorColl = Body.nextGroup(true);
let bottom = Bodies.rectangle(0, 600, 3500, 50,{isStatic: true, friction: 0.001})
let topw = Bodies.rectangle(100, 0, 3500, 50,{isStatic: true})
let left = Bodies.rectangle(0, 600, 50, 3500,{isStatic: true})
let right = Bodies.rectangle(800, 100, 50, 3500,{isStatic: true})
let player = Bodies.rectangle(400,560,30,30, {friction: 0.0001})
let enemy = Bodies.rectangle(800,560,20,20,{collisionFilter: { group: floorColl }})

Composite.add(engine.world,[bottom,topw,left,right,player,enemy])


function mainloop(){
    if(LEFT === true){
        Matter.Body.setVelocity(player, {x:-4,y:player.velocity.y})
    }
    if(RIGHT === true){
        Matter.Body.setVelocity(player, {x:4,y:player.velocity.y})
    }
    if(WJUMP === true){
        if(Matter.Collision.collides(player, left) != null){
            Matter.Body.setVelocity(player, {x:player.velocity.x+6,y:player.velocity.y})
            setTimeout(() => {
                Matter.Body.setVelocity(player, {x:player.velocity.x,y:-3})
                setTimeout(() => {
                    stopping = false
                }, 1000);
            }, 50);
        }
        if(Matter.Collision.collides(player, right) != null){
            Matter.Body.setVelocity(player, {x:player.velocity.x-6,y:player.velocity.y})
            setTimeout(() => {
                Matter.Body.setVelocity(player, {x:player.velocity.x,y:-3})
                setTimeout(() => {
                    stopping = false
                }, 1000);
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
    // if((Matter.Collision.collides(player, left) != null) || (Matter.Collision.collides(player, right) != null)){
    //     doublejump = 1
    // }
    if(stopping === false){
        if((Matter.Collision.collides(player, right) != null)){
            Matter.Body.setVelocity(player, {x:0.75,y:-0.2})
        }
        if((Matter.Collision.collides(player, left) != null)){
            Matter.Body.setVelocity(player, {x:-0.75,y:-0.2})
        }
    }

    requestAnimationFrame(mainloop)
}

document.onkeydown = function(e){
    
    if(e.key === "w"){
        UP = true
    }
    if(e.key === "a"){
        LEFT = true
    }
    if(e.key === "d"){
        RIGHT = true
    }
    if(e.key === " "){
        WJUMP = true
        stopping = true
    }
}


document.onkeyup = function(e){
    
    if(e.key === "w"){
        UP = false
    }
    if(e.key === "a"){
        LEFT = false
    }
    if(e.key === "d"){
        RIGHT = false
    }
    if(e.key === " "){
        WJUMP = false
    }
}


requestAnimationFrame(mainloop)