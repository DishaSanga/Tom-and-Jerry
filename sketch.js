
var bg, bgImage, cat, mouse, catImg, mouseImg, cat2Img, mouse2Img, cat3Img, mouse3Img;
var PLAY = 1;
var END = 0;
var gameState = 1;;
function preload() {
  bgImage = loadImage("images/garden.png")
  catImg = loadImage("images/cat1.png")
  mouseImg = loadImage("images/mouse1.png")
  cat2Img = loadAnimation("images/cat2.png", "images/cat3.png")
  mouse2Img = loadAnimation("images/mouse2.png", "images/mouse3.png")
  cat3Img = loadAnimation("images/cat4.png")
  mouse3Img = loadAnimation("images/mouse4.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //create tom and jerry sprites here
  bg = createSprite(width / 2, 200)
  bg.addImage(bgImage)
  bg.scale = 2
  cat = createSprite(1400, 500, 200 - windowWidth, windowHeight / 2)
  cat.addImage(catImg)
  cat.scale = 0.2
  mouse = createSprite(150, 500, 800 - windowWidth, windowHeight / 2)
  mouse.addImage(mouseImg)
  mouse.scale = 0.15
  mouse.setCollider("circle", 0, 0, 2)
  //mouse.debug=true
}

function draw() {

  if (keyDown("left")) {
    cat.velocityX = -3
    cat.addAnimation("catRunning2", cat2Img);
    cat.changeAnimation("catRunning2");
    mouse.addAnimation("mouseRunning2", mouse2Img);
    mouse.changeAnimation("mouseRunning2")
  }
  if (cat.x - mouse.x < (cat.width - mouse.width) / 2) {
    cat.addAnimation("lastCat", cat3Img)
    cat.changeAnimation("lastCat")
    cat.velocityX = 0
    mouse.addAnimation("lastMouse", mouse3Img)
    mouse.changeAnimation("lastMouse")
  }
  //Write condition here to evalute if tom and jerry collide
  //   if (keyDown"up") {
  //      cat.velocityX = -3
  // }
  drawSprites();
}



    //800 - windowWidth, windowHeight / 2



