class MainScene extends Scene {
    constructor() {
      super("lightgray")
      
      let playerGameObject = new PlayerGameObject()
      playerGameObject.transform.x = 200
      playerGameObject.transform.y = 200

      this.gameObjects.push(playerGameObject)

      this.gameObjects.push(new TextGameObject())
    }
}