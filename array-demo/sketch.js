// Array Demo
// Katharine
// Oct 18
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let theCircles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  displayCircles();
}

function mousePressed() {
  spawnCircle();
}

function displayCircles() {
  for (let i = 0; i < theCircles.length; i++) {
    noStroke();
    fill(theCircles[i].theColor);
    circle(theCircles[i].x, theCircles[i].y, theCircles[i].diameter);
  }
}

function spawnCircle() {
  let thisCircle = {
    x: mouseX,
    y: mouseY,
    diameter: random(25, 75),
    theColor: color(random(255), random(255), random(255), random(255))
  };
  theCircles.push(thisCircle);
}

