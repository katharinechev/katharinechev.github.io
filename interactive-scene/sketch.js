// Atari Breakout game - Interactive scene asssignment
// Katharine C
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let state = "start";
let cellWidth;
let cellHeight;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  if (state === "start") {
    startScreen();
    // insert image for start screen
  }
  if (state === "game") {
    drawRectangles(); //maybe move up to setup? will it cause problem to get rid of blocks if in draw
    movingRectangle();
  }
}

// window resizing
function windowResized() {
  setup();
}

// start screen code
function mousePressed() {
  if (state ==="start" && mouseInsideRect(400, 700, 400, 550)) {
    state = "game";
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
  let xRect = width/2;
  let yRect = height/5 *4;
  
  if (state === "game") {
    if (mouseX > width-80) {
      mouseX = width-80;
    }
    rect(mouseX, yRect, 80, cellHeight - 15);
  }
}



// function ball()