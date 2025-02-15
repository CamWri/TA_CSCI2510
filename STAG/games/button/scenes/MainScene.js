/** The main scene in our game */
class MainScene extends Scene {
  constructor() {
    super("lightblue")

    //Creates the ButtonGameObject and displays it at a specific point
    let buttomGameObject = new ButtonGameObject()
    buttomGameObject.transform.x = 500
    buttomGameObject.transform.y = 350

    //Adds the button game object to the list of current game objects in the scene
    //This allows the game object to be updated
    this.gameObjects.push(buttomGameObject)
  }
}