const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function setup() {
  createCanvas(500,400);
  engine = Engine.create();
  world = engine.world;

  
  brick1 = new Bricks(200,300,350,20);
  brick2 = new Bricks(220,300,350,20);
  brick3 = new Bricks(240,300,350,20);
  brick4 = new Bricks(180,300,350,20);
  brick5 = new Bricks(160,300,350,20);
  brick6 = new Bricks(140,300,350,20);
  brick7 = new Bricks(120,300,350,20);
  brick8 = new Bricks(260,300,350,20);
  brick9 = new Bricks(280,300,350,20);
  brick10 = new Bricks(300,300,350,20);
  brick11 = new Bricks(320,300,350,20);
  brick12 = new Bricks(340,300,350,20);
  brick13 = new Bricks(360,300,350,20);
  brick14 = new Bricks(380,300,350,20);
  brick15 = new Bricks(100,300,350,20);
  brick16 = new Bricks(80,300,450,20);
  brick19 = new Bricks(60,300,450,20);
  brick17 = new Bricks(40,300,450,20);
  brick18 = new Bricks(20,300,450,20);
  brick20 = new Bricks(400,300,350,20);
  brick21 = new Bricks(420,300,450,20);
  brick22 = new Bricks(440,300,450,20);
  brick23 = new Bricks(460,300,450,20);
  brick24 = new Bricks(480,300,450,20);
  brick25 = new Bricks(50,80,10,100);
  brick26 = new Bricks(450,80,10,100);
  brick27 = new Bricks(30,55,40,20);
  brick28 = new Bricks(50,25,20,60);
  brick29 = new Bricks(70,55,40,20);
  brick30 = new Bricks(50,65,20,20);
  brick31 = new Bricks(470,55,40,20);
  brick32 = new Bricks(430,55,40,20);
  brick33 = new Bricks(450,25,20,60);
  brick34 = new Bricks(450,65,20,20);
}

function draw() {
  background(0); 
  brick1.display(); 
  brick2.display();
  brick3.display();
  brick4.display();
  brick5.display();
  brick6.display();
  brick7.display();
  brick8.display();
  brick9.display();
  brick10.display();
  brick11.display();
  brick12.display();
  brick13.display();
  brick14.display();
  brick15.display();
  brick16.display();
  brick17.display();
  brick18.display();
  brick19.display();
  brick20.display();
  brick21.display();
  brick22.display();
  brick23.display();
  brick24.display();
  brick25.display();
  brick26.display();
  brick27.display();
  brick28.display();
  brick29.display();
  brick30.display();
  brick31.display();
  brick32.display();
  brick33.display();
  brick34.display();
  //drawSprites();
}