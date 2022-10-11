// How to find coordinates
// Katharine
// Oct 11
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  circle(1051, 136, 50); //put in the coordinates you recieved from console
}

function mousePressed() {
  console.log(mouseX, mouseY); // helper function to give the coordinates of mouse
}