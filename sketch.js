var enemyindicator, ground, enemy1, fakeenemy, player, enemy2, lightblock, enemyindicatorimg, playerimg, roof, base1, base2, base3,
enemy4, finish, enemydepth = 5, jumps = 0, restartbutton, lvlnum = 1, info3, finish, fakeenemy2, fakeenemy3, enemy5, playerdeadimg,
movingenemy, movingenemyimg, box, wall, wall2, talk3;
var playbutton, infobutton, hidder;
var speechbubble, speechbubbleimg;
var gameState = "menu";
var info1 = `
Hey there. I am Lucid. 
I need your help getting out of 
the cave and finding my 
   brother, Gleam.`
var info2 = `
I will guide you through.
I have a crystal which will
light obstacles on your way`
var talk1 = `
Phew. That was tough
could you slow down a
        bit`
var talk2 = `
Ok lets do this again`

//lucid

function preload(){
  enemyindicatorimg = loadImage('sprites/light.png');
  playerimg = loadImage('sprites/player.png');
  speechbubbleimg = loadImage('sprites/SpeechBubble.png');
  playerdeadimg = loadImage('sprites/playerdead.png');
  movingenemyimg = loadImage('sprites/movingenemy.png');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  hidder = createSprite(width/2,height/2,width,height);
  hidder.visible = false;
  hidder.shapeColor = rgb(0,0,0)
   
  playbutton = createSprite(width/2, height/2-40, 100, 40);

  infobutton = createSprite(width/2, height/2+60, 100, 40)

  restartbutton = createSprite(windowWidth/2, windowHeight*3/4);
  restartbutton.visible = false;

  ground = createSprite(windowWidth/2, windowHeight+20, width, 80);
  ground.shapeColor = rgb(52, 73, 94);
  
  roof = createSprite(windowWidth/2, windowHeight/2-150, windowWidth, 100);
  roof.shapeColor = rgb(0,0,0)
  roof.visible = false;

  player = createSprite(40, ground.y-10, 20, 20);
  player.addImage(playerimg);
  player.scale = 0.05;

  enemyindicator = createSprite(player.x, player.y-175, 40, 10);
  enemyindicator.addImage(enemyindicatorimg);

  enemy1 = createSprite(windowWidth/2, ground.y-10, 40, 40);
  enemy1.shapeColor = rgb(0,0,0);
  enemy1.scale = 2;

  enemy2 = createSprite(enemy1.x+20, ground.y-20, 40, 60);
  enemy2.shapeColor = rgb(0,0,0);
  enemy2.scale = 2;

  enemy3 = createSprite(enemy1.x+65, ground.y-10, 40, 40);
  enemy3.shapeColor = rgb(0,0,0);
  enemy3.rotation = 45;
  enemy3.scale = 2;

  enemy4 = createSprite(enemy1.x, roof.y+50, 40, 40);
  enemy4.shapeColor = rgb(0,0,0);
  enemy4.scale = 2;
  enemy4.rotation = 45;

  enemy5 = createSprite(player.x+450, ground.y-20, 40, 40);
  enemy5.visible = false;
  enemy5.scale = 2;
  enemy5.shapeColor = rgb(0,0,0);

  base1 = createSprite(0,0,100,20)
  base1.shapeColor = (50);
  base1.visible = false;

  base2 = createSprite(0,0,100,20)
  base2.shapeColor = (50);
  base2.visible = false;

  base3 = createSprite(0,0,100,20)
  base3.shapeColor = (50);
  base3.visible = false;
  
  fakeenemy = createSprite(enemy1.x, enemyindicator.y, 50, enemy1.height);
  fakeenemy.visible = false;

  lightblock = createSprite(enemyindicator.x, ground.y+10, enemyindicator.width+75, ground.height+20);
  lightblock.shapeColor = rgb(20, 20, 20);

  speechbubble = createSprite(windowWidth/2, windowHeight/2-50, 400, 400);
  speechbubble.addImage(speechbubbleimg);
  speechbubble.visible = false;

  fakeenemy2 = createSprite(enemy3.x-30,enemyindicator.y, 50,enemy1.height);
  fakeenemy2.visible = false;

  fakeenemy3 = createSprite(enemy3.x-30,enemyindicator.y, 50,enemy1.height);
  fakeenemy3.visible = false;

  movingenemy = createSprite(windowWidth-100, ground.y-(ground.height/2), 20, 20);
  movingenemy.addImage(movingenemyimg);
  movingenemy.visible = false;

  box = createSprite(0, 0, 50, 50);
  box.visible = false;
  box.shapeColor = rgb(255,0,0);

  wall = createSprite(windowWidth/2+430, 0, 200, 400);
  wall.y = wall.height/2;
  wall.visible = false;

  wall2 = createSprite(windowWidth/2, 0, 200, 400);
  wall2.y = 392;
  wall2.visible = false;

  enemy1.depth = enemydepth;
  enemy2.depth = enemydepth;
  enemy3.depth = enemydepth;
  enemy4.depth = enemydepth;
  movingenemy.depth = enemydepth;
  roof.depth = enemydepth - 1 ;
  ground.depth = 100;
  enemyindicator.depth = 100;
  base2.depth = 200;
  base3.depth = base1.depth + 1;
  player.depth = speechbubble.depth + 1;
  }

