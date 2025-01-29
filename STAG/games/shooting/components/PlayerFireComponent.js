class PlayerFireComponent extends Component{
    constructor() {
        super()
        this.timeSinceLastShot = 0
    }

    update() {
      this.timeSinceLastShot += Time.ms
      if (this.timeSinceLastShot > 500 & Input.keysDown.includes("Space")){
        this.timeSinceLastShot = 0
        let ballGameObject = new BallGameObject()
        ballGameObject.transform.x = this.parent.transform.x + 50
        ballGameObject.transform.y = this.parent.transform.y

        currentScene.gameObjects.push(ballGameObject)
      }
    }
}