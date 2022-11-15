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
  createCanvas(windowWidth, windowHeight);
  cellHeight = width/3/rows;
  cellWidth = cellHeight;
  // cellWidth = height/3/cols;
  // if (cellHeight > cellWidth) {
  //   cellWidth = cellHeight;
  // }
  makeTiles();
  // grid = create2dArray(cols, rows);
}

function draw() {
  background(220);
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
  let mouseYimproved;
  let yPosition = Math.floor(mouseY/cellHeight -3) 
  let xPosition = Math.floor(mouseX/cellWidth - 4);
  
  // if (mouseY > width/2-0.5*cols*cellWidth) {
  //   yPosition = Math.floor(mouseY/cellHeight -3);
  // }

  // for (let y = 0; y < cols; y++) {
  //   for (let x = 0; x < rows; x++) {
  //     if (board[y][x] === 0) {
  //       let topLCornerY = y*cellHeight + (height/5*3-0.5*rows*cellWidth);
  //       let topLCornerX = x*cellWidth + (width/2-0.5*cols*cellWidth);
  //     }
  //   }
  // }

  if (mouseY < height/5*3-0.5*cols*cellWidth && (xPosition >=0 && xPosition <4)) {
    mouseYimproved = mouseY + (height/5*3-0.5*cols*cellWidth);
    yPosition = Math.floor(mouseYimproved/cellHeight);
  }

  console.log("xposition = " + xPosition);
  console.log("mousex = " + mouseX);
  
  console.log("yposition = " + yPosition);
  console.log("mousey = " + mouseY);
  console.log("break------------");

  if (isNeighbour(xPosition, yPosition, board)) {
    swap(xPosition, yPosition, board);
  }
  
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
  for (let y = 0; y < cols; y++) {
    for (let x = 0; x < rows; x++) {
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
      // console.log(y*cellWidth + (width/2-0.5*rows*cellWidth));
    } 
  }
}

function isNeighbour(xPosition, yPosition, board) {
  let blankY, blankX;
  for (let y = 0; y < cols; y++) {
    for (let x = 0; x < rows; x++) {
      if (board[yPosition][xPosition] === -1) {
        blankY = board[yPosition];
        blankX = board[yPosition][xPosition];
      }
    } 
  }

  if (xPosition !== blankX && yPosition !== blankY) {
    return false;
  }

  if (abs(xPosition - blankX) === 1 || abs(yPosition - blankY) === 1) {
    return true;
  }
  return false;
}

function swap(xPosition, yPosition, board) {
  let nextTurn = board[xPosition];
  board[xPosition] = board[yPosition];
  board[yPosition] = nextTurn;

  // for (let y = 0; y < rows; y++) {
  //   for (let x = 0; x < rows; x++) {
      
  //   }
  // }

  return board;

}