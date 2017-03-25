/*
version from video here: https://www.youtube.com/watch?v=bjULmG8fqc8

*/

var socket;

function setup() {
  // createCanvas(800, 600);
  // createCanvas(windowWidth, windowHeight);
  createCanvas(window.innerWidth - 20, window.innerHeight - 20);
  background(51);
  // socket = io.connect('http://127.0.0.1:3000');
  socket = io();
  socket.on('mouse', newDrawing);
}

function newDrawing(data) {
  // console.log('recieved ' + data.x + ', ' + data.y);
  noStroke();
  fill(255, 0, 100);
  ellipse(data.x, data.y, 5, 5);
}

function mouseDragged() {
  // console.log('sending ' + mouseX + ', ' + mouseY);
  var data = {
    x: mouseX,
    y: mouseY
  }
  socket.emit('mouse', data);
  noStroke();
  fill(255);
  ellipse(mouseX, mouseY, 5, 5);
}

function draw() {
}
