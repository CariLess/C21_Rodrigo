const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var arriba, abajo, derecha, izquierda;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  abajo = new Ground(200,390,400,20);
  derecha = new Ground(390,200, 20, 400);
  izquierda = new Ground(10, 200,20,400);
  arriba = new Ground(200,10,400,20);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);

  arriba.show();
  abajo.show();
  derecha.show();
  izquierda.show();
}

