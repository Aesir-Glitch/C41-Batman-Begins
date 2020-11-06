class Umbrella {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution: 0.8,
          friction: 0.1,
          density: 2.6
              }
      this.body = Bodies.rectangle(x,y,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("images/Walking Frame/walking_1.png");
            }
    
  display() {
      var pos =this.body.position;
      ellipseMode(CENTER);
      ellipse(this.body.position.x,this.body.position.y,50,50);
  }
};