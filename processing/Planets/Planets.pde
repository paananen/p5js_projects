import peasy.*;
import peasy.org.apache.commons.math.*;
import peasy.org.apache.commons.math.geometry.*;

planet sun;
PeasyCam cam;
PImage sunTexture;
PImage[] textures = new PImage[7];
int sunradius = 80;

void setup() {
  size(1000, 600, P3D);
  sunTexture = loadImage("sun.jpg");
  textures[0] = loadImage("earth.jpg");
  textures[1] = loadImage("jupiter.jpg");
  textures[2] = loadImage("mars.jpg");
  textures[3] = loadImage("mercury.jpg");
  textures[4] = loadImage("neptune.jpg");
  textures[5] = loadImage("pluto.jpg");
  textures[6] = loadImage("venus.jpg");

  cam = new PeasyCam(this, 500);

  sun = new planet(sunradius, 0, 0, sunTexture);
  sun.spawnMoons(2, 1);
}

void draw() {
  background(0); 
  //lights();
  //ambientLight(50, 50, 50);
  //pointLight(255, 255, 255, 0, 0, 0);
  
  float dir = sunradius *4;
  int angle = 0;
  spotLight(255, 255, 255, dir, 0, 0, -1, 0, 0, angle, 0);
  spotLight(255, 255, 255, -dir, 0, 0, 1, 0, 0, angle, 0);
  spotLight(255, 255, 255, 0, dir, 0, -1, 0, 0, angle, 0);
  spotLight(255, 255, 255, 0, -dir, 0, 0, 1, 0, angle, 0);
  spotLight(255, 255, 255, 0, 0, dir, 0, -1, 0, angle, 0);
  spotLight(255, 255, 255, 0, 0, -dir, 0, 0, 1, angle, 0);
  
  sun.show();
  sun.orbit();
}