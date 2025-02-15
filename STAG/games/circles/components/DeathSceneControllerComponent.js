class DeathSceneControllerComponent extends Component {
  constructor() {
    super()
    this.timeSinceDeath = 0
    
  }
  update() {
    //This is the proper way to allows you to search for a specific Game Object in the scene. 
    //Then, you can search for a specific component of the game object to manipulate it
    currentScene.gameObjects.find(go => go.constructor.name == "ScoreTextGameObject").components.find(c=>c.constructor.name == "Text").text = "Score: " + Globals.score
    
    //Time that adds Time.ms
    this.timeSinceDeath += Time.ms

    //Way to change the current scene to restart the game after 2000 ms
    if (this.timeSinceDeath > 2000) {
      currentScene = new MainScene()
    }
  }
}