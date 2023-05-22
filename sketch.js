
var PLAY = 1;
var END = 0;
var ball, ballImg;
var goal, goalImg;
var soccerPlayer, soccerPlayerImg;
var goalKeeper, goalKeeperImg;

function preload(){
  ballImg = loadImage("ball.png");
   goalImg = loadImage("goal.png");
   goalKeeperImg = loadImage("goalKeeper.png");
   soccerPlayerImg = loadImage("soccerPlayer.jpeg");
  
}




function setup() {
  createCanvas(600, 500);
  
  ball = createSprite(261,312,50,30);
  ball.addImage("ball",ballImg);
  ball.scale = 0.1
  goal = createSprite(284,70,40,30);
  goal.addImage("goal",goalImg);
  goal.scale = 0.8
  soccerPlayer = createSprite(264,403,40,10);
  soccerPlayer.addImage("soccerPlayer",soccerPlayerImg);
  soccerPlayer.scale = 0.1
  goalKeeper = createSprite(275,92,10,10);
  goalKeeper.addImage("goalKeeper",goalKeeperImg);
  goalKeeper.scale = 0.1
}

function draw() {
  background("lightblue");
  text(mouseX,250,100);
  text(mouseY,250,150);

  if(keyDown("RIGHT_ARROW")){
    soccerPlayer.x+=5
  }
  if(keyDown("LEFT_ARROW")){
    soccerPlayer.x-=5
  }
  if(keyDown("space")){
    ball.velocityY=-12
  }
  drawSprites();
}


