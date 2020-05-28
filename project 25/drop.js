class drop extends BaseClass{
    constructor(x,y){
      super(x,y,3,20);
      this.image = loadImage("droplet.png");
    }
    display(){
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      fill("white")
      super.display();
    }
  }