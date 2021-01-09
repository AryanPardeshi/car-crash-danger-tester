var bulletRightEdge,wallLeftEdge;
var bullet,wall,thikness,speed,width;

function setup() {
  createCanvas(1600,400);
  
  wallLeftEdge=createSprite(1200,200,1,1);
  thikness=random(22,83);
  speed=random(55,90);
  width=random(400,1500);
  wall=createSprite(1200,200,thikness,400);
  wall.shapeColor=color(80,80,80);
  bullet=createSprite(50, 200, 50, 20);
  bullet.shapeColor=color(255, 255, 255);
  bullet.velocityX=speed;
  bulletRightEdge=createSprite(1200,200,20,4);
 
}

function draw() {
  background(0,0,0);  
  if (isCollided(bullet,wall)) 
  {
    bullet.velocityX=0;
    var deformation=0.5*width*speed*speed/(thikness*thikness*thikness);
    if (deformation>10) 
    {
      wall.shapeColor=color(255,0,0);
    }
    
    if(deformation<10) 
    {
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}

function isCollided(lbullet,lwall) 
{
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if (bulletRightEdge>=wallLeftEdge)
{
  return true;
}
return false;
}