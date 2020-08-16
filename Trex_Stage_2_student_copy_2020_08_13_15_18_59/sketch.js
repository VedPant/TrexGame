var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage, cloudImage, obstacleUNO, obstacleDEUX, obstacleTROIS, obstacleQUATRE, obstacleCINQ, obstacleFINALLY;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage=loadImage("cloud.png");
  
  obstacleUNO=loadImage("obstacle1.png");
  obstacleDEUX=loadImage("obstacle2.png");
  obstacleTROIS=loadImage("obstacle3.png");
  obstacleQUATRE=loadImage("obstacle4.png");
  obstacleCINQ=loadImage("obstacle5.png");
  obstacleFINALLY=loadImage("obstacle6.png");
  
  
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -6;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background("white");
  
  if(keyDown("space")&&trex.y>150) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  spawnCloud();
  
  spawnObstacle();
  
  drawSprites();
}

function spawnCloud(){
 if(frameCount%60==0){
   var cloud=createSprite(600,120,40,10);
   cloud.y=random(80,120);
   cloud.addImage("ITSACLOUD",cloudImage);
   cloud.scale=0.5;
   cloud.velocityX=-3;
   cloud.lifetime=200;
  
   cloud.depth=trex.depth;
   trex.depth=trex.depth+1;
 }  
}  

function spawnObstacle(){
 if(frameCount%60==0){
   var obstacle=createSprite(600,170,20,20);
   var rand=Math.round(random(1,6));
   
   switch(rand){
      case 1: obstacle.addImage(obstacleUNO);
      break;
      case 2: obstacle.addImage(obstacleDEUX);
      break;
      case 3: obstacle.addImage(obstacleTROIS);
      break;
      case 4: obstacle.addImage(obstacleQUATRE);
      break;
      case 5: obstacle.addImage(obstacleCINQ);
      break;
      case 6: obstacle.addImage(obstacleFINALLY);
      break;
      defualt: break;
   }    
   obstacle.scale=0.5
   
   obstacle.velocityX=-6;
   obstacle.lifetime=130;
 }  
}  