class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.pic=loadImage("sprites/smoke.png")
    this.path=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if(this.body.speed>15&&this.body.position.x>200){
      this.path.push([this.body.position.x,this.body.position.y])

    }
    
    super.display();
    for(var i=0;i<this.path.length;i=i+1){
      image(this.pic,this.path[i][0],this.path[i][1])
    }

    
  }
}
