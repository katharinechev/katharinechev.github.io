// Final - Ball oop
// Katharine C
// Jan 27
//

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y; 
    this.dy = random(-5, 5);
    this.dx = random(-5, 5);
    this.radius = random(5, 50);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.colour = color(this.r, this.g, this.b);

    // reset circle origin if the circle will be drawn overlapping with a screen edge
    while (this.x < this.radius || this.x > width - this.radius) {
      this.x = random(width);
    }
    while (this.y < this.radius || this.y > height - this.radius) {
      this.y = random(height);
    }
  }

  display() {
    fill(this.colour);
    noStroke();
    circle(this.x, this.y, this.radius*2);
  }

  update() {
    // move
    this.x += this.dx;
    this.y += this.dy;

    // bounce off edges
    if (this.x < this.radius || this.x > width - this.radius) {
      this.dx *= -1;
    }
    if (this.y <= this.radius || this.y > height - this.radius) {
      this.dy *= -1;
    }
  }

  checkIfPointInsideBall(x, y) {
    // return true if x and y are inside ball
    if (x > this.x - this.radius && x < this.x + this.radius && y > this.y - this.radius && y < this.y + this.radius) {
      return true;
    }
  }
}

let theBalls = [];
let clicked;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // create 5 balls and push into array
  for (let i = 0; i < 5; i++) {
    let b = new Ball(random(width), random(height));
    theBalls.push(b);
  }
}

function draw() {
  background(220);
  // display current balls
  for (let i = 0; i<theBalls.length; i++) {
    theBalls[i].update();
    theBalls[i].display();
  }
}

function keyPressed() {
  // create new ball on keypress + push up to array
  let b = new Ball(random(width), random(height));
  theBalls.push(b);
}

function mousePressed() {
  // if click on ball, delete ball from array
  for (let i = theBalls.length -1; i>0; i--) {
    if (theBalls[i].checkIfPointInsideBall(mouseX, mouseY)) {
      theBalls.splice(i, 1);
    }
  }
}