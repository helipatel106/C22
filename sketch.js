const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,item1,item2,item3;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    
    var item1_options={
        isStatic:true
    }
    item1 = Bodies.rectangle(100,200,300,10,item1_options);
    World.add(world,item1);

    var item2_options={
        isStatic:true
    }
    item2 = Bodies.rectangle(50,150,20,20,item2_options);
    World.add(world,item2);

    var item3_options={
        isStatic:false
    }
    item3 = Bodies.circle(25,100,30,item3_options);
    World.add(world,item3);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    rectMode(CENTER);
    rect(item1.position.x,item1.position.y,300,10);
    rectMode(CENTER);
    rect(item2.position.x,item2.position.y,20,20);
    ellipseMode(RADIUS);
    ellipse(item3.position.x,item2.position.y,30);

}