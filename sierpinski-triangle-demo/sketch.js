// Sierpinski Triangle
// Katharine
// Dec 19, 2022
//
// Recursion demo 1

let triangleVertices = [
  {x: 500, y: 100},
  {x: 100, y: 600},
  {x: 900, y: 600}
];

let depth = 0;
let colours = ["lightblue", "red", "purple", "white", "blue", "pink", "brown", "black", "white"];

function setup() {
  createCanvas(1000, 700);
}

function draw() {
  background(220);
  sierpinski(triangleVertices, depth);
}

function mousePressed() {
  if (depth < 8) {
    depth++;
  }
}

function sierpinski(points, depth) {
  fill(colours[depth]);
  noStroke;
  triangle(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y);

  if (depth > 0) {
    sierpinski([points[0], getMidpoint(points[0], points[1]), getMidpoint(points[0], points[2])], depth-1);
    sierpinski([points[1], getMidpoint(points[0], points[1]), getMidpoint(points[1], points[2])], depth-1);
    sierpinski([points[2], getMidpoint(points[0], points[2]), getMidpoint(points[1], points[2])], depth-1);
  }
}

function getMidpoint(point1, point2) {
  let xDif = point1.x + point2.x;
  let yDif = point1.y + point2.y;
  let theMidpoint = {x: xDif/2, y: yDif/2};
  return theMidpoint;
}