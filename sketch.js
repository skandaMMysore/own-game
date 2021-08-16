const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//the below gameState indicates when armyMen jump out of the aircraft
var gameState = 1;

//var gameState1 = "PLAY4";
var gameState2 = "PLAY2";

//var gameState3 = 3;

//2nd gameState of battlefield is Play1

//3rd gameState stands for placing guns and bullets in the canvas
//gameState for spawning guns and other items

//kept backpack as 400 spacing
//spacings in the backpack work as total space available for any item to get stored in the backpack and as item gets stored,
//the backpack spacing also reduces

var backpack = 400;

//creating lake in front of the mountains
var lake;


//reference variable created to increase capacity of main backpack
var backpack1;

var invisible;

//creating the chest in which all the major coins and diamonds are present
var chest = 100;

//diamonds are for changing the planes 
var diamonds = 50;

//gold for buying all guns and grenades and so on
var gold = 20;

//weaponry is for health
var weaponry = 30;

var level = 1;

//creating health to 0
var health = 120;
//for button
var health1;

var army1,army2,army3,army4,army5;

//enemy army which must be spawned randomly
var opp1,opp2,opp3,opp4,opp5;
//creating variable for ejection from flight
var flight;
//creating variable for kills of a player
var kills = 0;


//where the players fight
var battleGround;
//creating other mountain
var mount;
//creating the bullets


//global variable for different prices of guns
var price1 = 40;
var price2 = 65;
var price3 = 50;
var price4 = 80;

var gun99;

//value of bullets
var bullets = 50;

var army100;

//for guns
var gun1;
var gun2;

var gun4;

var backling;

//total money per 1 army group
var money1 = 450;

//created for reference to main guns and these values get added to backpack
var gun11 = 20;
var gun12 = 20;
var gun14 = 20;

//creating a variable for aircraft Sprite
var flightSprite;
//a sprite invisibly created for putting parachutes out
var inv;
//variable for parachute
var parachute;
//keeping it undefined to make sure it gets value once its pushed and displayed

var bullet;
var money;

//for bullets 
var bull = 80;
var bull2 = 100;
var bull3 = 150;
var bull4 = 60;

//allocating prices for bullets
var b1 = 50;
var b2 = 100;
var b3 = 250;
var b4 = 500;


//var amount = 450;

//creating 5 new army variables for the play on the mountains
var army6,army7,army8,army9,army10;

//created variables for 5 bullets
var c2;
var g1;

//var bulllet = bullets,bullet,p15,c2,g1;

//fixing the pouches certain values
var pouch11 = 40;
var pouch12 = 65;

var maxBull = 50;
var maxBull2 = 100;
var maxBull3 = 150;
var maxBull4 = 200;

//for transacting or to buy new products using gold or diamonds or currency
var transaction;

var backie;
//for updating the value of gold increment when bought and its default value is 0
var goldd = 0;
var goldd1 = 0;
var goldd2 = 0;
var goldd3 = 0;

//these below values stored in variables were made as a result of displaying the exact values in each and every gameState
var goldyx = goldd + 10;
var goldyx1  = goldd1 + 50;
var goldyx2 = goldd2 + 100;
var goldyx3 = goldd3 + 120;

var parachute;
var parachute2;
var parachute3;
var parachute4;

var engine,world;
var back1,back2;
function preload(){
  armyImage = loadImage("army2.png");
  aircraftImage = loadImage("aircraft.png");
  backgroundImage = loadImage("snowImage.jpg");
  chestImage = loadImage("chest.png");
  healthImage = loadImage("plus.jpg");
  mountainImage = loadImage("mountain.png");
  //for image of parachute
  parachuteImage = loadImage("parachute.png");

  gun1Image = loadImage("gun2.png");
  gun2Image = loadImage("gun4.png");
  lakeImage = loadImage("lake2.jpg");
  mountainImage2 = loadImage("mountain.png");
  bulletImage = loadImage("bullet1.png");
  backgroundImage2 = loadImage("gold.jpg");
  gun4Image = loadImage("gun4.png");
  gun2Image = loadImage("gun2.png");
  p15Image = loadImage("bullet12.png");
  g1Image = loadImage("g1.png");
  //diamondImage = loadImage("diamond2.png");
  goldImage = loadImage("gold1.png");
  pistulImage = loadImage("pistuls.png");
  moneyImage = loadImage("dollars.jpg");
  currencyImage = loadImage("currency1.png");
  pouchImage = loadImage("pouch.png");
  testImage = loadImage("test.png");
  purchaseImage = loadImage("purchase.png");
  buttonImage = loadImage("button.png");
  backpackImage = loadImage("backpack.png");
  gun5Image = loadImage("AUG91.png");
  flareImage = loadImage("bk5.png");

  di1Image = loadImage("prec.png");
  di2Image = loadImage("gl.png");
  di3Image = loadImage("lapiz.png");
  di4Image = loadImage("lazuli.png");

  bImage = loadImage("pack.png");

  coinImage = loadImage("goldCoin.png");
  //diamondImage = loadImage("pack of 3.png");
  
}

