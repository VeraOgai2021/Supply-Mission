class Package{
    constructor(x,y,w,h){
        var pack = {
            mass: 1,
            restitution: 0.1,
          }
          this.body = Bodies.rectangle(x,y,w,h,pack);
          this.height = h;
          this.width = w;
          World.add(world, this.body);
    }

    display(){
        rectMode(CENTER); 
        rect(this.body.position.x, this.body.position.y, this.height, this.width);
    }
}