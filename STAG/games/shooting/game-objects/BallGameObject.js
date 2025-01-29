class BallGameObject extends GameObject{
    constructor(){
        super()

        let circle = new Circle()
        circle.fillStyle = "red"
        circle.strokeStyle = "orange"
        this.addComponent(circle)

        this.addComponent(new BallMovementComponent())
        
    }
}