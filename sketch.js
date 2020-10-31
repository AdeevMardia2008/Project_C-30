const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var slingShot;
var block1,block2,block3,block4,block5,block6,block7,block8;
var polygon;
var box1,box2;

function setup()
{
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    block1 = new Block(330,235,30,40);
    block2 = new Block(360,235,30,40);
    block3 = new Block(390,235,30,40);
    block4 = new Block(420,235,30,40);
    block5 = new Block(450,235,30,40);
    block6 = new Block(360,195,30,40);
    block7 = new Block(390,195,30,40);
    block8 = new Block(420,195,30,40);
    block9 = new Block(390,155,30,40);

    box1 = new Box(375,220,110,14);

    polygon = new SlingShot(200,300,50,50);
    
    ground = new Ground(400,height,800,20);
    slingshot = new SlingShot(this.polyogon,{x:100, y:200});
}

function draw(){
    background("black");
    Engine.update(engine);

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

    ground.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if (keyCode===32){
        slingshot.attach(this.polygon);
    }
}