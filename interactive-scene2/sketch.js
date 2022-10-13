// Atari Breakout game - Interactive scene asssignment
// Katharine C
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// make keyboard interaction be space for ball to start
// mouse interaction is moving rectangle
// https://editor.p5js.org/bansal321/sketches/HJAFXebeV


let state = "start";
let dx = 6;
let dy = 6;
let score = 0;
let circleRadius = 25;
let hit = false;
let cellWidth, cellHeight, yRect, xButton, yButton, circleX, circleY;
// let circleX = 100;
// let circleY = 150;

// const circle = {
//   x: movement + 50,
//   y: 450,
//   radius: 25
// }

function setup() {
  createCanvas(windowWidth, windowHeight);
  circleX = width/2;
  circleY = height/2;
  
}

function draw() {
  background(220);
  if (state === "start") {
    rectMode(CENTER);
    startScreen();
    // insert image for start screen
  }
  if (state === "game") {
    rectMode(CORNER);
    drawRectangles(); //maybe move up to setup? will it cause problem to get rid of blocks if in draw
    movingRectangle();
    drawBall();
    moveBall();
    ballPhysics();
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
function createBlocks() {
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

  
}

// function drawRectangles() {
//   cellWidth = width/14; 
//   cellHeight = height/20;
//   fill("white");

//   // window resizing approx consistancy
//   if (cellHeight >= cellWidth - 30) {
//     cellWidth = width/7;
//   }
//   else if (cellWidth <= cellHeight + 30) {
//     cellHeight = height/15;
//   }

//   for (let y = 0; y < 4; y++) {
//     for (let x = 0; x < 14; x++) {
//       rect(x*cellWidth, y*cellHeight +175, cellWidth, cellHeight);
//     }
//   }
// }

function movingRectangle() {
  // let xRect = width/2; // not used atm
  yRect = height - cellHeight +15;

  if (state === "game") {
    if (mouseX > width-80) {
      mouseX = width-80;
    }
    rect(mouseX, yRect, 80, cellHeight - 15);
  }
}

function drawBall() {

  if (state === "game") {
    ellipse(circleX, circleY, circleRadius, circleRadius);
  }
}

function moveBall() {
  if (state === "game") {
    circleX += dx;
    circleY += dy;
  }
}

function ballPhysics() {
  if (state === "game") {

    // ellipse(circleX, circleY, circleRadius, circleRadius);
    if (circleX >= width - circleRadius) {
      dx *= -1;
    }

    // if (circleY <= 0) {
    //   dy = -dy;
    //   score++;
    // }
    
    // if (circleY >= height && circleX > width && circleX <= width/2) {
    //   dy = -dy;

    // }

    // if (circleY >= height && circleX > width/2 && circleX <= width -170) {
    //   dy = -dy;
      
    // }

  }
}
