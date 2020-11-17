class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.groundImage = loadImage("sprites/ground.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      imageMode(CENTER);
      fill("brown");
      image(this.groundImage,pos.x, pos.y, this.width, this.height);
      pop();
    }
  };