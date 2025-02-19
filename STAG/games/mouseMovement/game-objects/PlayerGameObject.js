class PlayerGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new Circle()) 

        this.shouldFollow = false

        if (this.shouldFollow){
            this.addComponent(new PositionLockingMovement()) 
        } else{
            this.addComponent(new PointAndClickMovement())
        }
    }
}