function draw() {
  background(0);
  camera.position.x = windowWidth/2;
  camera.position.y = windowHeight/2;
  console.log(gameState)
  drawSprites();
  player.collide(ground);
  if(gameState === "menu"){
    visibleingame(false);
    visiblemenu(true);
    speechbubble.visible = false;
    textSize(35);
    textFont("Cochin");
    fill("white");
    text('Play', playbutton.x-30, playbutton.y+10);
    text('Info', playbutton.x-30, playbutton.y+110);
    enemyindicator.visible = false;
    if(mousePressedOver(playbutton)){
      gameState = "wait";
    }
    if(mousePressedOver(infobutton)){
      gameState = "info1";
    }
  }

  else if(gameState === "info1"){
    visibleingame(false);
    visiblemenu(false);
    speechbubble.visible = true;
    textSize(45);
    textFont("Cochin");
    fill("white");
    enemyindicator.visible = true;
    enemyindicator.x = speechbubble.x+10+speechbubble.width/2+enemyindicator.width;
    enemyindicator.y = speechbubble.y+10+speechbubble.height/2+enemyindicator.height;
    //enemyindicator.scale = 4;
    info3 = info1;
    text(info3, speechbubble.x-290, speechbubble.y-150);
    if(frameCount % 250 === 0){
      gameState = "info2"
    }
  }
  
  else if(gameState === "info2"){
    visibleingame(false);
    visiblemenu(false);
    speechbubble.visible = true;
    textSize(45);
    textFont("Cochin");
    fill("white");
    enemyindicator.visible = true;
    enemyindicator.x = speechbubble.x+10+speechbubble.width/2+enemyindicator.width;
    enemyindicator.y = speechbubble.y+10+speechbubble.height/2+enemyindicator.height;
    //enemyindicator.scale = 4;
    info3 = info2;
    text(info3, speechbubble.x-290, speechbubble.y-150);
    if(frameCount % 250 === 0){
      gameState = "menu"
      speechbubble.visible = false;
    }
  }

  else if(gameState === "wait"){
    if(frameCount % 50 === 0){
      gameState = "lvl 1"
    }
  }

  else if(gameState === "lvl 1"){ 
    visibleingame(true);
    visiblemenu(false);
    restartbutton.visible = false;
    enemyindicator.visible = true;

    lightblock.x = enemyindicator.x;

    if(enemyindicator.x<1700){
      enemyindicator.velocityX = 10;
    }
    else{
      enemyindicator.velocityX = 0;
    }

    player.visible = true;

    if(enemyindicator.x > windowWidth){
      player.velocityX = +10
    }
    
    player.collide(ground);

    if(keyIsDown(32) && player.velocityY === 0){
      player.velocityY = -15;
    }
      
    player.velocityY = player.velocityY + 0.8
  
    enemydist(fakeenemy, enemy1);
    enemydist(fakeenemy, enemy4);
    enemydist(fakeenemy, enemy2);
    enemydist(fakeenemy, enemy3);

    if(player.collide(enemy1)||player.collide(enemy2)||player.collide(enemy3)||player.collide(enemy4)){
      gameState = "gameover"
    }

    if(player.x >= windowWidth-20){
      gameState = "lvl 2"
      lvlnum = 2;
      player.velocityY = 0;
      player.velocityX = 0;
      enemyindicator.velocityX = 0;
      reset();
    }
  }

  else if(gameState === "lvl 2"){ 
    player.scale = 0.05;
    visibleingame(false);
    visiblemenu(false);
    restartbutton.visible = false;
    enemyindicator.visible = true;
    speechbubble.visible = false;

    player.velocityX = 7;

    if(enemyindicator.x-player.x < 150){
    enemyindicator.x = player.x +150;
    }
  
    lightblock.x = enemyindicator.x;

    player.visible = true;

    player.collide(ground);

    if(keyIsDown(32) && player.velocityY === 0){
      player.velocityY = -15;
    }
      
    player.velocityY = player.velocityY + 0.8

    enemy1.visible = true;
    enemy2.visible = true;
    enemy3.visible = true;
    enemy4.visible = true;
    enemy1.x = windowWidth/2;
    enemy1.y = ground.y-10;
    enemy2.x = enemy1.x+20;
    enemy2.y = ground.y-20;
    enemy3.x = enemy1.x+65;
    enemy3.y = ground.y-10;
    enemy4.x = enemy1.x;
    enemy4.y = roof.y+50

    enemydist(fakeenemy, enemy1);
    enemydist(fakeenemy, enemy4);
    enemydist(fakeenemy, enemy2);
    enemydist(fakeenemy, enemy3);

    if(player.collide(enemy1)||player.collide(enemy2)||player.collide(enemy3)||player.collide(enemy4)){
      gameState = "gameover"
    }

    if(player.x > windowWidth){
      gameState = "lvl 3"
      player.velocityY = 0;
      player.velocityX = 0;
      enemyindicator.velocityX = 0;
      reset();
    }
  }

  else if(gameState === "lvl 3"){
    visibleingame(true);
    visiblemenu(false);
    restartbutton.visible = false;
    enemyindicator.visible = true;
    speechbubble.visible = false;

    player.velocityX = 7;

    if(enemyindicator.x-player.x < 250){
    enemyindicator.x = player.x + 250;
    }
  
    lightblock.x = enemyindicator.x;

    player.visible = true;

    player.collide(ground);

    if(keyIsDown(32) && player.velocityY === 0){
      player.velocityY = -15;
    }
      
    player.velocityY = player.velocityY + 0.8
  
    enemydist(fakeenemy, enemy1);
    enemydist(fakeenemy, enemy4);
    enemydist(fakeenemy2, enemy2);
    enemydist(fakeenemy2, enemy3);

    enemy1.x = windowWidth/2-200;
    enemy2.x = windowWidth/2+200
    enemy3.x = enemy2.x+65
    enemy3.rotation = 45;
    enemy4.visible = false;
    fakeenemy.x = enemy1.x - 30
    fakeenemy2.x = enemy2.x - 30;
    

    if(player.collide(enemy1)||player.collide(enemy2)||player.collide(enemy3)||player.collide(enemy4)){
      gameState = "gameover"
    }

    if(player.x > windowWidth){
      gameState = "lvl 4"
      player.velocityY = 0;
      player.velocityX = 0;
      enemyindicator.velocityX = 0;
      reset();
    }
  }

  if(gameState === "lvl 4"){
    visibleingame(true);
    visiblemenu(false);
    restartbutton.visible = false;
    enemyindicator.visible = true;
    speechbubble.visible = false;

    player.velocityX = 7;

    if(enemyindicator.x-player.x < 250){
    enemyindicator.x = player.x + 250;
    }
  
    lightblock.x = enemyindicator.x;

    player.visible = true;
    
    player.collide(ground);

    if(keyIsDown(32) && player.velocityY === 0){
      player.velocityY = -15;
    }
      
    player.velocityY = player.velocityY + 0.8
  
    enemydist(fakeenemy, enemy1);
    enemydist(fakeenemy, enemy4);
    enemydist(fakeenemy2, enemy2);
    enemydist(fakeenemy2, enemy3);
    enemydist(fakeenemy3, enemy5);

    enemy1.x = windowWidth/2-200;
    enemy2.x = windowWidth/2+200
    enemy3.x = enemy2.x+65
    enemy3.rotation = 45;
    enemy4.visible = true;
    enemy4.x = enemy1.x+70
    enemy4.scale = 10;
    fakeenemy.x = enemy1.x - 30;

    if(player.collide(enemy1)||player.collide(enemy2)||player.collide(enemy3)||player.collide(enemy4)){
      gameState = "gameover"
    }

    if(player.x > windowWidth){
      gameState = "lvl 5"
      player.velocityY = 0;
      player.velocityX = 0;
      enemyindicator.velocityX = 0;
      reset();
    }
  }

  else if(gameState === "lvl 5"){
    visibleingame(true);
    visiblemenu(false);
    restartbutton.visible = false;
    enemyindicator.visible = true;
    speechbubble.visible = false;

    player.velocityX = 7;

    if(enemyindicator.x-player.x < 250){
    enemyindicator.x = player.x + 250;
    }
  
    lightblock.x = enemyindicator.x;

    player.visible = true;
    
    player.collide(ground);

    if(keyIsDown(32) && player.velocityY === 0){
      player.velocityY = -15;
    }
      
    player.velocityY = player.velocityY + 0.8

    enemy1.x = windowWidth/2+200;
    enemy1.y = ground.y-20;
    enemy1.scale = 1;
    enemy1.width = 100;
    enemy1.height = 20;
    enemy1.rotation = -20;
    enemy2.x = enemy1.x;
    enemy2.y = enemy1.y - 40
    enemy2.scale = 1;
    enemy2.rotation = 25;
    enemy2.height = 100;
    enemy3.y = enemy2.y - 50;
    enemy3.x = enemy1.x;
    enemy3.scale = 1;
    enemy3.rotation = -20;
    enemy3.height = 100;
    enemy4.visible = true;
    enemy4.x = enemy1.x-450;
    enemy4.scale = 10;
    fakeenemy.x = enemy1.x - 30;
    fakeenemy2.x = enemy4.x - 30;
    base1.visible = true;
    base1.x = enemy2.x - 150;
    base1.y = enemy2.y - 40;
    player.collide(base1);
    
    enemydist(fakeenemy, enemy1);
    enemydist(fakeenemy2, enemy4);
    enemydist(fakeenemy, enemy2);
    enemydist(fakeenemy, enemy3);

    if(player.collide(enemy1)||player.collide(enemy2)||player.collide(enemy3)||player.collide(enemy4)){
      gameState = "gameover"
    }

    if(player.x > windowWidth){
      gameState = "lvl 6"
      player.velocityY = 0;
      player.velocityX = 0;
      enemyindicator.velocityX = 0;
      reset();
    }
  }

  else if(gameState === "lvl 6"){
    visibleingame(true);
    visiblemenu(false);
    restartbutton.visible = false;
    enemyindicator.visible = true;
    speechbubble.visible = false;

    player.velocityX = 7;

    if(enemyindicator.x-player.x < 250){
    enemyindicator.x = player.x + 250;
    }
  
    lightblock.x = enemyindicator.x;

    player.visible = true;
    
    player.collide(ground);

    if(keyIsDown(32) && player.velocityY === 0){
      player.velocityY = -15;
    }
      
    player.velocityY = player.velocityY + 0.8;

    enemy1.x = windowWidth/2+200;
    enemy1.y = ground.y-50;
    enemy1.scale = 1;
    enemy1.height = 100;
    enemy1.rotation = -20;
    enemy2.x = enemy1.x;
    enemy2.y = enemy1.y - 40
    enemy2.scale = 1;
    enemy2.rotation = 25;
    enemy2.height = 100;
    enemy3.y = enemy2.y - 50;
    enemy3.x = enemy1.x;
    enemy3.scale = 1;
    enemy3.rotation = -20;
    enemy3.height = 100;
    enemy4.visible = true;
    enemy4.x = enemy1.x-370;
    enemy4.scale = 10;
    enemy5.visible = true;
    fakeenemy.x = enemy1.x - 30;
    fakeenemy2.x = enemy4.x - 30;
    base1.visible = true;
    base1.x = enemy2.x - 190;
    base1.y = enemy2.y - 40;
    base1.width = 200;
    player.collide(base1);
    
    enemydist(fakeenemy, enemy1);
    enemydist(fakeenemy2, enemy4);
    enemydist(fakeenemy, enemy2);
    enemydist(fakeenemy, enemy3);
    enemydist(fakeenemy2, enemy5);
    if(player.collide(enemy1)||player.collide(enemy2)||player.collide(enemy3)||player.collide(enemy4)||player.collide(enemy5)){
      gameState = "gameover"
    }

    if(player.x > windowWidth){
      gameState = "lvl 7"
      player.velocityY = 0;
      player.velocityX = 0;
      enemyindicator.velocityX = 0;
      reset();
    }
  }

  else if(gameState === "lvl 7"){
    visibleingame(true);
    visiblemenu(false);
    restartbutton.visible = false;
    enemyindicator.visible = true;
    speechbubble.visible = false;

    player.velocityX = 7;

    if(enemyindicator.x-player.x < 250){
    enemyindicator.x = player.x + 250;
    }
  
    lightblock.x = enemyindicator.x;

    player.visible = true;
    
    player.collide(ground);

    if(keyIsDown(32) && player.velocityY === 0){
      player.velocityY = -15;
    }
      
    player.velocityY = player.velocityY + 0.8;

    enemy1.x = windowWidth/2-150;
    enemy1.y = ground.y-50;
    enemy1.width = 100;
    enemy1.rotation = 10;
    enemy1.height = 20;
    enemy3.x = enemy1.x + 270;
    enemy3.y = ground.y - 50;
    enemy3.width = enemy1.width+300;
    enemy3.height = enemy1.height;
    enemy3.rotation = 0;
    enemy5.visible = false;
    enemy2.visible = false;
    base1.x = enemy1.x;
    base1.y = enemy1.y-50;
    base1.width = 150;
    base2.visible = true;
    base2.x = base1.x + 250;
    base2.y = base1.y - 130;
    base2.width = 150;
    base3.visible = true;
    base3.x = base2.x + 250;
    base3.y = base2.y + 80;
    base3.width = 150;
    enemy4.x = base3.x - (base3.width/2) + 40;
    enemy4.y = base3.y - 20;
    enemy4.width = 40;
    enemy4.height = 20;
    enemy4.scale = 1;
    fakeenemy.x = base1.x-30-(base1.width/2);
    fakeenemy.y = enemyindicator.y;
    fakeenemy2.x = enemy4.x - 70;
    fakeenemy2.y = enemyindicator.y;

    player.collide(base1);
    player.collide(base2);
    player.collide(base3);
    
    enemydist(fakeenemy, enemy1);
    enemydist(fakeenemy2, enemy4);
    enemydist(fakeenemy, enemy3);

    if(player.collide(enemy1)||player.collide(enemy3)||player.collide(enemy4)){
      gameState = "gameover"
    }

    if(player.x > windowWidth){
      gameState = "lvl 8"
      player.velocityY = 0;
      player.velocityX = 0;
      enemyindicator.velocityX = 0;
      reset();
    }
  }

  else if(gameState === "lvl 8"){
    visibleingame(true);
    visiblemenu(false);
    restartbutton.visible = false;
    enemyindicator.visible = true;
    speechbubble.visible = false;

    player.velocityX = 7;

    if(enemyindicator.x-player.x < 250){
    enemyindicator.x = player.x + 250;
    }
  
    lightblock.x = enemyindicator.x;

    player.visible = true;
    
    player.collide(ground);

    if(keyIsDown(32) && player.velocityY === 0){
      player.velocityY = -15;
    }
      
    player.velocityY = player.velocityY + 0.8;

    enemy1.visible = true;
    enemy2.visible = false;
    enemy3.visible = false;
    enemy4.visible = false;
    enemy5.visible = false;
    
    base1.x = windowWidth/2;
    base1.y = windowHeight/2+100;
    base1.rotation = 90;
    base2.x = base1.x;
    base2.y = base1.y + 100;
    base2.height = 20;
    base2.width = base2.height;
    base3.x = base1.x+400;
    base3.y = base1.y;
    base3.width = base1.width;
    base3.height = base1.height;
    base3.rotation = base1.rotation;
    enemy1.x = base2.x + 400;
    enemy1.y = base2.y;
    enemy1.width = base2.width;
    enemy1.height = base2.height;
    enemy1.scale = 1;
    base1.shapeColor = rgb(0,0,0);
    base2.shapeColor = rgb(0,0,0);
    base3.shapeColor = rgb(0,0,0);
    fakeenemy.x = base1.x - 50;
    fakeenemy.y = enemyindicator.y;
    fakeenemy2.x = base3.x - 50;
    fakeenemy2.y = enemyindicator.y;
    movingenemy.visible = true;
    movingenemy.rotation = -90;

    if(player.x > base1.x+10){
      movingenemy.velocityX = -15
    }

    enemydist(fakeenemy, base1);
    enemydist(fakeenemy, base2);
    enemydist(fakeenemy2, base3);
    enemydist(fakeenemy2, enemy1);

    if(player.collide(movingenemy)){
      gameState = "gameover"
      movingenemy.velocityX = 0;
      player.x = player.x + 20;
    }

    if(player.x > windowWidth){
      gameState = "lvl 9"
      player.velocityY = 0;
      player.velocityX = 0;
      enemyindicator.velocityX = 0;
      movingenemy.visible = false;
      reset();
    }
  }

  else if(gameState === "lvl 9"){
    visibleingame(true);
    visiblemenu(false);
    restartbutton.visible = false;
    enemyindicator.visible = true;
    speechbubble.visible = false;

    player.velocityX = 7;

    if(enemyindicator.x-player.x < 250){
    enemyindicator.x = player.x + 250;
    }
  
    lightblock.x = enemyindicator.x;

    player.visible = true;

    player.collide(ground);

    if(keyIsDown(32) && player.velocityY === 0){
      player.velocityY = -15;
    }
      
    player.velocityY = player.velocityY + 0.8
  
    enemydist(fakeenemy, enemy1);
    enemydist(fakeenemy, enemy2);

    enemy4.visible = false;
    enemy5.visible = false;
    enemy3.visible = false;
    base2.visible = false;
    base3.visible = false;
    enemy1.x = windowWidth/2-200;
    enemy1.scale = 2;
    enemy1.y = ground.y - 30;
    enemy1.rotation = 45;
    enemy2.x = enemy1.x - 80;
    enemy2.y = enemy1.y - 1000;
    enemy2.scale = 15;
    enemy2.rotation = -55;
    enemy2.width = 100
    base1.visible = true;
    base1.x = enemy1.x + 630;
    base1.y = ground.y + 100;
    base1.width = 200;
    base1.rotation = 0;
    base1.height = 500;
    box.visible = true;
    box.x = base1.x;
    box.y = -25;
    fakeenemy.x = enemy1.x-30;
    fakeenemy.y = enemyindicator.y;
    
    if(enemyindicator.x > wall.x - 30){
      wall.visible = true;
    }
    else{
      wall.visible = false;
    }
    
    wall.collide(base1);
    wall.collide(box);

    console.log(wall.y);

    if(wall.y <= wall.height/2){
    wall.velocityY = 5;
    }

    if(wall.y >= 392){
      wall.velocityY = -5;
    }

    player.collide(base1);

    if(player.collide(enemy1)||player.collide(enemy2)||player.collide(wall)){
      gameState = "gameover"
    }

    if(player.x > windowWidth){
      gameState = "lvl 10"
      player.velocityY = 0;
      player.velocityX = 0;
      enemyindicator.velocityX = 0;
      wall.velocityY = 0;
      reset();
    }
  }

  else if(gameState === "lvl 10"){
    visibleingame(true);
    visiblemenu(false);
    restartbutton.visible = false;
    enemyindicator.visible = true;
    speechbubble.visible = false;

    player.velocityX = 7;

    if(enemyindicator.x-player.x < 250){
    enemyindicator.x = player.x + 250;
    }
  
    lightblock.x = enemyindicator.x;

    player.visible = true;

    player.collide(ground);

    if(keyIsDown(32) && player.velocityY === 0){
      player.velocityY = -15;
    }
      
    player.velocityY = player.velocityY + 0.8

    enemy4.visible = false;
    enemy5.visible = false;
    enemy3.visible = false;
    base3.visible = false;
    enemy2.visible = false;
    enemy1.visible = false;
    base1.x = wall.x;
    base1.y = ground.y + 100;
    base1.width = 200;
    base1.rotation = 0;
    base1.height = 500;
    box.visible = true;
    box.x = base1.x;
    base2.x = wall2.x;
    base2.y = ground.y + 100;
    base2.width = 200;
    base2.rotation = 0;
    base2.height = 500;
    box.width = windowWidth;
    box.y = -25;
    
    if(enemyindicator.x > wall.x - 30){
      wall.visible = true;
    }
    else{
      wall.visible = false;
    }

    if(enemyindicator.x > wall2.x - 30){
      wall2.visible = true;
    }
    else{
      wall2.visible = false;
    }
    
    wall.collide(box);

    console.log(wall.y);

    if(wall.y <= wall.height/2){
      wall.velocityY = 5;
    }
  
    if(wall.y >= 392){
      wall.velocityY = -5;
    }

    if(wall2.y <= wall2.height/2){
      wall2.velocityY = 5;
    }
  
    if(wall2.y >= 392){
        wall2.velocityY = -5;
    }

    player.collide(base1);
    player.collide(base2);

    if(player.collide(wall2)||player.collide(wall)){
      gameState = "gameover"
    }

    if(player.x > windowWidth){
      gameState = "lvl 11"
      player.velocityY = 0;
      player.velocityX = 0;
      enemyindicator.velocityX = 0;
      wall.velocityY = 0;
      wall2.velocityY = 0;
      reset();
    }
  }

  else if(gameState === "lvl 11"){
    visibleingame(true);
    visiblemenu(false);
    restartbutton.visible = false;
    enemyindicator.visible = true;
    speechbubble.visible = false;

    player.velocityX = 7;

    if(enemyindicator.x-player.x < 250){
    enemyindicator.x = player.x + 250;
    }
  
    lightblock.x = enemyindicator.x;

    player.visible = true;

    player.collide(ground);

    if(keyIsDown(32) && player.velocityY === 0){
      player.velocityY = -15;
    }
      
    player.velocityY = player.velocityY + 0.8

    enemy4.visible = false;
    enemy5.visible = false;
    enemy3.visible = false;
    base3.visible = false;
    enemy2.visible = false;

    wall.visible = false;

    enemy1.visible = true;
    enemy1.scale = 2;
    enemy1.x = windowWidth/2-400;
    enemy1.rotation = 45;
    enemy1.y = ground.y-10;
    
    enemy2.visible = true;
    enemy2.scale = 2;
    enemy2.x = base2.x + 50;
    enemy2.y = base2.y + 40;
    enemy2.rotation = 0;
    enemy2.height = 20;

    enemy3.visible = true;
    enemy3.scale = 2;
    enemy3.rotation = 45
    enemy3.x = base1.x + 300;
    enemy3.y = ground.y - 20;

    enemy4.visible = true;
    enemy4.x = enemy3.x;
    enemy4.y = enemy3.y - 40;
    enemy4.height = 50;
    enemy4.width = 20;
    enemy4.rotation = -45;
    enemy4.scale = 2;

    enemy5.visible = true;
    enemy5.rotation = 0;
    enemy5.height = 100;
    enemy5.width = 20;
    enemy5.x = enemy3.x;
    enemy5.y = enemy3.y - 110;

    box.visible = true;
    box.x = base1.x;
    box.width = windowWidth;
    box.y = -25;

    base1.x = wall2.x;
    base1.y = ground.y + 100;
    base1.width = 200;
    base1.rotation = 0;
    base1.height = 500;
    
    base2.visible = true;
    base2.x = enemy1.x + 200;
    base2.y = ground.y - 80;
    base2.width = 200;
    base2.height = 20;

    base3.visible = true;
    base3.width = 100;
    base3.height = 20;
    base3.x = enemy3.x - 150;
    base3.y = ground.y - 135;

    movingenemy.visible = true;
    movingenemy.rotation = -90;

    fakeenemy.x = enemy1.x - 20;
    fakeenemy.y = enemyindicator.y;

    fakeenemy2.x = enemy5.x - 150;
    fakeenemy2.y = enemyindicator.y;

    enemydist(fakeenemy, enemy1);
    enemydist(fakeenemy, enemy2);
    enemydist(fakeenemy2, enemy3);
    enemydist(fakeenemy2, enemy4);
    enemydist(fakeenemy2, enemy5);

    if(enemyindicator.x > wall2.x - 30){
      wall2.visible = true;
    }
    else{
      wall2.visible = false;
    }
    
    wall.collide(box);

    if(wall2.y <= wall2.height/2){
      wall2.velocityY = 5;
    }
    if(wall2.y < 392){
      movingenemy.velocityX = -10;
    }
    if(wall2.y >= 392){
      wall2.velocityY = -5;
    }
    if(movingenemy.x < 0){
      movingenemy.x = enemy5.x - 50; 
      movingenemy.y = enemy5.y - 40;
    }

    player.collide(base1);
    player.collide(base2);
    player.collide(base3);

    if(player.collide(wall2)||player.collide(enemy1)||player.collide(enemy2)||player.collide(enemy3)||player.collide(enemy4)||player.collide(enemy5)||player.collide(movingenemy)){
      gameState = "gameover"
    }

    if(player.x > windowWidth){
      gameState = "chap1done"
      player.velocityY = 0;
      player.velocityX = 0;
      enemyindicator.velocityX = 0;
      wall.velocityY = 0;
      wall2.velocityY = 0;
      reset();
    }
  }

  else if(gameState === "chap1done"){
    textSize(45);
    textFont("Cochin");
    fill("white");
    visiblemenu(false);
    visibleingame(false);
    wall.visible = false;
    movingenemy.visible = false;
    text("You finished the game", windowWidth/2-200, windowHeight/2);
  }

  else if(gameState === "gameover"){
  visibleingame(false);
  visiblemenu(false);
  movingenemy.visible = false;
  enemy5.visible = false;
  wall.velocityY = 0;
  wall2.velocityY = 0;
  wall.visible = false;
  wall2.visible = false;
  textSize(35);
  player.visible = true;
  player.addImage(playerdeadimg);
  if(player)
  textFont("Cochin");
  fill("white");
  text("You Died", windowWidth/2-100, windowHeight/2);
  enemyindicator.visible = false;
  restartbutton.visible = true;
  player.velocityY = 0;
  player.velocityX = 0;
  enemyindicator.velocityX = 0;
  if(mousePressedOver(restartbutton)){
    gameState = ("lvl"+" "+lvlnum);
    player.x = 40;
    player.y = ground.y-10;
    enemyindicator.x = player.x;
    enemyindicator.y = player.y-155;
    player.addImage(playerimg);
  }
  }
}

function enemydist(fenemy, normenemy){
  if(enemyindicator.isTouching(fenemy)&&enemyindicator.x<fenemy.x){
    var dist = (enemyindicator.x+20)-fenemy.x;
    var visibilitynum = (1-(-((dist*4)/100)))*10*5.0;
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
  enemy4.visible = trueorfalse
  ground.visible = trueorfalse;
  player.visible = trueorfalse;
  lightblock.visible = trueorfalse;
  roof.visible = trueorfalse;
  base1.visible = trueorfalse;
  base2.visible = trueorfalse;
  base3.visible = trueorfalse;
}

function visiblemenu(trueorfalse){
  playbutton.visible = trueorfalse;
  infobutton.visible = trueorfalse;
  hidder.visible = trueorfalse;
}

function reset(){
  player.x = 40;
  player.y = ground.y - 40;
  enemyindicator.x = player.x+150;
}
