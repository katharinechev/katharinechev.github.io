// Image demo
// Katharine C
// Sept 22, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let catImage;
let scaler = 0.5;

function preload() {
  catImage = loadImage("cat.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(220);
  image(catImage, mouseX, mouseY, catImage.width*scaler, catImage.height*scaler); //catImage.height/width pulls og width/height
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    scaler = scaler * 1.5;
  }
  else if (keyCode === DOWN_ARROW) {
    scaler = scaler * 0.75;
  }
}