// Start screen demo
// Your Name
// Oct 3
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state = "start";
let treesImg;
// let buttonLeft = 400;
// let buttonRight = 400;
// let buttonTop = 300;
// let buttonBottom = 150;

function preload() {
  treesImg = loadImage("fall-trees.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  if (state === "start") {
    startScreen();
  }
  if (state === "main") {
    image(treesImg, 0, 0, width, height);
  }
}

function mousePressed() {
  if (state ==="start" && mouseInsideRect(400, 700, 400, 550)) {
    state = "main";
  }
}

function startScreen() {
  if (mouseInsideRect(400, 700, 400, 550)) {
    fill("gray");
  }
  else {
    fill("black");
  }
  rect(400, 400, 300, 150);

}

function mouseInsideRect(left, right, top, bottom) {
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}