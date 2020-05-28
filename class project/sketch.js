const Engine = Matter.Engine;
const Worl= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ral;

function setup() {

  engine = Engine.create();
  world = engine.worl;

  createCanvas(800,400);
   ral = createSprite(400, 200, 2, 2);   

   
}

function draw() {
  background(0);  


  ral.x = World.mouseX;
  ral.y= World.mouseY;


  console.log("x:"+ral.x);
  console.log("y:"+ral.y);
  drawSprites();
}