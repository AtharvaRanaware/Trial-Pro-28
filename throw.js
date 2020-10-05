class Throw{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
           pointB: pointB,
            stiffness: 0.03,
            length: 10
        }
       
       this.pointB=pointB;
        this.throw1 = Constraint.create(options);
        World.add(world, this.throw1);
    }


    attach(body) {

        this.throw1.bodyA = body;
    
    
    }

    fly() {

        this.throw1.bodyA=null;
    }

    display(){

        if (this.throw1.bodyA){

        

        var pointA = this.throw1.bodyA.position;
        var pointB = this.pointB
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}