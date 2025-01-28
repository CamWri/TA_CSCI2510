class MainSceneControllerGameObject extends GameObject{
  constructor(){
    super()
    this.addComponent(new MainSceneControllerComponent());
  }
}