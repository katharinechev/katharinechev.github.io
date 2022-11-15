// Walker Obj oriented program arrays demo
// Your Name
// Date
//
// OOP demo 3
// Make circle "walk" randomly around screen in NEWS dirctions
// Walker - class
// Data: x, y, speed, colour
// Behaviours: move, display

class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 5;
    // this.color = color(random(255), random(255), random(255)); // or call specific colours per name
    this.color = "red";
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



let walkerArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  spawnWalker();
  
}

function draw() {
  for (let i = 0; i < walkerArray.length; i++) {
    walkerArray[i].move();
    walkerArray[i].display();
  }
}


function spawnWalker() {
  let saabir = new Walker(random(width), random(height));
  let someColour = color(random(255), random(255), random(255));
  saabir.color = someColour;
  walkerArray.push(saabir);
}

function keyPressed() {
  spawnWalker();
}