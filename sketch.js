var enemyindicator, base1, enemy1, fakeenemy, player, enemy2, lightblock, enemyindicatorimg, playerimg, roof,
roofenemy1, rooflightblock, finish, collideno = 0, invisiblebase;
var playbutton, howtoplay, hidder;
var gameState = "menu";

//lucid

function preload(){
  enemyindicatorimg = loadImage('sprites/light.png');
  playerimg = loadImage('sprites/player.png')
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  hidder = createSprite(width/2,height/2,width,height);
  hidder.visible = false;
  hidder.shapeColor = rgb(0,0,0)
   
  playbutton = createSprite(width/2, height/2-40, 80, 40);

  howtoplay = createSprite(width/2, height/2+60, 200, 40)

  base1 = createSprite(windowWidth/2, windowHeight-20, windowWidth, 20);
  base1.shapeColor = (0,0,0);
  
  roof = createSprite(windowWidth/2, windowHeight/2, windowWidth, 20);
  roof.shapeColor = rgb(0,0,0)

  player = createSprite(20, base1.y-10, 20, 20);
  player.addImage(playerimg);
  player.scale = 0.05;

  enemyindicator = createSprite(player.x, player.y-175, 40, 10);
  enemyindicator.addImage(enemyindicatorimg);

  enemy1 = createSprite(windowWidth/2, base1.y-10, 40, 40);
  enemy1.shapeColor = rgb(0,0,0);
  enemy1.scale = 2;

  roofenemy1 = createSprite(enemy1.x, roof.y+20, 40, 40);
  roofenemy1.shapeColor = rgb(0,0,0);
  roofenemy1.scale = 2;
 
  enemy2 = createSprite(enemy1.x+20, base1.y-20, 40, 60);
  enemy2.shapeColor = rgb(0,0,0);
  enemy2.scale = 2;

  enemy3 = createSprite(enemy1.x+40, base1.y-10, 40, 40);
  enemy3.shapeColor = rgb(0,0,0);
  enemy3.rotation = 45;
  enemy3.scale = 2;
  
  fakeenemy = createSprite(enemy1.x, enemyindicator.y, 50, enemy1.height);
  fakeenemy.visible = false;

  lightblock = createSprite(enemyindicator.x, base1.y+20, enemyindicator.width+75, base1.height+20);
  lightblock.shapeColor = rgb(20, 20, 20);

  rooflightblock = createSprite(enemyindicator.x, roof.y, enemyindicator.width+75, roof.height);
  rooflightblock.shapeColor =rgb(20,20,20);

}

function draw() {
  background(0);
  camera.position.x = windowWidth/2;
  camera.position.y = windowHeight/2;
  drawSprites();

  if(gameState === "menu"){
    visibleingame(false);
    visiblemenu(true);
   
    enemyindicator.visible = false;
    if(mousePressedOver(playbutton)){
      gameState = "lvl1"
    }
  }
  else if(gameState === "lvl1"){ 
    visibleingame(true);
    visiblemenu(false);
  
    enemyindicator.visible = true;

    lightblock.x = enemyindicator.x;
    rooflightblock.x = enemyindicator.x;

    if(keyIsDown(13) && enemyindicator.x<850){
      enemyindicator.velocityX = 5;
    }

    if(enemyindicator.x > windowWidth){
      player.velocityX = +10
    }

    if(keyIsDown(32) && collideno !== 0 && enemyindicator.x<850){
      player.velocityY = -12;
    }
    else {
      player.velocityY = player.velocityY + 0.5
    }

    if(player.collide(base1) === true){
      collideno = 1;
    }
    else {
      collideno = 0;
    }
  
    enemydist(fakeenemy, enemy1);
    enemydist(fakeenemy, roofenemy1);
    enemydist(fakeenemy, enemy2);
    enemydist(fakeenemy, enemy3);

    player.collide(base1);

    if(player.collide(enemy1||enemy2||enemy3||roofenemy1)){
      gameState = "gameover"
    }

    if(player.x >= 1000){
      gameState = "lvl2"
    }

  }
  else if(gameState === "gameover"){
  visibleingame(false);
  visiblemenu(false);
  textSize(35);
  textFont("Geiorgia");
  fill("white");
  text("GAME OVER", windowWidth/2-100, windowHeight/2);
  }

  
  if(gameState === "menu"){
    textSize(35);
    textFont("Geiorgia");
    fill("white");
    text('Play', playbutton.x-30, playbutton.y+10);
    text('How', howtoplay.x-95, howtoplay.y+10);
    text('To', howtoplay.x-15, howtoplay.y+10);
    text('Play', howtoplay.x+35, howtoplay.y+10);
  }
}

function enemydist(fenemy, normenemy){
  if(enemyindicator.isTouching(fenemy)&&enemyindicator.x<fenemy.x){
    var dist = (enemyindicator.x+20)-fenemy.x;
    var visibilitynum = (1-(-((dist*4)/100)))*10*8.7;
    if(visibilitynum > 87){
      visibilitynum = 87;
    }
    normenemy.tint = (0,0,0,visibilitynum)
  }
  if(enemyindicator.isTouching(fenemy)===false){
    normenemy.tint = (0,0,0,0)
  }
}

function visibleingame(trueorfalse){
  enemy1.visible = trueorfalse;
  enemy2.visible = trueorfalse;
  enemy3.visible = trueorfalse;
  roofenemy1.visible = trueorfalse
  base1.visible = trueorfalse;
  player.visible = trueorfalse;
  lightblock.visible = trueorfalse;
  roof.visible = trueorfalse;
  rooflightblock.visible = trueorfalse
}

function visiblemenu(trueorfalse){
  playbutton.visible = trueorfalse;
  howtoplay.visible = trueorfalse;
  hidder.visible = trueorfalse;
}
