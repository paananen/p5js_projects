class planet {
  float radius;
  float angle;
  float distance;
  planet planets[];
  float orbitSpeed;
  PVector v;
  PShape globe;

  planet(float r, float d, float o, PImage img) {
    v = PVector.random3D();
    radius = r;
    distance = d;
    v.mult(distance);
    angle = random(TWO_PI);
    orbitSpeed = o;
    
    noStroke();
    noFill();
    //fill(255);
    globe = createShape(SPHERE, radius);
    globe.setTexture(img);
  }

  void orbit() {
    angle = angle + orbitSpeed;
    if (planets != null) {
      for (int i = 0; i < planets.length; i++) {
        planets[i].orbit();
      }
    }
  }

  void spawnMoons(int total, int level) {
    planets = new planet[total];
    for (int i = 0; i < planets.length; i++) {
      float r = radius / (level * 1.5);
      float d = random((radius + r), (radius + r) * 2);
      float o = random(-0.05, 0.05);
      int index = int(random(0, textures.length));
      planets[i] = new planet(r, d, o, textures[index]);
      if (level < 2) {
        int num = int(random(0, 3));
        planets[i].spawnMoons(num, level + 1);
      }
    }
  }

  void show() {
    pushMatrix();
    noStroke();
    fill(255);
    PVector v2 = new PVector(1, 0, 1);
    PVector p = v.cross(v2);
    rotate(angle, p.x, p.y, p.z);
    translate(v.x, v.y, v.z);
    
    shape(globe);
    //sphere(radius);
    
    if (planets != null) {
      for (int i = 0; i < planets.length; i++) {
        planets[i].show();
      }
    }
    popMatrix();
  }
}