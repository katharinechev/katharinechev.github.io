// Atari Breakout game - Interactive scene asssignment
// Katharine C
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let cellWidth;
let cellHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
}

function draw() {
  drawRectangles();
}

// window resizing
function windowResized() {
  setup();
}
// blocks to get rid of
function drawRectangles() {
  let cellWidth = width/14; //random(100, width/12);
  let cellHeight = 50;
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 14; x++) {
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }


}

// function movingRectangle() {}