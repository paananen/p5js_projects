class Spring extends VerletSpring {

  Spring(Particle a, Particle b) {
    super(a, b, w, 1);
  }
  
  void display() {
    stroke(255);
    strokeWeight(1);
    line(a.x, a.y, a.z, b.x, b.y, b.z);
  }
}