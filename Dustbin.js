class Dustbin{
 constructor(x,y,width, height) {
  var option = {
   'restitution':0,
   'friction':1,
   'density':0.1
  }
   this.body = Bodies.rectangle(x,y,width, height,option)
   this.width = width
   this.height = height


   world.add(world, this.body)
 }
 display(){
  rectmode(CENTER)

fill(255)

rect(this.body.position.x,this.body.position.y,this.width,this.height)
 }
};