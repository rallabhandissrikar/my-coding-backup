class tr{
  constructor(x1,y1,x2,y2,x3,y3){
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0;
    }
    this.body = Bodies.triangle(x1,y1,x2,y2,x3,y3);
    this.x1 = x1;
    this.y1 = x1;
    this.x2 = x2;
    this.x2 = x2;
    this.x3 = x3;
    this.x4 = x4;

    Worl.add(world,this.Bodies);
  }

  display(){
   
  }
}