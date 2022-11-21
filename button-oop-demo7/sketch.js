// Button oop demo
// Katharine
// Nov 21
//
// oop demo 7, create 2 buttons using button class, take you to 2 separate scenes


class Button {
  constructor(x ,y, width, height, colour) {
    this.x = x; 
    this.y = y;
    this.height = height;
    this.width = width;
    this.colour = colour;
    this.hoverColour = "grey";
  }

  display() {
    if (this.isInside(mouseX, mouseY)) {
      fill(this.hoverColour);
    }
    else {
      fill(this.colour);
    }
    rect(this.x, this.y, this.width, this.height);
  }

  isInside(x, y) {
    let leftSide = this.x;
    let rightSide = this.x + this.width;
    let topSide = this.y;
    let bottomSide = this.y + this.height;

    return x > leftSide && x < rightSide && y > topSide && y < bottomSide;
  }
}

let button1 = new Button(200, 300, 150, 75, "pink");
let button2 = new Button(200, 600, 150, 75, "purple");
let bgcolour = "light grey";

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(bgcolour);
  button1.display();
  button2.display();
}

function mousePressed() {
  if (button1.isInside(mouseX, mouseY)) {
    bgcolour = "red";
  }
  if (button2.isInside(mouseX, mouseY)) {
    bgcolour = "blue";
  }
}
