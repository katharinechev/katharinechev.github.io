// Dquare around edge demo
// Katharine
// Sept 26, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 0;
let y = 0;
let speed = 6;
let squareSize = 50;
let state = "right";


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  moving();
  drawSquare();
}

function drawSquare() {
  square(x, y, squareSize);
}

function moving() {
  if (state === "right") {
    x += speed;
    if (x + squareSize >= width) {
      x = width - squareSize; //dont fall off edge
      state = "down";
    }
  }

  if (state === "down") {
    y += speed;
    if (y + squareSize >= height) {
      y = height - squareSize; //dont fall off edge
      state = "left";
    }
  }

  if (state === "left") {
    x -= speed;
    if (x <= 0) {
      x = 0; //dont fall off edge
      state = "up";
    }
  }

  if (state === "up") {
    y -= speed;
    if (y <= 0) {
      y = 0; //dont fall off edge
      state = "right";
    }
  }
}

