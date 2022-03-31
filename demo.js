let Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Composites = Matter.Composites;
	
let engine = Engine.create();
let render = Render.create({
    element: document.body,
    engine: engine,
	options: {
        width: 800,
        height: 600,
        showAngleIndicator: false,
        wireframes: false
    }
});

var norm = 1.2

function cl(){
    console.log(norm)
    norm = 2
    console.log(norm)

}

Matter.Runner.run(engine);
Render.run(render);

let ball= Bodies.circle(500, 0, 20,{
    friction:0.1,
    mass:10,
    render: {
        strokeStyle: '#ffffff',
        sprite: {
            texture: 'circlebeans.png'
        }
    }
})

//                          x    y   width  height
let floor=Bodies.rectangle(0, 600, 3500, 50,{
	isStatic: true
});
//creates a rectangle to act as a roof border
let roof=Bodies.rectangle(100, 0, 3500, 50,{
	isStatic: true
});
//creates a rectangle to act as a left wall border
let lwall=Bodies.rectangle(0, 600, 50, 3500,{
	isStatic: true
});
//creates a rectangle to act as a right wall border
let rwall=Bodies.rectangle(800, 100, 50, 3500,{
    isStatic: true
});
//creates a realy coool stack that has pysics and cool stuff
let stack = Composites.stack(50, 220, 7, 7, 0, 0, function(x, y) {
    
    return Bodies.rectangle(x, y, 50, 50, {
        restitution:norm,
        render: {
            strokeStyle: '#ffffff',
            sprite: {
                texture: 'smollbeans.png'
            }
        }
    });
});

let scales = 0.25
let scales2 = 1.5

let stackk = Composites.stack(600,60,10,10,0,0,function(x,y){
    return Bodies.rectangle(x,y,15,15,{restitution:norm})
})
//adds all defined shapes to the world
World.add(engine.world, [stack, stackk, floor, roof, lwall, rwall, ball]);

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
        // dddddMatter.Body.rotate(ball, 360)
        // ball.restitution=1.2;
        // Matter.Body.rotate(stack, 90)
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

}

// if(ball.position.x > 500){
//     alert("ball moved")
// }
// while(true){
//     console.log(ball.position.x)
// }
setInterval(() => {
    // if(ball.position.x > 500){
    //     alert("no satisfying cubes for you")
    // }
    // console.log(ball.position.x +"  and  "+ ball.position.y)
    if(ball.position.y > 560 || ball.position.y < 30){
        setTimeout(() => {
            Matter.Body.setStatic(ball,false)
            Matter.Body.set(ball,"position",{x:500,y:500})
        }, 250);
        Matter.Body.setStatic(ball,true)
    }
}, 500);

let world = engine.world;
let Mouse= Matter.Mouse;
let MouseConstraint=Matter.MouseConstraint;
let mouse = Mouse.create(render.canvas);
let mouseConstraint = MouseConstraint.create(engine, {mouse: mouse});
World.add(world, mouseConstraint);

World.add(engine.world, [mouseConstraint])

function myFunction2(event){
    if(event.key === "h"){
        for(let i = 0; i <5; i++){
            console.log(ball)
        }
    }
}