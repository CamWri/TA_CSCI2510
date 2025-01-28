/** The final scene in our game */
class DeadScene extends Scene {
  constructor() {
    super("gray")

    /** Main Controller */
    this.gameObjects.push(new DeathSceneControllerGameObject())

    /** The screen-space text */
    this.gameObjects.push(new ScoreTextGameObject())

    let deathTextGameObject = new DeathTextGameObject()
    deathTextGameObject.transform.x = 0
    deathTextGameObject.transform.y = 60
    this.gameObjects.push(deathTextGameObject)
  }
}
