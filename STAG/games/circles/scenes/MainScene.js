/** The main scene in our game */
class MainScene extends Scene {
  constructor() {
    super("lightgray")

    /** Main Controller */
    this.gameObjects.push( new MainSceneControllerGameObject())

    /** The game objects in the world */
    let circleGameObject = new CircleGameObject()
    circleGameObject.transform.x = 50
    circleGameObject.transform.y = 50
    this.gameObjects.push(circleGameObject)

    let enemyGameObject = new EnemyGameObject()
    enemyGameObject.transform.x = 200
    enemyGameObject.transform.y = 50
    this.gameObjects.push(enemyGameObject);

    /** The screen-space text */
    this.gameObjects.push(new ScoreTextGameObject())
  }
}