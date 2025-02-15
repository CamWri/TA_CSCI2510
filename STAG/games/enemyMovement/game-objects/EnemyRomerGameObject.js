class EnemyRomerGameObject extends GameObject{
    constructor(xMin, xMax, yMin, yMax){
        super()

        let circle = new Circle()
        circle.fillStyle = "red"
        circle.strokeStyle = "red"
        this.addComponent(circle)
        
        this.addComponent(new EnemyRoamComponent(xMin, xMax, yMin, yMax))

    }
}