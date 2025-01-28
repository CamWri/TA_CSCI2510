class MainSceneControllerComponent extends Component{
  constructor(){
    super()
    Globals.score = 0;
  }
  update(){
    Globals.score++
    currentScene.gameObjects.find(go => go.constructor.name == "ScoreTextGameObject").components.find(c=>c.constructor.name == "Text").text = "Score: " + Globals.score
  }
}