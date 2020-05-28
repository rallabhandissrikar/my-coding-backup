class tenat {
    constructor(x1,y1,x2,y2,x3,y3) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.triange(x1,y1,x2,y2,x3,y3);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      triangleMode(CENTER);
      fill(255);
      triangle(0,0,0,0,0,0);
      pop();
    }
  }