function setup(){
  //creating canvas acc. to the screen size
  var canvas = createCanvas(displayWidth,displayHeight);
  engine = Engine.create();
  world = engine.world;

  flightSprite = createSprite(320,850,10,10);
  flightSprite.addImage(aircraftImage);
  flightSprite.scale = 0.86;
  flightSprite.velocityY = 0;
  flightSprite.velocityX = 0;

  mountainy = createSprite(780,730,displayWidth,displayHeight);
  mountainy.addImage(mountainImage);
  mountainy.scale = 3.8;
  mountainy.visible = false;

  //army creation
  army1 = createSprite(310,flightSprite.y-30);
  army1.addImage(armyImage);
  army1.scale = 0.36;
  army1.visible = false;

  //army2 is under the same track of the army1
  army2 = createSprite(260,flightSprite.y+30);
  army2.addImage(armyImage);
  army2.scale = 0.36;
  army2.visible = false;

  army3 = createSprite(210,flightSprite.y-40);
  army3.addImage(armyImage);
  army3.scale = 0.36;
  army3.visible = false;

  army4 = createSprite(160,flightSprite.y+40);
  army4.addImage(armyImage);
  army4.scale = 0.36;
  army4.visible = false;

  army5 = createSprite(110,flightSprite.y-30);
  army5.addImage(armyImage);
  army5.scale = 0.36;
  army5.visible = false;

  army6 = createSprite(300,army3.y);
  army6.addImage(armyImage);
  army6.scale = 0.36;
  army6.visible = false;

  army7 = createSprite(350,army5.y);
  army7.addImage(armyImage);
  army7.scale = 0.36;
  army7.visible = false;

  army8 = createSprite(350,army2.y);
  army8.addImage(armyImage);
  army8.scale = 0.36;
  army8.visible = false;
  
  mount = createSprite(700,190);
  mount.addImage(mountainImage);
  mount.scale = 2.3;
  mount.visible = false;

  chest1 = createSprite(1350,180);
    chest1.addImage(chestImage);
    chest1.scale = 0.66;
    chest1.visible = true;

  gun99 = new Gun(300,520,60);

  bullet = new Bullet(300,520,60);

  backpack1 = createSprite(1400,750);
  backpack1.addImage(backpackImage);
  backpack1.scale = 0.5;


  button2 = createSprite(480,730);
  button2.addImage(backpackImage);
  button2.scale = 0.2;

  button3 = createSprite(355,730);
  button3.addImage(backpackImage);
  button3.scale = 0.2;

  button12 = createSprite(580,730);
  button12.addImage(backpackImage);
  button12.scale = 0.2;
   
  button13 = createSprite(710,730);
  button13.addImage(backpackImage);
  button13.scale = 0.2;
   
  pouch1 = createSprite(240,550);
  pouch1.addImage(pouchImage);
  pouch1.scale = 0.45;




  pouch2 = createSprite(380,550);
  pouch2.addImage(pouchImage);
  pouch2.scale = 0.45;

  pouch3 = createSprite(520,550);
  pouch3.addImage(pouchImage);
  pouch3.scale = 0.45;

  pouch4 = createSprite(660,550);
  pouch4.addImage(pouchImage);
  pouch4.scale = 0.45;

  dollar1 = createSprite(230,630);
  dollar1.addImage(currencyImage);
  dollar1.scale = 0.19;



  button = createSprite(280,730);
  button.addImage(buttonImage);
  button.scale = 0.2;

  
  button1 = createSprite(400,730);
  button1.addImage(buttonImage);
  button1.scale = 0.2;

  button5 = createSprite(535,730);
  button5.addImage(buttonImage);
  button5.scale = 0.1;

  button4 = createSprite(675,730);
  button4.addImage(buttonImage);
  button4.scale = 0.1;
  
  
  di1 = createSprite(240,550);
  di1.addImage(di1Image);
  di1.scale = 0.45;

  di2 = createSprite(380,550);
  di2.addImage(di2Image);
  di2.scale = 0.45;

  di3 = createSprite(520,550);
  di3.addImage(di3Image);
  di3.scale = 0.45;

  di4 = createSprite(660,550);
  di4.addImage(di4Image);
  di4.scale = 0.45;

  pistul = createSprite(565,250);
  pistul.addImage(pistulImage);
  pistul.scale = 0.54;

  purchase = createSprite(230,680);
 purchase.addImage(purchaseImage);
 purchase.scale = 0.19;

 purchase2 = createSprite(370,680);
 purchase2.addImage(purchaseImage);
 purchase2.scale = 0.19;

 purchase3 = createSprite(510,680);
 purchase3.addImage(purchaseImage);
 purchase3.scale = 0.12;

 purchase4 = createSprite(630,680);
 purchase4.addImage(purchaseImage);
 purchase4.scale = 0.12;

  dollar1 = createSprite(230,630);
  dollar1.addImage(currencyImage);
  dollar1.scale = 0.19;

  dollar2 = createSprite(380,630);
  dollar2.addImage(currencyImage);
  dollar2.scale = 0.19;

  dollar3 = createSprite(510,630);
  dollar3.addImage(currencyImage);
  dollar3.scale = 0.19;

  dollar4 = createSprite(630,630);
  dollar4.addImage(currencyImage);
  dollar4.scale = 0.19;

  parachute = createSprite(500,550);
  parachute.addImage(parachuteImage);
  parachute.scale = 0.3;

  bulletSprite = createSprite(120,580,60,180);
  strokeWeight(2.5);
  stroke("black");
  bulletSprite.shapeColor = "red";


  strokeWeight(10.5);
  stroke("black");
  bulletSprite2 = createSprite(1450,580,60,180);
  bulletSprite2.shapeColor = "red";

  //parachuteC = new Connection2(army1,parachute);
  

  //creating groups for adding in bullets
  bullGroup = new Group();
  bull2Group = new Group();
  bull3Group = new Group();
  bull4Group = new Group();

  y1 = createSprite(1200,500);
  y1.addImage(coinImage);
  y1.scale = 0.5;

  y2 = createSprite(1200,700);
  y2.addImage(coinImage);
  y2.scale = 0.3;

  y3 = createSprite(1200,750);
  y3.addImage(coinImage);
  y3.scale = 0.3;

  y4 = createSprite(1200,800);
  y4.addImage(coinImage);
  y4.scale = 0.3;

  bk = createSprite(380,550,20,20);
  bk.addImage(gun1Image);
  bk.scale = 0.4;

  
  b3 = createSprite(320,640);
  b3.addImage(g1Image);
  b3.scale = 0.2;

  b4 = createSprite(460,640);
  b4.addImage(g1Image);
  b4.scale = 0.2;

  bk3 = createSprite(620,565,20,20);
  bk3.addImage(gun5Image);
  bk3.scale = 0.25;

  b5 = createSprite(620,645);
  b5.addImage(g1Image);
  b5.scale = 0.2;

  bk4 = createSprite(750,565,20,20);
  bk4.addImage(flareImage);
  bk4.scale = 0.4;

  b6 = createSprite(750,650);
  b6.addImage(g1Image);
  b6.scale = 0.1;

  b7 = createSprite(680,800);
  b7.addImage(bImage);
  b7.scale = 0.3;

  /*coinSprite = createSprite(1350,450);
  coinSprite.addImage(coinImage);
  coinSprite.scale = 0.5;
*/
  /*for(var a = 0;a < 100;a++){
    bullet.push(new Bullet(a,520,60));
  }
*/
  
}

