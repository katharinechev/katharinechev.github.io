// Atari Breakout game - Interactive scene asssignment
// Katharine C
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let cellWidth;
let cellHeight;
let xRect;
let yRect;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawRectangles(); //maybe move up to setup? will it cause problem to get rid of blocks if in draw
  movingRectangle();
}

// window resizing
function windowResized() {
  setup();
}

// blocks to get rid of
function drawRectangles() {
  cellWidth = width/14; 
  cellHeight = height/20;

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
  xRect = width/2;
  yRect = height/5 *4;

  if (mouseX > width-80) {
    mouseX = width-80;
  }
  rect(mouseX, yRect, 80, cellHeight - 15);

  // need "if start, xRect = mouseX", ensure the rectangle stays until start - use state?
}

// function ball()