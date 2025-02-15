class PlayerGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new Circle())

        /*EITHER do Position Locking Movement or Point-and-Click Movement*/

        this.addComponent(new PositionLockingMovement())   
        //this.addComponent(new PointAndClickMovement())     
    }
}