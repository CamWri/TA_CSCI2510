/** The main scene in our game */
class MainScene extends Scene {
  constructor() {
    super("lightgray")

    /** Main Controller */
    this.gameObjects.push( new MainSceneControllerGameObject())

    /** The game objects in the world */
    let circleGameObject = new CircleGameObject()
    circleGameObject.transform.x = 150
    circleGameObject.transform.y = 150
    this.gameObjects.push(circleGameObject)

    let enemyGameObject = new EnemyGameObject()
    enemyGameObject.transform.x = 300
    enemyGameObject.transform.y = 150
    this.gameObjects.push(enemyGameObject);

    /** The screen-space text */
    this.gameObjects.push(new ScoreTextGameObject())
  }
}