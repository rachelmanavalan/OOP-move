var box1;
var box2;
function setup() 
{
  createCanvas(400, 400);
  box1=new Box (50,60,200,200,3);
  box2= new Box (300,300,20,20,2);
}

function draw() 
{
  background(220);
  box1.show();
  box2.show();
  box2.move();
}

