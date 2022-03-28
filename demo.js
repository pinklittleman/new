
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composites = Matter.Composites,
    Common = Matter.Common,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Composite = Matter.Composite,
    Bodies = Matter.Bodies;
// create engine
var engine = Engine.create(),
    world = engine.world;
// create renderer
var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 800,
        height: 600,
        showAngleIndicator: false,
        wireframes: false
    }
});
Render.run(render);
// create runner
var runner = Runner.create();
Runner.run(runner, engine);
// add bodies
var offset = 10,
    options = { 
        isStatic: true
    };
world.bodies = [];
// these static walls will not be rendered in this sprites example, see options
Composite.add(world, [
    Bodies.rectangle(400, -offset, 800.5 + 2 * offset, 50.5, options),
    Bodies.rectangle(400, 600 + offset, 800.5 + 2 * offset, 50.5, options),
    Bodies.rectangle(800 + offset, 300, 50.5, 600.5 + 2 * offset, options),
    Bodies.rectangle(-offset, 300, 50.5, 600.5 + 2 * offset, options)
]);

// var cloth = Example.cloth.cloth(200, 200, 20, 12, 5, 5, false, 8);
// for (var i = 0; i < 20; i++) {
//     cloth.bodies[i].isStatic = true;
// }

var stack = Composites.stack(30, 10, 10, 10, 0, 0, function(x, y) {
    
    return Bodies.rectangle(x, y, 50, 50, {
        render: {
            strokeStyle: '#ffffff',
            sprite: {
                texture: 'smollbeans.png'
            }
        }
    });
    
    
});
Composite.add(world, stack);
// add mouse control
var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
                visible: false
            }
        }
    });
Composite.add(world, mouseConstraint);
// keep the mouse in sync with rendering
render.mouse = mouse;
// fit the render viewport to the scene
Render.lookAt(render, {
    min: { x: 0, y: 0 },
    max: { x: 800, y: 600 }
});
// context for MatterTools.Demo

Example.sprites.title = 'Sprites';
Example.sprites.for = '>=0.14.2';

if (typeof module !== 'undefined') {
    module.exports = Example.sprites;
}