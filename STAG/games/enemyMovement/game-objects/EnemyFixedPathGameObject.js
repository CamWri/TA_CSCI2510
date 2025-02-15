class EnemyFixedPathGameObject extends GameObject{
    constructor(listOfPoints){
        super()

        let circle = new Circle()
        circle.fillStyle = "orange"
        circle.strokeStyle = "orange"
        this.addComponent(circle)

        this.listOfPoints = listOfPoints

        this.addComponent(new EnemyFixedPathComponent(listOfPoints))
    }
}