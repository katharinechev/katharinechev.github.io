// Sliding puzzle - 2D Array Project
// Katharine
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rows = 4;
let cols = 4;
// let numSquares = rows*cols;
let tiles = []; 
let board = []; // order of tiles 
let isNeighbour = false;
let cellWidth, cellHeight, grid, num, koalas;

class Tile {
  constructor(index, img) {
    this.index = index;
    this.img = img;
  }
}

function preload() {
  koalas = loadImage("koalas.jpg");
}

function setup() {
  let canvas = createCanvas(1600, 789);
  canvas.position((windowWidth - 1600)/2, (windowHeight - 789)/2);
  cellHeight = height/(rows+2);
  cellWidth = cellHeight;
  // cellWidth = height/3/cols;
  // if (cellHeight > cellWidth) {
  //   cellWidth = cellHeight;
  // }
  makeTiles();
  // grid = create2dArray(cols, rows);
}

function draw() {
  background(100, 150, 200);
  displayTiles(board);
  
}

// // create grid w numbers in order (1-15), blank space = -1
// function create2dArray(cols, rows) {
//   let emptyArray = [];
//   for (let y = 0; y < rows; y++) {
//     emptyArray.push([]);
//     for (let x = 0; x < cols; x++) {
//       emptyArray[y].push(x + y * cols);
//     }
//   }
//   emptyArray[3].pop();
//   emptyArray[3].push(-1);
//   return emptyArray;
// }

function mousePressed() {
  // let mouseYimproved;
  let yPosition = Math.floor(mouseY/cellHeight -1.5); 
  let xPosition = Math.floor(mouseX/cellWidth-4);

  // if (mouseY < height/5*3-0.5*cols*cellWidth && (xPosition >=0 && xPosition <4)) {
  //   mouseYimproved = mouseY + (height/5*3-0.5*cols*cellWidth);
  //   yPosition = Math.floor(mouseYimproved/cellHeight);
  // }

  console.log("break------------");
  console.log("xposition = " + xPosition);
  
  console.log("yposition = " + yPosition);
  console.log("boardyx " + board[yPosition][xPosition]);

  isNeighbour = false;
  findBlank(xPosition, yPosition, board);
}


function makeTiles() {
  for (let y = 0; y < rows; y++) {
    board.push([]);
    for (let x = 0; x < cols; x++) {
      loadPixels();
      let img = createImage(Math.floor(cellWidth), Math.floor(cellHeight));
      img.copy(koalas, x*cellWidth*cols, y*cellHeight*rows, cellWidth*cols, cellHeight*rows, x, y, cellWidth, cellHeight);
      let index = x + y*cols;
      let tile = new Tile(index, img);
      board[y].push(index);
      tiles.push(tile);
    }
  }

  tiles.pop();
  board[3].pop();
  board[3].push(-1);

}

function displayTiles(board) {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let tileImage;
      if (board[y][x] !== -1) {
        tileImage = tiles[board[y][x]].img;
        image(tileImage, x*cellWidth + (width/2-0.5*cols*cellWidth), y*cellHeight + (height/5*3-0.5*rows*cellWidth), cellWidth, cellHeight);
      }
      else if (board[y][x] === -1) {
        fill("white");
        rect(x*cellWidth + (width/2-0.5*cols*cellWidth), y*cellHeight + (height/5*3-0.5*rows*cellWidth), cellWidth, cellHeight);
      }
      noFill();
      stroke(30);
      rect(x*cellWidth + (width/2-0.5*cols*cellWidth), y*cellHeight + (height/5*3-0.5*rows*cellWidth), cellWidth, cellHeight);
    } 
  }
}

function findBlank(xPosition, yPosition, board) {
  let blankY, blankX;

  // simplify into four if else statements and then put edge checks inside

  if (board[yPosition][xPosition -1] === -1) {
    blankY = yPosition;
    blankX = xPosition -1;
    isNeighbour = true;
  }
  else if (board[yPosition][xPosition +1] === -1) {
    blankY = yPosition;
    blankX = xPosition +1;
    isNeighbour = true;
  }
  if (yPosition !== 3) {
    if (board[yPosition +1][xPosition] === -1) {
      blankY = yPosition +1;
      blankX = xPosition;
      isNeighbour = true;
    }
  }
  else if (yPosition !== 0) {
    if (board[yPosition - 1][xPosition] === -1) {
      blankY = yPosition -1;
      blankX = xPosition;
      isNeighbour = true;
    }
  }
  else if (yPosition === 1 || yPosition === 2 || yPosition === 3) {
    if (board[yPosition -1][xPosition] === -1) {
      blankY = yPosition -1;
      blankX = xPosition;
      isNeighbour = true;
    }
  }
  else if (board[yPosition][xPosition] === -1) {
    blankY = yPosition;
    blankX = xPosition;
  }
  else {
    isNeighbour = false;
  }

  console.log("blank x = " + blankX);
  console.log("blank y = " + blankY);
  console.log("neighbour " + isNeighbour);

  if (isNeighbour) {
    swap(xPosition, yPosition, blankX, blankY, board);
  }
}

function swap(xPosition, yPosition, blankX, blankY, board) {
  console.log(board[yPosition][xPosition]);
  let currentPiece = board[yPosition][xPosition];
  board[yPosition][xPosition] = -1;
  board[blankY][blankX] = currentPiece;
  console.log("current piece " + currentPiece);
  console.log("board at /prev tile/ " + board[yPosition][xPosition]);
  console.log("board at /blank/ " + board[blankY][blankX]);
}