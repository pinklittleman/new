var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Body = Matter.Body,
    Composite = Matter.Composite,
    Composites = Matter.Composites,
    Constraint = Matter.Constraint,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Bodies = Matter.Bodies;

    let engine = Engine.create();
    let render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: 800,
            height: 600,
            wireframes: false
        }
    }
);

Matter.Runner.run(engine);
Render.run(render);

// ball body
let ball = Bodies.circle(500,500,20,{
    mass: 5,
    render: {
        strokeStyle: '#ffffff',
        sprite: {
            texture: 'circlebeans.png'
        }
    }
})

// create the mouse constraints 
let mouse = Mouse.create(render.canvas);
let mouseConstraint = MouseConstraint.create(engine, {mouse: mouse});

// make it rain function that adds many circles to the screen
var addCircle = function () {
    return Bodies.circle(Math.random()*800 + 30, 30, Math.random()*10+8,{
        collisionFilter: { group: floorColl },
        render: {
            strokeStyle: '#ffffff'
        }
    });
};

// for the resize
let scales = 0.25
let scales2 = 1.5

// keypress functions
function myFunction(event){
    console.log(event.key)
    if(event.key === " " && ball.isStatic == false){
        Matter.Body.setStatic(ball,true);
    }
    if(event.key === "e"){
        Matter.Body.setStatic(ball,false);
    }
    if(event.key === "ArrowRight"){
        ball.render.sprite.xScale = ball.render.sprite.xScale * scales2;
        ball.render.sprite.yScale = ball.render.sprite.yScale * scales2;
        Matter.Body.scale( ball, scales2, scales2);
    }
    if(event.key === "ArrowLeft"){
        ball.render.sprite.xScale = ball.render.sprite.xScale * scales;
        ball.render.sprite.yScale = ball.render.sprite.yScale * scales;
        Matter.Body.scale( ball, scales, scales);
    }
    if(event.key === "d"){
        console.log(ball.options)
        Matter.Body.setVelocity(ball,{x:5,y:-1});
    }
    if(event.key === "a"){
        console.log(ball.options)
        Matter.Body.setVelocity(ball,{x:-5,y:-1});
    }
    if(event.key === "w"){
        console.log(ball.options)
        Matter.Body.setVelocity(ball,{x:0,y:-5});
    }
    if(event.key === "n"){
        setInterval(() => {
        Composite.add(engine.world, addCircle());
        }, 0.1);
    }
    if(event.key === "h"){
        console.log(ball)
        floorColl = true
    }

}

// groups all the bodies in the stack
group = Body.nextGroup(true);
//adds a group for the floor and rain
floorColl = Body.nextGroup(true);

// make a stack with one row and a collison filter with the rest of the bodies
var ropeC = Composites.stack(200, 50, 11, 1, 10, 10, function(x, y) {
    return Bodies.rectangle(x - 20, 0, 50, 50, { collisionFilter: { group: group },
        render: {
            strokeStyle: '#ffffff',
            sprite: {
                texture: 'smollbeans.png'
            }
        }
    });
});

//create a chain from the ropeC
Composites.chain(ropeC, 0.3, 0, -0.5, 0, { stiffness: 1, length: 0 });
//add the chain and constraint to the world
Composite.add(ropeC, Constraint.create({ 
    bodyB: ropeC.bodies[0],
    pointB: { x: -20, y: 0 },
    pointA: { x: ropeC.bodies[0].position.x, y: ropeC.bodies[0].position.y },
    stiffness: 0.5
}))

// adds a second constraint 
let constraint1 = Constraint.create({ 
    bodyB: ropeC.bodies[10],
    pointB: { x: 20, y: 0 },
    pointA: { x: ropeC.bodies[10].position.x, y: ropeC.bodies[10].position.y },
    stiffness: 0.5
})

//adds a small stack to the right
let stackk = Composites.stack(600,400,10,10,0,0,function(x,y){
    return Bodies.rectangle(x,y,15,15)
})

// add to the world the containing walls and any other bodies
Composite.add(engine.world,[
    ball,
    Bodies.rectangle(0, 600, 3500, 50,{isStatic: true, collisionFilter: { group: floorColl }}),
    Bodies.rectangle(100, 0, 3500, 50,{isStatic: true, collisionFilter: { group: group }}),
    Bodies.rectangle(0, 600, 50, 3500,{isStatic: true}),
    Bodies.rectangle(800, 100, 50, 3500,{isStatic: true}),
    mouseConstraint,
    ropeC,
    constraint1,
    stackk
]);

//check weather the ball is out of bounds and if it is then put it back in bounds
setInterval(() => {
    if(ball.position.y > 560 || ball.position.y < 30){
        setTimeout(() => {
            Matter.Body.setStatic(ball,false)
            Matter.Body.set(ball,"position",{x:500,y:500})
        }, 250);
        Matter.Body.setStatic(ball,true)
    }
}, 500);