function draw() {
  background(backgroundImage);
  stroke("black");
  strokeWeight(5);
  textSize(30);
  if(gameState===0){
      //console.log(gameState);
      stroke("black");
      strokeWeight(5);
      textSize(30);
      text("press space to start the game",50,50);
      if(keyDown("space")){
        gameState = 1;
      }
      //console.log(gameState)
  }
    
//when key pressed is space,then the code gets executed and gameState is 1
if(gameState === 1){
  bk.visible = false;
  b1.visible = false;
  b2.visible = false;
  b3.visible = false;
  b4.visible = false;
  bk4.visible = false;
  b6.visible = false;
  b7.visible = false;

  y1.visible = false;
  y2.visible = false
  y3.visible = false;
  y4.visible = false;

  flightSprite.velocityY = 0;
  flightSprite.velocityX = 0;
  if(keyCode === 32){
    //backie.visible  = false;
    console.log(gameState);
    flightSprite.velocityY = -4;
    flightSprite.velocityX = 0;
    text("press down arrow to release army from plane",50,50);
    
    fill("brown");
    stroke("black");
    strokeWeight(3.5);
    circle(90,160,75);

    textSize(20);
    stroke("red");
    strokeWeight(3.5);
    text("Levels",65,155);
    stroke("green");
    strokeWeight(2.5);
    text(+level,80,182);

   pouch1.visible = false;
   pouch2.visible = false;
   pouch3.visible = false;
   pouch4.visible = false;
  button2.visible = false;

    //coinSprite.visible = false;

    pistul.visible = false;

  button.visible = false;
  button1.visible = false;
  button2.visible = false;
  button5.visible = false;
  button4.visible = false;

  bulletSprite.visible = false;
  bulletSprite2.visible = false;
  
    di1.visible = false;
    di2.visible = false;
    di3.visible = false;
    di4.visible = false;

    purchase.visible = false;
    purchase2.visible = false;
    purchase3.visible = false;
    purchase4.visible = false;

    dollar1.visible = false;
    dollar2.visible = false;
    dollar3.visible = false;

    dollar4.visible = false;

    //coinSprite.visible = false;

    
    //gun displaying on basis of frameCounts disappears
    //gun1.visible = false;

    health1 = createSprite(1350,330);
    health1.addImage(healthImage);
    health1.scale = 0.30;

    parachuteC.display();

    army1.velocityY = -2;
    army1.velocityX = 0;
    army2.velocityY = -2;
    army2.velocityX = 0;
    army3.velocityY = -2;
    army3.velocityX = 0;
    army4.velocityY = -2;
    army4.velocityX = 0;
    army5.velocityY = -2;
    army5.velocityX = 0;
    army6.velocityY = -2;
    army6.velocityX = 0;
    army7.velocityY = -2;
    army7.velocityX = 0;
    army8.velocityY = -2;
    army8.velocityX = 0;



    //circle for health
    fill("brown");
    stroke("black");
    strokeWeight(3.5);
    circle(1455,320,80);

    textSize(20);
    text("Health:",1430,320);
    text(+health,1435,340);
    
    //circle for chest
    fill("purple");
    stroke("black");
    strokeWeight(3.5);
    circle(1455,200,80);
    
    textSize(20);
    stroke("red");
    strokeWeight(3.5);
    text("Chest:",1430,190);
    text(+chest,1435,220);
 
  }
    
}
if(mousePressedOver(chest1)){
  gameState = "XP";
}
if(gameState === "XP"){

  button2.visible = false;
  flightSprite.visible = false;
  pistul.visible = false;
  //health1.visible = false;
  gold1 = createSprite(105,250);
  gold1.addImage(goldImage);
  gold1.scale = 0.54;

  diamond1 = createSprite(315,250);
  diamond1.addImage(di2Image);
  diamond1.scale = 0.54;

  money = createSprite(60,50);
  money.addImage(moneyImage);
  money.scale = 0.2;

  fill("blue");
  strokeWeight(1.5);
  rect(165,69,280,30);
  stroke("black");

  fill("green");

    textSize(20);
    strokeWeight(3.5);
    stroke("black");
    text("Your total Balance:"+money1,240,90);

    textSize(20);
    strokeWeight(1.5);
    stroke("brown");
    text("Backpack:"+backpack,1400,850);

  pistul = createSprite(565,250);
  pistul.addImage(pistulImage);
  pistul.scale = 0.54;

  

  textSize(20);
  stroke("brown");
  strokeWeight(3.5);
  text("Total Gold:"+ gold,65,350);

  dollar = createSprite(215,80);
    dollar.addImage(currencyImage);
    dollar.scale = 0.2;

  textSize(20);
  stroke("red");
  strokeWeight(3.5);
  text("Total Diamonds:"+ diamonds,255,350);

  textSize(20);
  stroke("green");
  strokeWeight(3.5);
  text("Weaponry",545,350);
  
  if(mousePressedOver(gold1)){
    gameState = "money";
  }
    
    
    
  
  

 

    //when mouse gets pressed over money icon then your balance gets displayed
   
}



if(gameState === "money"){
  diamond1.visible = false;
  pistul.visible = false;
  pistul.visible = true;

  textSize(20);
  strokeWeight(1.5);
  stroke("brown");
  text("Backpack value:"+backpack,1350,850);

  fill("red");
  strokeWeight(3.5);
  stroke("black");
  rect(200,510,560,250);

  textSize(20);
  strokeWeight(3.5);
  stroke("green");
  text(+price1,250,300);

textSize(20);
  stroke("green");
  strokeWeight(3.5);
  text("Pack of 10",300,450);

  fill("blue");
  strokeWeight(1.5);
  rect(165,69,280,30);
  stroke("black");

  textSize(20);
    strokeWeight(3.5);
    stroke("black");
    text("Your total Balance:"+money1,240,90);



  pouch1.visible = true;
  pouch2.visible = true;

  pouch3.visible = true;

  pouch4.visible = true;

  di1.visible = false;
  di2.visible = false;
  di3.visible = false;
  di4.visible = false;
  
  dollar.visible = true;
  dollar1.visible = true;
  dollar2.visible = true;
  dollar3.visible = true;
  dollar4.visible = true;
  //dollar5.visible = true;

  //displaying the amount
  textSize(20);
  strokeWeight(1.5);
  stroke("blue");
  text("20",250,640);

  //symbol
  /*test = createSprite(230,660);
  test.addImage(testImage);
  test.scale = 0.19;
*/
 purchase.visible = true;
 purchase2.visible = true;
  purchase3.visible = true;
  purchase4.visible = true;

  textSize(20);
  strokeWeight(1.5);
  stroke("green");
  text("Upto 60",255,680);

  strokeWeight(1.5);
  textSize(18);
  text("purchases",265,700);

  //amount 
  
  
  textSize(20);
  strokeWeight(1.5);
  stroke("brown");
  text("50",400,640);

 

  textSize(20);
  strokeWeight(1.5);
  stroke("brown");
  text("100",520,640);

 

  textSize(20);
  strokeWeight(1.5);
  stroke("brown");
  text("150",650,635);

 

 textSize(20);
  strokeWeight(1.5);
  stroke("purple");
  text("Upto 150",655,680);

  strokeWeight(1.5);
  textSize(18);
  text("purchases",655,710);

 

 textSize(20);
  strokeWeight(1.5);
  stroke("purple");
  text("Upto 250",525,680);

  strokeWeight(1.5);
  textSize(18);
  text("purchases",525,710);


 textSize(20);
  strokeWeight(1.5);
  stroke("brown");
  text("upto 80",405,680);
  text("purchases",405,698);

  /*button = createSprite(280,730);
  button.addImage(buttonImage);
  button.scale = 0.2;

  
  button1 = createSprite(400,730);
  button1.addImage(buttonImage);
  button1.scale = 0.2;

  button5 = createSprite(535,730);
  button5.addImage(buttonImage);
  button5.scale = 0.1;

  button4 = createSprite(675,730);
  button4.addImage(buttonImage);
  button4.scale = 0.1;
*/
button.visible = true;
button1.visible = true;
button2.visible = true;
button5.visible = true;
button4.visible = true;

//coinSprite.visible = true;


  if(mousePressedOver(button5)){
    money1 = money1 - 100;
    backpack = backpack - 100;

    goldd3 = goldd3 + 100;
    

  }
  if(mousePressedOver(backpack1)){
    coinSprite2 = createSprite(1360,550,20,20);
    coinSprite2.addImage(coinImage);
    
    coinSprite2.scale = 0.3;

    textSize(20);
    strokeWeight(2.5);
    stroke("brown");
    text("Goldie:"+ goldd3,1390,650);


  }


  
  if(mousePressedOver(button4)){
    money1 = money1 - 150;
    backpack = backpack - 120;

    goldd2 = goldd2 + 120;

  }
  if(mousePressedOver(backpack1)){
    coinSprite3 = createSprite(1360,650,20,20);
    coinSprite3.addImage(coinImage);
    
    coinSprite3.scale = 0.3;

    

  }

    
  //value of your balance gets reduced by 20
if(mousePressedOver(button)){
  money1 = money1 - 20;
  textSize(20);
  strokeWeight(3.5);
  stroke("blue");
  text("Your total Balance:"+money1,240,90);

  goldd = goldd + 10;
  
}
//when key pressed, the data gets displayed
if(keyCode === RIGHT_ARROW){
textSize(20);
strokeWeight(3.5);
stroke("red");
text("Gold:"+ goldd,1400,440);
}
if(mousePressedOver(backpack1)){
  //coinSprite.visible = false;
  coinSprite1 = createSprite(1360,450,20,20);
  coinSprite1.addImage(coinImage);
  
  coinSprite1.scale = 0.3;
  textSize(20);
  strokeWeight(3.5);
  stroke("red");
  text("Gold:"+ goldd,1400,450);

  

  textSize(20);
  strokeWeight(3.5);
  stroke("green");
  text("Gold:"+goldd2,1400,550);

  coinSprite4 = createSprite(1190,400);
  coinSprite4.addImage(coinImage);
  coinSprite4.scale = 0.3;

  textSize(20);
  strokeWeight(2.5);
  stroke("yellow");
  text("Gold:"+ goldd1,1250,400);

  
}
//if key pressed is x
if(keyCode === 88){
  coinSprite1.visible = false;
}




button3.visible = true;
if(mousePressedOver(button3)){
  backpack = backpack - 20;
  textSize(20);
  strokeWeight(3.5);
  stroke("red");
  text("backpack:"+backpack,1400,800);
}
button1.visible = true;
if(mousePressedOver(button1)){
  money1 = money1 - 40;
  goldd1 = goldd1 + 20;
  
  textSize(20);
  strokeWeight(3.5);
  stroke("red");
  text("Your Gold backpack:"+goldd,900,500);

   

  console.log(goldd);
}
//assigning values of goldds to goldyx variable which can be used in weaponries
goldyx = goldd;
goldyx1 = goldd1;
goldyx2 = goldd2;
goldyx3 = goldd3;

/*if(mousePressedOver(diamond1)){
  gameState = "diamonds";
}
*/

  

  console.log(goldd);
  


if(mousePressedOver(button)){
  textSize(20);
  strokeWeight(3.5);
  stroke("red");
  text("Congrats you have purchased the gold pack of 10",440,90);
}



}
if(mousePressedOver(pistul)){
    gameState = "weaponries";
}
if(gameState === "weaponries"){
  /*back1.visible = false;
  back2.visible = false;
  back3.visible = false;
  back4.visible = false;
*/
  di1.visible = false;
  di2.visible = false;
  di3.visible = false;
  di4.visible = false;
  //money.visible = false;
  dollar.visible = false;
  dollar2.visible = false;
  dollar3.visible = false;
  dollar4.visible = false;
  purchase.visible = false;
  purchase2.visible = false;
  purchase3.visible = false;
  purchase4.visible = false;

  //coinSprite.visible = true;
  
  y1.visible = false;
  y2.visible = false
  y3.visible = false;
  y4.visible = false;


  //purchase3.visible = false;
  //purchase4.visible = false;
  
  dollar111 = createSprite(320,670,20,20);
  dollar111.addImage(currencyImage);
  dollar111.scale = 0.2;

  dollar112 = createSprite(490,670,20,20);
  dollar112.addImage(currencyImage);
  dollar112.scale = 0.2;

  dollar113 = createSprite(580,670,20,20);
  dollar113.addImage(currencyImage);
  dollar113.scale = 0.2;

  dollar114 = createSprite(750,680,20,20);
  dollar114.addImage(currencyImage);
  dollar114.scale = 0.2;


  fill("blue");
  strokeWeight(3.5);
  stroke("black");
  rect(300,500,510,300);


  bk.visible = true;

  textSize(20);
  strokeWeight(3.5);
  stroke("orange");
  text("P2",360,600);

  bk2 = createSprite(520,550,20,20);
  bk2.addImage(gun4Image);
  bk2.scale = 0.4;

  textSize(20);
  strokeWeight(3.5);
  stroke("red");
  text("A220",510,610);

  b3.visible = true;
  b4.visible = true;
  bk2.visible = true;
  bk3.visible = true;
  b6.visible = true;
  b7.visible = true;




  textSize(20);
  strokeWeight(2.5);
  stroke("brown");
  text("Flare",750,600);

  textSize(20);
  strokeWeight(1.5);
  stroke("green");
  text("A500",610,610);

  textSize(20);
  strokeWeight(1.5);
  stroke("brown");
  text(+bull,350,650);

  textSize(20);
  strokeWeight(1.5);
  stroke("red");
  text(+bull2,500,650);

  textSize(20);
  strokeWeight(1.5);
  stroke("black");
  text(+bull3,650,650);

  textSize(20);
  strokeWeight(1.5);
  stroke("black");
  text(+bull4,780,650);

  textSize(20);
  strokeWeight(2.5);
  stroke("red");
  text(+b2,500,690);

  textSize(20);
  strokeWeight(1.5);
  stroke("red");
  text(+b4,650,750);

  //b1 value is 50
  textSize(20);
  strokeWeight(1.5);
  stroke("black");
  text(+b1,340,690);

  strokeWeight(3.5);
  stroke("green");
  text("Backpack:"+backpack,1350,850);

  y1.visible = true;
  y2.visible = true;
  y3.visible = true;
  y4.visible = true;

  /*if(mousePressedOver(backpack1)){

   

    
    
    
    

  //if key h gets pressed then gameState changes to 1 where the army starts falling
 
  }
  */
  strokeWeight(3.5);
  stroke("green");
  text("Backpack:"+backpack,1350,850);

  if(mousePressedOver(y1)){
    backpack = backpack - 20;

    
    goldyx = 0;

      //new variable created exclusively for this gameState and it ll have the same value of that of backpack
      textSize(20);
      strokeWeight(2.5);
      stroke("black");
      text("You have purchased bk gun, Congrats!"+backpack,1350,1050);
      
     
    }
    
    
    

    if(mousePressedOver(y2)){
      goldyx1 = 0;
      backpack = backpack - 30;

      textSize(20);
      strokeWeight(2.5);
      stroke("green");
      text("You have purchased bk2 gun, Congrats!",350,500);
    }
    if(mousePressedOver(y3)){
      goldyx2 = 0;
      backpack = backpack - 50;

      textSize(20);
      strokeWeight(3.5);
      stroke("brown");
      text("You have purchased A500",350,500);
    }
    if(mousePressedOver(y4)){
      goldyx3 = 0;
      backpack = backpack - 100;

      textSize(20);
      strokeWeight(3.5);
      stroke("yellow");
      text("You have purchased Flare",350,500);
    }
    
    

    textSize(20);
    strokeWeight(3.5);
    stroke("red");
    text(+goldyx,1300,550);

    textSize(20);
    strokeWeight(3.5);
    stroke("brown");
    text(+goldyx1,1300,700);

    textSize(20);
    strokeWeight(3.5);
    stroke("brown");
    text(+goldyx2,1300,750);

    textSize(20);
    strokeWeight(3.5);
    stroke("brown");
    text(+goldyx3,1300,800);



  

  u1 = createSprite(360,250);
  u1.addImage(coinImage);
  u1.scale = 0.3;

  

  if(mousePressedOver(b7)){
    bulletted();
  }
  

}
//key h must be pressed
if(keyCode === 104){
  gameState = 1;

}
if(gameState === 1){
  
  
  flightSprite.visible = true;
  flightSprite.velocityY = -4;
    flightSprite.velocityX = 0;
    text("press down arrow to release army from plane",50,50);
    
    fill("brown");
    stroke("black");
    strokeWeight(3.5);
    circle(90,160,75);

    textSize(20);
    stroke("red");
    strokeWeight(3.5);
    text("Levels",65,155);
    stroke("green");
    strokeWeight(2.5);
    text(+level,80,182);

   pouch1.visible = false;
   pouch2.visible = false;
   pouch3.visible = false;
   pouch4.visible = false;

    button2.visible = false;
    b3.visible = false;;
    b4.visible = false;
    //bk2.visible = false;
    bk3.visible = false;
    b6.visible = false;
    b7.visible = false;

    //coinSprite.visible = false;

    pistul.visible = false;

  button.visible = false;
  button1.visible = false;
  button2.visible = false;
  button5.visible = false;
  button4.visible = false;

  bulletSprite.visible = false;
  bulletSprite2.visible = false;
  
    di1.visible = false;
    di2.visible = false;
    di3.visible = false;
    di4.visible = false;

    purchase.visible = false;
    purchase2.visible = false;
    purchase3.visible = false;
    purchase4.visible = false;

    dollar1.visible = false;
    dollar2.visible = false;
    dollar3.visible = false;

    dollar4.visible = false;

    //bk.visible = false;

    //coinSprite.visible = false;


    //gun displaying on basis of frameCounts disappears
    //gun1.visible = false;

    health1 = createSprite(1350,330);
    health1.addImage(healthImage);
    health1.scale = 0.30;

    army1.velocityY = -2;
    army1.velocityX = 0;
    army2.velocityY = -2;
    army2.velocityX = 0;
    army3.velocityY = -2;
    army3.velocityX = 0;
    army4.velocityY = -2;
    army4.velocityX = 0;
    army5.velocityY = -2;
    army5.velocityX = 0;
    army6.velocityY = -2;
    army6.velocityX = 0;
    army7.velocityY = -2;
    army7.velocityX = 0;
    army8.velocityY = -2;
    army8.velocityX = 0;

    //circle for health
    fill("brown");
    stroke("black");
    strokeWeight(3.5);
    circle(1455,320,80);

    textSize(20);
    text("Health:",1430,320);
    text(+health,1435,340);
    
    //circle for chest
    fill("purple");
    stroke("black");
    strokeWeight(3.5);
    circle(1455,200,80);
    
    textSize(20);
    stroke("red");
    strokeWeight(3.5);
    text("Chest:",1430,190);
    text(+chest,1435,220);



}


//only when bull is pressed by mouse the code works out

/*if(gameState === "diamonds"){

  
fill("green");
rect(500,600,350,);

  bk = createSprite(350,500,25,50);
  bk.shapeColor = "red";

  
  
}

*/
//if key pressed is z
button2.visible = true;
if(mousePressedOver(button2)){
  //gameState = "backpack";

backpack = backpack - 40;
  textSize(20);
  strokeWeight(3.5);
  stroke("brown");
  text("backpack:"+backpack,1400,800);
}


/*if(gameState === "backpack"){


backButton = createSprite(280,780);
backButton.addImage(backpackImage);
backButton.scale = 0.3;
}
*/
  
  



 


 //console.log(backpack);


  
    
  
//O key must be pressed
if(keyCode === 111){
  gameState = "diamonds";
  
}
if(gameState === "diamonds"){

  fill("green");
  strokeWeight(2.5);
  stroke("brown");
  rect(200,500,550,350);

  pouch1.visible = false;
  pouch2.visible = false;
  pouch3.visible = false;
  pouch4.visible = false;
  dollar1.visible = false;
  button.visible = false;
  button1.visible = false;
  button2.visible = false;
  button5.visible = false;
  button4.visible = false;
  di1.visible = true;
  di2.visible = true;
  di3.visible = true;
  di4.visible = true;

  textSize(20);
  strokeWeight(1.5);
  stroke("red");
  text("125",250,640);
  
  textSize(20);
  strokeWeight(1.5);
  stroke("black");
  text("Upto 220",260,690);
  text("purchases",260,710);

  textSize(20);
  strokeWeight(1.5);
  stroke("purple");
  text("260",395,630);
  
  textSize(20);
  strokeWeight(1.5);
  stroke("brown");
  text("Upto 350",390,690);
  text("purchases",390,710);

  textSize(20);
  strokeWeight(1.5);
  stroke("red");
  text("300",540,640);
  
  textSize(20);
  strokeWeight(1.5);
  stroke("red");
  text("Upto 400",540,690);
  text("purchases",540,710);

  textSize(20);
  strokeWeight(1.5);
  stroke("brown");
  text("520",680,640);
  
  textSize(20);
  strokeWeight(1.5);
  stroke("brown");
  text("Upto 650",680,690);
  text("purchases",680,710);
}
 

 //when left arrow gets pressed then the army sprite will be visible
//if(keyCode === LEFT_ARROW){
    
  //created sprite for displaying parachutes
  //inv = createSprite(250,600,340,100);
  //inv.visible = false;
  //inv.display();
//}


/*if(army1.isTouching(inv)){
  parachute = createSprite(200,200);
  parachute.addImage(parachuteImage);
  parachute.display();
}
*/
//if keyPressed is Down arrow, then the code below gets executed
if(keyCode === DOWN_ARROW){ 
  gameState = "PLAY";
}
if(gameState === "PLAY"){

  mountainy.visible = true;

  army1.visible = true;
  army1.velocityY = 0.5;
  army1.velocityX = 0;

  army2.visible = true;
  army2.velocityY = 0.5;
  army2.velocityX = 0;

  army3.visible = true;
  army3.velocityY = 0.5;
  army3.velocityX = 0;

  army4.visible = true;
  army4.velocityY = 0.5;
  army4.velocityX = 0;

  army5.visible = true;
  army5.velocityY = 0.5;
  army5.velocityX = 0;

  army6.visible = true;
  army6.velocityY = 0.5;
  army6.velocityX = 0;

  army7.visible = true;
  army7.velocityY = 0.5;
  army7.velocityX = 0;

  army8.visible = true;
  army8.velocityY = 0.5;
  army8.velocityX = 0;
  
  backie = createSprite(1600,800);
  backie.addImage(backpackImage);
  backie.scale = 0.6;


  //backpack = 300; 
}
//if key pressed is p, then below code gets executed
if(keyCode === 80){
  army1.velocityY = 0;
  army2.velocityY = 0;
  army3.velocityY = 0;
  army4.velocityY = 0;
  army5.velocityY = 0;
  army6.velocityY = 0;
  army7.velocityY = 0;
  army8.velocityY = 0;
}



if(keyCode === LEFT_ARROW){
  gameState = "PLAY4";
}

 

//code gets executed only in this respective gameState
if(gameState === "PLAY4"){

  

  mount.visible = true;
  flightSprite.visible = false;
  army1.visible = false;
  army2.visible = false;
  army3.visible = false;
  army4.visible = false;

   //creating another similar mountain opposite to the previous mountain
  

  
  bulletSprite.visible = true;
  bulletSprite2.visible = true;

  

  /*strokeWeight(2.5);
  stroke("black");
  fill("green");
  rect(120,460,10,150);
*/
  //circle for displaying the kills
  stroke("blue");
  strokeWeight(3.5);
  fill("red");
  circle(100,150,85);

  ///displaying text inside the circle
  textSize(20);
  stroke("purple");
  strokeWeight(1.5);
  text("Kills:",80,145);

  
  


  //when key V gets pressed the code below gets executed
  if(keyCode === 118){
    
  }
}
//if keyCode pressed is A ,then the code gets executed
if(keyCode === 65){
  gameState = "PLAY3";
}
if(gameState === "PLAY3"){
  if(frameCount % 20 === 0){
    gun1 = createSprite(250,320,20,20);
    gun1.addImage(gun1Image);
    gun1.x = Math.round(random(460,560));
    gun1.y = Math.round(random(540,600));
    gun1.scale = 0.5;
    gun1.lifetime = 350;

    
  }
  gun2 = new Gun(240,350,150);
    //gun2.addImage(gun1Image);
    gun2.x = Math.round(random(160,350));
    gun2.y = Math.round(random(160,260));
    gun2.scale = 0.6;
    gun2.lifetime = 250;
    console.log(gameState);
    

  if(keyCode === 118){
    army6.visible = true;
    
  }

}
   

  
//if key Pressed is l, then below code gets executed
if(keyCode === 76){
  gameState = "PLAY2";

  army100 = createSprite(600,650);
  army100.addImage(armyImage);
  army100.scale = 0.5;
}
//displaying the gun when gameState would be that of battlefield
if(gameState === "PLAY2"){

  

  army101 = createSprite(750,850);
  army101.addImage(armyImage);
  army101.scale = 0.5;

  
  army102 = createSprite(550,700);
  army102.addImage(armyImage);
  army102.scale = 0.5;

  army103 = createSprite(450,600);
  army103.addImage(armyImage);
  army103.scale = 0.5;
  
  army104 = createSprite(700,700);
  army104.addImage(armyImage);
  army104.scale = 0.5;

  army105 = createSprite(950,800);
  army105.addImage(armyImage);
  army105.scale = 0.5;

  
  army106 = createSprite(550,700);
  army106.addImage(armyImage);
  army106.scale = 0.5;

  army107 = createSprite(1050,500);
  army107.addImage(armyImage);
  army107.scale = 0.5;

  //back1.visible = false;


  gun99.display();
  if(keyIsDown(RIGHT_ARROW)){
    army100.x = army100.x + 5;
  }
   
  backie.visible = true;


  //using a for loop for displaying bullets
  for(var j = 0; j < 5 ; j++){
    var bullets = createSprite(j+500,520);
    bullets.addImage(bulletImage);
    bullets.scale = 0.2;
    bullets.visible = false;
    bullets.velocityX = 8;
    
    
  }

  for(var k = 0; k < 5; k++){
    bullet = new Bullet(k+20,590,60);
    //bullet.addImage(bulletImage);
  
    
  }
  if(frameCount % 50 === 0){
    gun4 = createSprite(Math.round(random(600,850)),Math.round(random(600,850)));
    gun4.addImage(gun4Image);
    gun4.scale = 0.3;
    gun4.lifetime = 200;

    
    
  }
  if(frameCount % 75 === 0){
    p4 = createSprite(Math.round(random(600,850)),Math.round(random(620,920)));
    p4.addImage(p15Image);
    p4.scale = 0.2;
    p4.lifetime = 180;

    gun4 = createSprite(Math.round(random(750,1200)),Math.round(random(680,990)));
    gun4.addImage(gun2Image);
    gun4.scale = 0.3;
    gun4.lifetime = 290;

    g15 = createSprite(Math.round(random(650,920)),Math.round(random(750,1000)));
    g15.addImage(g1Image);
    g15.scale = 0.3;
    g15.lifetime = 50;

  }
  if(frameCount % 150 === 0){
    army1000 = createSprite(Math.round(random(300,350)),Math.round(random(150,300)));
    army1000.addImage(armyImage);
    army1000.scale = 0.3;
    
    army1001 = createSprite(Math.round(random(400,450)),Math.round(random(150,350)));
    army1001.addImage(armyImage);
    army1001.scale = 0.3;
    //army1000.scale = 0.3;
    
  }
  //the key pressed must be b

//key t must be pressed
if(keyCode === 116){
  army102.x = army102.x + 2;
  army103.x = army103.x + 2;
  
}      
//key k must be pressed
if(keyCode === 107){
  army104.x = army104.x + 2;
  army105.x = army105.x + 2;
}

  
  
    
  
  //displaying bullets from the for looped
  
  
  //for t
  //code is written to load the max no.of bullets in a gun to shoot and similarly codes must be written to other bullets shoot from the respective guns
  if(keyCode === 116){
    
    bullet.display();
    bullet.lifetime = 200;
    bullet.body.position.x+=8;
    bullet.scale = 0.2;

    bullets.visible = true;
    bullets.velocityX = 8;
    console.log(bullet.body.velocity.x);
    console.log(bullets.velocityX);
    //console.log(bullets.body.position.x);

    //k.visible = true;
    //bullets.body.position.x+=2;
  }
  if(keyCode === UP_ARROW){
    army100.x = army100.x + 4;
    army101.x = army101.x + 2;
  }
  if(army100 || army101.isTouching(gun4)){
    
  }
 
   
}

  drawSprites();
}
  //function created exclusively for adding purchased bullets to your backpack
 function bulletted(){
   //if(mousePressedOver(bull)){
      var b5 = createSprite(250,500,20,20);
      
      b5.visible = false;
      
      //if keyCode pressed is g
      if(keyCode === 103){
        for(var i = 0; i < maxBull; i++){
          b10 = new Bullet(b7.x,b7.y,50);

        }
        b10.display();
      }

      //}
 }
 function bullet2(){
  //if(mousePressedOver(bull)){
     //var b6 = createSprite(250,500,20,20);
     
     //b6.visible = false;
     
     //if keyCode pressed is m
     if(keyCode === 109){
       for(var i = 0; i < maxBull2; i++){
         b11 = new Bullet(bk.x,bk.y,50);


       }
       b11.display();
     }

     //}
}
function bullet3(){
  //key is l
  if(keyCode === 76){
    for(var p = 0; p<maxBull3;p++){
      b12 = new Bullet(bk2.x,bk2.y,50);
    }
    b12.display();
  }
}

