
var box1;
var b2;

function setup() {
  createCanvas(600, 400);

  box1 = new Box();
  b2 = new Box();
  
}

function draw() {
  background(220);

  box1.show();
  box1.set_width(100);

  b2.show();
  b2.set_width(200);
  b2.y = 100;

}

