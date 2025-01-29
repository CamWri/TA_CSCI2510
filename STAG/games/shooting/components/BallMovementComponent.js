class BallMovementComponent extends Component{
    constructor() {
        super()
        this.timeSinceLastShot = 0
    }

    update() {
        let speed = 1000
        this.parent.transform.x += speed / Time.fps
    }
}