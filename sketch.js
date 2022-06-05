var bg,bgImg;
var player, shooterImg, shooter_shooting;
var simg
var bullets
var bullet_g
function preload(){
  
  shooterImg = loadImage("assets/robo.png")
  shooter_shooting = loadImage("assets/robos.png")

  bgImg = loadImage("assets/island.jpg")
  simg=loadImage("assets/sold.png")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
 // bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
//bg.addImage(bgImg)
//bg.scale = 3;
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-240, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.6
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)
   soldGroup=new Group()
bullet_g=new Group()

}

function draw() {
  background(bgImg); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 bullet=createSprite(displayWidth-1150, player.y-30,20,10)
 bullet.velocityX=20
  player.addImage(shooter_shooting)
 player.scale=1.1
 bullet_g.add(bullet)
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
  player.scale=0.6
}

if(soldGroup.isTouching(bullet_g)){
  for(var i=0;i<soldGroup.length;i++){
    if(soldGroup[i].isTouching(bullet_g)){
      soldGroup[i].destroy()
      bullet_g.destroyEach()
    }
  }
}


if(soldGroup.isTouching(player)){
  for(var i=0;i<soldGroup.length;i++){
    if(soldGroup[i].isTouching(player)){
      soldGroup[i].destroy()
    }
  }
}
anemy()
drawSprites();

}
function anemy(){
  if(frameCount%50===0){
  
    sold=createSprite(random(1000,1500),random(600,700),40,40)
    sold.addImage(simg)
    sold.scale=0.4
sold.velocityX=-3
soldGroup.add(sold)
  }

}