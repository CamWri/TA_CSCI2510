class DeathSceneControllerComponent extends Component {
  constructor() {
    super()
    this.timeSinceDeath = 0
    
  }
  update() {
    currentScene.gameObjects.find(go => go.constructor.name == "ScoreTextGameObject").components.find(c=>c.constructor.name == "Text").text = "Score: " + Globals.score
    
    this.timeSinceDeath += Time.ms
    if (this.timeSinceDeath > 2000) {
      currentScene = new MainScene()
    }
  }
}