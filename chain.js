// the class
class chain
{
    
    constructor(bodyA,bodyB)
    {
        // jason for creating constraint 
        var options = {
            bodyA:bodyA,
            bodyB: bodyB,
            stiffness: 0.03,
            length:10
        }
        // creating the constraint
      this.chain =  Constraint.create(options)

      /// adding to the world
      World.add(world,this.chain)
    }

    display()
    {
        var pos1 = this.chain.bodyA.position
   // to not write alot?
        var pos2 = this.chain.bodyB.position 
     // to increase the thickness of the chain
        strokeWeight(4)

        // to display the chain
        line(pos1.x,pos1.y,pos2.x,pos2.y)
    }
}