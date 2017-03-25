import peasy.*;
import peasy.org.apache.commons.math.*;
import peasy.org.apache.commons.math.geometry.*;

PeasyCam cam;
float x = 0.1;
float y = 0;
float z = 0;

float a = 10;
float b = 28;
float c = 8.0 / 3.0;

ArrayList<PVector> points = new ArrayList<PVector>();

void setup() {
  size(600, 600, P3D);
  colorMode(HSB);
  cam = new PeasyCam(this, 0, 0, 0, 600);
}

void draw() {
  background(0);

  float dt = 0.01;
  float dx = (a * (y - x)) * dt;
  float dy = (x * (b - z) - y) * dt;
  float dz = (x * y - c * z) * dt;
  x = x + dx;
  y = y + dy;
  z = z + dz;

  points.add(new PVector(x, y, z));

  scale(5);
  stroke(255);
  noFill();
  
  float hu = 0;
  beginShape();
  for (PVector v : points) {
    stroke(hu, 255, 255);
    vertex(v.x, v.y, v.z);
    //PVector offset = PVector.random3D();
    //offset.mult(sin(0.1));
    //v.add(offset);
    hu += 0.1;
    if (hu >255){
      hu = 0;
    }
  }
  endShape();
  //println(x, y, z, frameRate);
}