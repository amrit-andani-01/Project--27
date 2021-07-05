const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var stand1,stand2;
var holder,ball;
var slingShot;
var polygon_img;

function setup() {

  engine  = Engine.create();
  world = engine.world;

  createCanvas(900,400);

  stand1 = new Ground(380,300,270,10);
  stand2 = new Ground(700,200,200,10);

  slingShot = new SlingShot(this.ball,{x:200,y:200});
 
  block1 = new Block(280,275,30,40);  
  block2 = new Block(310,275,30,40);
  block3 = new Block(340,275,30,40);
  block4 = new Block(370,275,30,40);
  block5 = new Block(400,275,30,40);
  block6 = new Block(430,275,30,40);
  block7 = new Block(460,275,30,40);
  block8 = new Block(490,275,30,40);
  block9 = new Block(310,235,30,40);

  block10 = new Block(340,235,30,40);
  block11 = new Block(370,235,30,40);
  block12 = new Block(400,235,30,40);
  block13 = new Block(430,235,30,40);
  block14 = new Block(460,235,30,40);
  block15 = new Block(340,195,30,40);
  block16 = new Block(370,195,30,40);
  block17 = new Block(400,195,30,40);
  block18 = new Block(430,195,30,40);
  block19 = new Block(370,155,30,40);
  block20 = new Block(400,155,30,40);
  block21 = new Block(385,115,30,40);

  block2_1 = new Block(640,175,30,40);
  block2_2 = new Block(670,175,30,40);
  block2_3 = new Block(700,175,30,40);
  block2_4 = new Block(730,175,30,40);
  block2_5 = new Block(760,175,30,40);
  block2_6 = new Block(670,135,30,40);
  block2_7 = new Block(700,135,30,40);
  block2_8 = new Block(730,135,30,40);
  block2_9 = new Block(700,95,30,40);

  ball = Bodies.circle(50,200,20);
  ellipse(ball.position.x,ball.position.y,20);

  World.add(world,ball);

}

function draw() {

  background("white");
  Engine.update(engine);
  
  stand1.display();
  stand2.display();

  slingShot.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  block2_1.display();
  block2_2.display();
  block2_3.display();
  block2_4.display();
  block2_5.display();
  block2_6.display();
  block2_7.display();
  block2_8.display();
  block2_9.display();

}

function mouseDragged() {

  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});

}

function mouseReleased() {

  slingShot.fly();

}