class Connection2{
    constructor(bodyD,pointE){
        var options={
            bodyD:bodyD,
            pointE:pointE,
            stiffness:2.0,
            length:10
        }
        this.connector = Constraint.create(options);
        World.add(world,this.connector);
    }
    display(){
        if(this.connector.bodyD){
            var pointD  = this.connector.bodyD.position;
            var pointE  = pointE;
            strokeWeight(1.0);
            stroke("black");
            line(pointD.x,pointD.y,pointE.x,pointE.y);
        }
    }
}