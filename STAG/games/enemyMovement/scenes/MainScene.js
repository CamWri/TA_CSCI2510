class MainScene extends Scene {
    constructor() {
      super("lightgray")
      
      let enemyFixedPath = new EnemyFixedPathGameObject([[120, 400], [700, 200], [225, 667], [350, 300]])
      enemyFixedPath.transform.x = 120
      enemyFixedPath.transform.y = 400
      this.gameObjects.push(enemyFixedPath)

      let enemyRoamer = new EnemyRomerGameObject(200, 1000, 400, 700)
      enemyRoamer.transform.x = 550
      enemyRoamer.transform.y = 550
      this.gameObjects.push(enemyRoamer)

      this.gameObjects.push(new TextGameObject())
    }
}