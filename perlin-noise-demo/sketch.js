// Perlin Noise Demo
// Katharine
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let balls = [];

function keyPressed() {
  let ball = {
    x: random(width),
    y: random(height),
    diameter: random(50, 100),
    time: random(5000),
    colour: color(random(255), random(255), random(255), random(255))
  };
  balls.push(circle(ball.x, ball.y, ball.diameter))
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  fill("black");

  for (let i = 0; i < balls.length; i++) {

  }

  // balls.forEach(current => {
    
  // });
  // ball.x = noise(time) *width;
  // ball.y = noise(time +2) *height;
  // // let time increase along noise
  // time += 0.01;

  // circle(ball.x, ball.y, ball.diameter);
}

