// Walker Obj oriented program demo
// Your Name
// Date
//
// OOP demo 2
// Make circle "walk" randomly around screen in NEWS dirctions
// Walker - class
// Data: x, y, speed, colour
// Behaviours: move, display

class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 5;
    this.color = color(random(255), random(255), random(255)); // or call specific colours per name
    this.radius = 3;
  }
  
  display() {
    stroke(this.color);
    fill(this.color);
    circle(this.x, this.y, this.radius*2);
  }

  move() {
    let choice = random(100);

    if (choice < 25) {
      //up
      this.y -= this.speed;
    } 
    else if (choice < 50) {
      //down
      this.y += this.speed;
    }
    else if (choice < 75) {
      // right
      this.x += this.speed;
    }
    else {
      //left 
      this.x -= this.speed;
    }
  }

}


let michael; 
let katharine;
let ahmed; 

function setup() {
  background(220);
  createCanvas(windowWidth, windowHeight);
  michael = new Walker(width/2, height/2);
  katharine = new Walker(200, 300); 
  ahmed = new Walker(width-300, height-300);
  // katharine.color = "purple";
  // ahmed.color = "blue";
}

function draw() {
  michael.display();
  katharine.display();
  ahmed.display();

  michael.move();
  katharine.move();
  ahmed.move();
}
