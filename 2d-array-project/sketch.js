// Sliding puzzle - 2D Array Project
// Katharine C.
// November 17, 2022
//
// Extra for Experts:
// - oop -> used to make class for img tiles
// - img.copy -> used to make tile img sections from the original image
// - shuffle -> used to shuffle the board array

class Tile {
  constructor(index, img) {
    this.index = index;
    this.img = img;
  }
}

let rows = 4;
let cols = 4;
let tiles = []; // tiles in picure order
let board = []; // order of tiles 
let state = "start";
let isNeighbour = false;
let cellWidth, cellHeight, grid, num, koalas, xButton, yButton, shuffleButton;

// sliding puzzle image
function preload() {
  koalas = loadImage("koalas.jpg");
}

function setup() {
  let canvas = createCanvas(1600, 789);
  canvas.position((windowWidth - 1600)/2, (windowHeight - 789)/2);

  cellHeight = height/(rows+2);
  cellWidth = cellHeight;
  xButton = width/4 *3;
  yButton = cellHeight/3*2 + 150;

  makeTiles();
}

function draw() {
  background(100, 150, 200);
  drawShuffleButton();
  displayTiles(board);
  words();
}

function mousePressed() {
  // shuffle button
  if (mouseInsideRect(xButton, xButton+150, yButton, yButton+50)) {
    shuffleBoard();
    state = "new game";
  }

  // determine where in puzzle grid the mouse is
  let yPosition = Math.floor(mouseY/cellHeight -1.5); 
  let xPosition = Math.floor(mouseX/cellWidth-4);

  isNeighbour = false;
  findBlank(xPosition, yPosition, board);
}

// making indivudual tiles from full img
function makeTiles() {
  for (let y = 0; y < rows; y++) {
    board.push([]);
    for (let x = 0; x < cols; x++) {
      loadPixels();
      let img = createImage(Math.floor(cellWidth), Math.floor(cellHeight));

      // create new tile piece from specific part of original photo
      img.copy(koalas, x*cellWidth*cols, y*cellHeight*rows, cellWidth*cols, cellHeight*rows, x, y, cellWidth, cellHeight);
      let index = x + y*cols;
      let tile = new Tile(index, img);
      board[y].push(index);
      tiles.push(tile);
    }
  }

  // remove last tile and insert blank (-1)
  tiles.pop();
  board[3].pop();
  board[3].push(-1);
}

function displayTiles(board) {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let tileImage;
      if (board[y][x] !== -1) {
        // accessing specific tile img from tiles array
        tileImage = tiles[board[y][x]].img;
        image(tileImage, x*cellWidth + (width/2-0.5*cols*cellWidth), y*cellHeight + (height/5*3-0.5*rows*cellWidth), cellWidth, cellHeight);
      }

      // drawing blank
      else if (board[y][x] === -1) {
        fill("white");
        rect(x*cellWidth + (width/2-0.5*cols*cellWidth), y*cellHeight + (height/5*3-0.5*rows*cellWidth), cellWidth, cellHeight);
      }

      // draw grid on top of tiles
      noFill();
      stroke(30);
      rect(x*cellWidth + (width/2-0.5*cols*cellWidth), y*cellHeight + (height/5*3-0.5*rows*cellWidth), cellWidth, cellHeight);
    } 
  }
}

// find the blank and check if clicked square is a neighbour
function findBlank(xPosition, yPosition, board) {
  let blankY, blankX;
  
  if (board[yPosition][xPosition -1] === -1) {
    blankY = yPosition;
    blankX = xPosition -1;
    isNeighbour = true;
  }
  if (board[yPosition][xPosition +1] === -1) {
    blankY = yPosition;
    blankX = xPosition +1;
    isNeighbour = true;
  }

  // top/bottom edge checks along with blank checks
  if (yPosition < 3) {
    if (board[yPosition +1][xPosition] === -1) {
      blankY = yPosition +1;
      blankX = xPosition;
      isNeighbour = true;
    }
  }
  if (yPosition > 0) {
    if (board[yPosition - 1][xPosition] === -1) {
      blankY = yPosition -1;
      blankX = xPosition;
      isNeighbour = true;
    }
  }
  
  if (isNeighbour) {
    swap(xPosition, yPosition, blankX, blankY, board);
  }
}

// swap current tile with blank tile
function swap(xPosition, yPosition, blankX, blankY, board) {
  let currentPiece = board[yPosition][xPosition];
  board[yPosition][xPosition] = -1;
  board[blankY][blankX] = currentPiece;
}

// check if mouse is inside shuffle button
function mouseInsideRect(left, right, top, bottom) {
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}

// make shuffle button
function drawShuffleButton() {
  textAlign(CENTER);
  // eslint-disable-next-line no-undef
  textStyle(BOLDITALIC); // note: BOLDITALIC is a built-in system text option even though eslint doesn't acknowledge it as one
  if (mouseInsideRect(xButton, xButton+150, yButton, yButton+50)) {
    fill("#6475c8");
    rect(xButton, yButton, 150, 50);
    fill("white");
    text("Shuffle", xButton + 75, yButton + 35);
  }
  else {
    fill("white");
    rect(xButton, yButton, 150, 50);
    fill("#6475c8");
    text("Shuffle", xButton + 75, yButton + 35);
  }
}

// shuffle board (mix up puzzle pieces)
function shuffleBoard() {
  let newShuffledBoard = [];
  let tempBoard = flatten(board);
  let newFlatBoard = shuffle(tempBoard);

  for (let y = 0; y < rows; y++) {
    newShuffledBoard.push([]);
    for (let x = 0; x < cols; x++) {
      let index = x + y*cols;
      newShuffledBoard[y].push(newFlatBoard[index]);
    }
  }
  board = newShuffledBoard;
}

// flatten board from 2D array to array
function flatten(board) {
  return board.flat(Infinity);
}

// text for screen
function words() {
  fill("black");
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(50);
  text("Sliding Puzzle", width/2, cellHeight/3*2-20);

  textSize(25);
  textStyle(ITALIC);
  text("Slide the pieces to recreate the picture! Use your mouse to click on the tiles beside the blank spot slide the tile over.", width/2, cellHeight/3*2 + 20);
  text("Use the shuffle button to shuffle the picture and start the puzzle!", width/2, cellHeight/3*2 + 55);
  
  // show if puzzle solved
  if (isSolved()) {
    fill("white");
    textAlign(CENTER);
    // eslint-disable-next-line no-undef
    textStyle(BOLDITALIC);
    textSize(30);
    text("Congratulations!! You solved the puzzle!", width/2, cellHeight/3*2+100);
  }
}

// check if picture solved
function isSolved() {
  // avoid being "solved" at start when showing full img
  if (state === "new game") {
    let tempBoard = flatten(board);
    for (let i = 0; i < tempBoard.length -1; i++) {
      // checking if tiles are in the same place as original photo
      if (tempBoard[i] !== tiles[i].index) {
        return false;
      }
    }
    return true;
  }
}