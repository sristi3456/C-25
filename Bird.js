class Bird extends Parent{
    constructor(x, y) {
      super(x,y,50,50);
      this.img=loadImage("sprites/bird.png");
    }
    
    display(){
    this.body.position.x=mouseX;
    this.body.position.y=mouseY;
    super.display();

    }
  }
  