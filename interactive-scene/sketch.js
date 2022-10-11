// Atari Breakout game - Interactive scene asssignment
// Katharine C
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// make keyboard interaction be space for ball to start
// mouse interaction is moving rectangle

let state = "start";
let cellWidth;
let cellHeight;
let yRect
let ballX;
let ballY;
let xButton;
let yButton;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  if (state === "start") {
    rectMode(CENTER)
    startScreen();
    // insert image for start screen
  }
  if (state === "game") {
    rectMode(CORNER);
    drawRectangles(); //maybe move up to setup? will it cause problem to get rid of blocks if in draw
    movingRectangle();
    ball();
  }
}

// window resizing
function windowResized() {
  setup();
}

// start screen code
function startScreen() {
  if (mouseInsideRect(xButton-200, xButton+200, yButton-100, yButton+50)) {
    fill("gray");
  }
  else {
    fill("black");
  }
  rect(width/2, height/2, 400, 160);
}

function mousePressed() {
  // need to make button in middle, centre alignment so then starts middle for rectangle
  let xButton = width/2;
  let yButton = height/2;

  if (state ==="start" && mouseInsideRect(xButton-200, xButton+200, yButton-80, yButton+80)) {
    state = "game";
  }
}

function mouseInsideRect(left, right, top, bottom) {
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}


// blocks to get rid of
function drawRectangles() {
  cellWidth = width/14; 
  cellHeight = height/20;
  fill("white");

  // window resizing approx consistancy
  if (cellHeight >= cellWidth - 30) {
    cellWidth = width/7;
  }
  else if (cellWidth <= cellHeight + 30) {
    cellHeight = height/15;
  }

  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 14; x++) {
      rect(x*cellWidth, y*cellHeight +175, cellWidth, cellHeight);
    }
  }
}

function movingRectangle() {
  // let xRect = width/2; // not used atm
  yRect = height/5 *4;

  if (state === "game") {
    if (mouseX > width-80) {
      mouseX = width-80;
    }
    rect(mouseX, yRect, 80, cellHeight - 15);
  }
}



function ball() {
  ballX = width/2;
  ballY = height/5 *3;
  

  if (state === "game") {
    circle(ballX, ballY, 25);
  }
}