function bullet4(){
  if(keyCode === 111){
    for(var q = 0; q < maxBull4;q++){
      b13 = new Bullet(bk4.x,bk4.y,50);
    }
    b13.display();
    
  }
}

/*function bullet3(){
  var b7 = createSprite(250,500,20,20);
     
  b7.visible = false;
  backpack = backpack - 100;
  money = money - 150;

  if(mousePressedOver(bull2)>5){
    textSize(20);
    strokeWeight(2.5);
    stroke("brown");
    text("You cannot collect bullets above",200,150);
  }
  //if keyCode pressed is m
  if(keyCode === 109){
    for(var i = 0; i<maxBull2; i++){
      b11 = new Bullet(gun1.x,gun1.y,50);


    }
    b11.display();
}
}
*/



   
   
    

    







//creating buy function to select guns by purchases from the chest using k button
/*function buy(){
  if(keyCode === 113){
    gun1 = createSprite(1560,200);
    gun1.addImage(gun1Image);
    gun1.scale = 0.5;
    gun1.display();
    
    gun2 = createSprite(1560,300);
    gun2.addImage(gun2Image);
    gun2.scale = 0.5;
    gun2.display();

    //price set for gun1
    price1 = 2;

    //price for gun2
    price2 = 4;
    
  }
  //when the a key isPressed then the chest value gets decreased by 2
  if(keyCode === 65){
    chest = chest - 2;
  }
  //when the b key gets pressed the chest value gets decreased by 4
  else if(keyCode === 66){
    chest = chest - 4;
  }
}
*/    
  
    
    



    

  
 
 



  
  

  

