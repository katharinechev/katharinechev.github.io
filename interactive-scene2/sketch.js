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
let left = false;
let right = false;
let hitSlider = false;
let dx = 6;
let dy = 6;
let score = 0;
let circleDiameter = 25;
let columns = 14;
let rows = 8;
let bricks = [];
let movement, cellWidth, cellHeight, yRect, xButton, yButton, circleX, circleY, sliderHeight;
let brickColour = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "white"];
// let circleX = 100;
// let circleY = 150;

// const circle = {
//   x: movement + 50,
//   y: 450,
//   radius: 25
// }

function setup() {
  createCanvas(windowWidth, windowHeight);
  movement = width/2;
  circleX = movement + 50;
  circleY = height/2;
  createBricks(); 
  
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
    fill("white");
    drawBricks();
    slider();
    drawBall();
    moveBall();
    ballPhysics();
  }
}

// window resizing
function windowResized() {
  state = "start"
  
  setup();
}

// start screen code
function startScreen() {
  if (state === "start") {
    if (mouseInsideRect(xButton-200, xButton+200, yButton-100, yButton+50)) {
      fill("gray");
    }
    else {
      fill("black");
    }
    rect(width/2, height/2, 400, 160);
  }
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
function createBricks() {
  cellWidth = width/columns; 
  cellHeight = height/30;

  // window resizing approx consistancy
  // if (cellHeight >= cellWidth - 30) {
  //   cellWidth = width/7;
  // }
  // else if (cellWidth <= cellHeight + 30) {
  //   cellHeight = height/15;
  // }

  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      let brick = {
        x: i * 134 + 20,
        y: j * 30 + 30,
        w: cellWidth,
        h: cellHeight,
        colour: brickColour[j]
      }
      bricks.push(brick)
      // rect(i*cellWidth, j*cellHeight +175, cellWidth, cellHeight);
    }
  }
}

function drawBricks() {
  bricks.forEach(function(brick) {
    fill(brick.colour)
    rect(brick.x, brick.y, brick.w, brick.h)
  })
}

function slider() {
  yRect = height - 1.5*cellHeight; 
  sliderHeight = cellHeight-5;

  if (state === "game") {
    // if (mouseX > width-80) {
    //   mouseX = width-80;
    // }
    rect(movement, yRect, 100, sliderHeight);
    if (keyIsDown(65) && movement > 0) {
      movement -= 10;
    }
    if (keyIsDown(68) && movement < width-100) {
      movement += 10;
    }
  }
}

function drawBall() {
  if (state === "game") {
    ellipse(circleX, circleY, circleDiameter, circleDiameter);
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

    // ellipse(circleX, circleY, circleDiameter, circleDiameter);
    if (circleX >= width - 0.5*circleDiameter) {
      dx *= -1;
    }

    if (circleY <= 0) {
      dy = -dy;
    //   score++;
    }
    
    hitSlider = collideRectCircle(movement, yRect, 100, sliderHeight, circleX, circleY, circleDiameter);
    if (hitSlider) {
      dy *= -1;
    }


    // if (circleY >= height - 1.5*sliderHeight && circleX > movement && circleX <= movement +50) {
    //   dy = -dy;

    // }

    // if (circleY >= height - 1.5*sliderHeight && circleX > movement && circleX <= movement +100) {
    //   dy = -dy;
      
    // }



  }
}
