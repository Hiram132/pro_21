class Pared {
constructor(x,y,w,h){

var op_pared = {
isStatic : true
}

this.body = Matter.Bodies.rectangle(x,y,w,h,op_pared);
this.w = w;
this.h = h;
World.add(world, this.body)
}

show () {
var pos = this.body.position;

push ();

rectMode(CENTER);
fill("yellow");
rect(pos.x,pos.y,this.w,this.h);

pop ();


}

}