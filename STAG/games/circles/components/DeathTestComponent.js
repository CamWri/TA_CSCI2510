class DeathTestComponent extends Component {
  update() {
    //Check to see if we have a collision
    //First, find the other object
    let circleGameObject = currentScene.gameObjects.find(go => go.constructor.name == "CircleGameObject")

    //Then see if we are in collision
    let distance = Math.sqrt((circleGameObject.transform.x - this.parent.transform.x) ** 2 + (circleGameObject.transform.y - this.parent.transform.y) ** 2)
    if (distance < 50 + 50)
      currentScene = new DeadScene()
  }

}