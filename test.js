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
            showAngleIndicator: true,
            showCollisions: true,
            showVelocity: true
        }
    });

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    var group = Body.nextGroup(true);
        
    // var ropeA = Composites.stack(100, 50, 8, 1, 10, 10, function(x, y) {
    //     return Bodies.rectangle(x, y, 50, 20, { collisionFilter: { group: group } });
    // });
    
    // Composites.chain(ropeA, 0.5, 0, -0.5, 0, { stiffness: 0.8, length: 2, render: { type: 'line' } });
    // Composite.add(ropeA, Constraint.create({ 
    //     bodyB: ropeA.bodies[0],
    //     pointB: { x: -25, y: 0 },
    //     pointA: { x: ropeA.bodies[0].position.x, y: ropeA.bodies[0].position.y },
    //     stiffness: 0.5
    // }));
    
    // group = Body.nextGroup(true);
    
    var ropeB = Composites.stack(350, 50, 10, 1, 10, 10, function(x, y) {
        return Bodies.circle(x, y, 20, { collisionFilter: { group: group } });
    });
    
    Composites.chain(ropeB, 0.5, 0, -0.5, 0, { stiffness: 0.8, length: 2, render: { type: 'line' } });
    Composite.add(ropeB, Constraint.create({ 
        bodyB: ropeB.bodies[0],
        pointB: { x: -20, y: 0 },
        pointA: { x: ropeB.bodies[0].position.x, y: ropeB.bodies[0].position.y },
        stiffness: 0.5
    }));
    
    group = Body.nextGroup(true);
    
    Composite.add(world, [
        ropeB,
        Bodies.rectangle(400, 600, 1200, 50.5, { isStatic: true })
    ]);

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
        max: { x: 700, y: 600 }
    });
if (typeof module !== 'undefined') {
    module.exports = Example.chains;
}