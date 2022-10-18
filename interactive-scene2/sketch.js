// Atari Breakout game - Interactive scene asssignment
// Katharine C
// Due Oct. 13, 2022
//
// Extra for Experts:
// - learned the forEach function: loops through an array so that I can differentiate bewteen blocks and make each block seperately
// - Learned splice array function: used to remove blocks

let state = "start";
let left = false;
let right = false;
let hitSlider = false;
let lifeLost = false;
let gameEnd = false;
let dx = 5;
let dy = 6;
let score = 0;
let lives = 5;
let columns = 14;
let rows = 8;
let bricks = [];
let movement, cellWidth, cellHeight, yRect, xButton, yButton, ball, sliderHeight;
let brickColour = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "white"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  movement = width/2;
  ball = {
    x: movement + 50,
    y: height/2,
    diameter: 25
  };
  xButton = width/2;
  yButton = height/2;
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
    fill("white");
    rectMode(CORNER);
    drawBall();
    drawBricks();
    slider();
    moveBall();
    ballPhysics();
    scoreText();
    lifeNum();
    gameEndCheck();
  }
  if (state === "game" && lifeLost) {
    lifeRestart();
  }
  if (state === "game" && gameEnd) {
    gameOver();
  }
}

function startScreen() {
  if (state === "start") {
    if (mouseInsideRect(xButton-200, xButton+200, yButton-100, yButton+50)) {
      fill("#2849FD");
    }
    else {
      fill("#5410BB");
    }
    rect(width/2, height/2, 400, 160);
    textAlign(CENTER);
    textStyle(BOLD);
    textSize(80);
    fill("#2849FD");
    textFont("Helvetica");
    text("Atari Breakout", width/2, height/4 + 40);
    fill("black");
    text("Play", width/2, height/2+30);
    textSize(30);
    textStyle(BOLDITALIC);
    fill("#5410BB");
    text("by Katharine C", width/2, height/4 + 100);
    textStyle(BOLDITALIC);
    text("Use the W and A to move the platform back and forth", width/2, height/3 *2 +10);
  }
}

function mousePressed() {
  if (state ==="start" && mouseInsideRect(xButton-200, xButton+200, yButton-80, yButton+80)) {
    state = "game";
  }
}

function mouseInsideRect(left, right, top, bottom) {
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}

function createBricks() {
  cellWidth = width/columns - 10; 
  cellHeight = height/30;

  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      let brick = {
        x: i * 130 + 50,
        y: j * 32 + 60,
        w: cellWidth,
        h: cellHeight,
        colour: brickColour[j]
      };
      bricks.push(brick);
    }
  }
}

function drawBricks() {
  bricks.forEach(function(brick) {
    fill(brick.colour);
    rect(brick.x, brick.y, brick.w, brick.h);
  });
}

function slider() {
  yRect = height - 1.5*cellHeight; 
  sliderHeight = cellHeight-5;

  if (state === "game") {
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
  if (state === "game" && !lifeLost && !gameEnd) {
    ellipse(ball.x, ball.y, ball.diameter, ball.diameter);
  }
}

function moveBall() {
  if (state === "game" && !lifeLost && !gameEnd) {
    ball.x += dx;
    ball.y += dy;
  }
}

function ballPhysics() {
  if (state === "game") {
    if (ball.x >= width - 0.5*ball.diameter || ball.x <= 0) {
      dx *= -1;
    }

    if (ball.y >= height) {
      lives = lives -1;
      lifeLost = true;
    }

    if (ball.y <= 0) {
      dy = -dy;
    }
    
    hitSlider = collideRectCircle(movement, yRect, 100, sliderHeight, ball.x, ball.y, ball.diameter);
    if (hitSlider) {
      dy *= -1;
    }

    bricks.forEach(function(whichBrick, index) {
      if (hitBrick(ball, whichBrick)) {
        dy *= -1;
        score++;
        bricks.splice(index, 1);
      }
    });
  }
}

function hitBrick(ball, brick) {
  if (ball.y - cellHeight < brick.y && ball.x > brick.x && ball.x <= brick.x + 134) {
    return true;
  }
}


function lifeRestart() {
  if (lifeLost) {
    ball.x = movement + 50;
    ball.y = height/2;
    movement = width/2;
    textAlign(CENTER);
    textSize(40);
    text("You have " + lives + " lives remaining", width/2 +30, height/2);
    textSize(30);
    text("Press SPACE to restart", width/2 +30, height/2 + 50);
    if (keyIsDown(32)) {
      lifeLost = false;
    }
  }
} 

function scoreText() {
  fill("black");
  textSize(30);
  textAlign(LEFT);
  textStyle(BOLD);
  text("Score: " + score, width - 160, 40);
}

function lifeNum() {
  fill("black");
  textAlign(LEFT);
  textSize(30);
  textStyle(BOLD);
  text("Lives: " + lives, 60, 40);
}

function gameEndCheck() {
  if (lives === 0 || score === 112) {
    gameEnd = true;
  }
}

function gameOver() {
  if (gameEnd) {
    fill("black");
    textAlign(CENTER);
    textStyle(BOLD);
    textSize(50);
    if (score < 112) {
      text("Final Score: " + score, width/2, height/2);
    }
    else {
      text("Congrats you hit all the blocks!", width/2, height/2);
      text("Your final Score: " + score, width/2, height/2 + 60);
    }
  }
}