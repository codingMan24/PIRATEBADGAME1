const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body
var world;
var engine
var backgroundImage;
var towerImage;
var tower;
var ground;

function preload() {
    backgroundImage = loadImage('assets/background.gif')
    towerImage = loadImage('assets/tower.png')
}
function setup() {
    createCanvas(1200,600)
    engine = Engine.create();
    world = engine.world
    ground = Bodies.rectangle(600,600,1200,10,{isStatic:true});
    World.add(world,ground)
    tower = Bodies.rectangle(0,150,100,100,{isStatic:true})
    World.add(world,tower)
}

function draw() {
    Engine.update(engine);
    background('lightgray')
    image(backgroundImage,0,0,1200,600)
    push()
    rectMode(CENTER)
    image(towerImage,tower.position.x,tower.position.y,230,350)
    pop()
    push()
    fill('green')
    rectMode(CENTER)
    rect(ground.position.x,ground.position.y,1200,10);
    pop()
}
