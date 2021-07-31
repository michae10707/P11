var runner, runner_running, edges, runner_collided;
var path,pathImg;
var invisibleboundaries;

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");

  runner_running = loadAnimation("Runner-1.png","Runner-2.png");
  runner_collided = loadAnimation("power.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,180,400,20);
  path.addImage("ground",pathImg);
  path.y = path.height/2;
    path.velocityY = 4;
  
  runner = createSprite(200,160,20,50);
  runner.addAnimation("running", runner_running);
  runner.scale = 0.09;
  
 //invisibleboundaries = createSprite(300,300,50,50);
 // invisibleboundaries.visible =true;


}

function draw() {
  background(0);

  if(  runner.y >= 200) {
        runner.velocityY = -0.05;
      }
      
      runner.velocityY = runner.velocityY + 0.05
     spawnboundary() 
    
//Moving background
  //path=createSprite(200,200);
  //path.addImage(pathImg);
  //path.velocityY =4;
  //path.scale=1.2;
  drawSprites();
//code to reset the background
if(path.y > 400 ){
  path.y = height/2;
}

  
}
function spawnboundary() {
    //write code here to spawn the boundaries
    if (frameCount % 60 === 0) {
    invisibleboundaries= createSprite(100,300,50,50);
    invisibleboundaries.x = Math.round(random(200,400));
    invisibleboundaries.y = Math.round(random(200,400));
    invisibleboundaries.scale = 0.8;
    //invisibleboundaries.velocityY = -3;
      
      
      //assigning lifetime to the variable
  invisibleboundaries.lifetime = 250;
      
      //adjust the depth
  //invisibleboundaries.depth =runner.depth
  runner.depth =runner.depth + 1;
      }
  }