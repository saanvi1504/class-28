class Chain {
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length:30,
            stiffness:0.2 
        }
        this.pointB = pointB
        this.chain = Matter.Constraint.create(options)
        World.add(world,this.chain)
    }
    display (){
     if(this.chain.bodyA!==null){
        var pointA = this.chain.bodyA.position
        var pointB = this.pointB
        strokeWeight(4)
        line(pointA.x, pointA.y, pointB.x, pointB.y)  
     }
    }
    birdRelease (){
        this.chain.bodyA = null
    }
}