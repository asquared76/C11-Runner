
function preload()
{
  //pre-load images
  pathImg = loadImage("path.png");
  running = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup()
{
createCanvas(400,400);
  //create sprites here
path = createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 3;
path.scale = 1.2;


runner = createSprite(150, 380, 30, 40);
runner.addAnimation("running", running);
runner.scale = 0.1;

leftBoundary = createSprite(0, 0, 100, 800);
leftBoundary.visible = false;

rightBoundary = createSprite(410, 0, 100, 800);
rightBoundary.visible = false;
}

function draw() 
{
background(0);

path.velocityY = 3;

runner.x = mouseX;


edges = createEdgeSprites();
runner.collide(edges[3]);
runner.collide(leftBoundary);
runner.collide(rightBoundary)


if (path.y > 400)
  {
    path.y = height/2;
  }

drawSprites();
}
