class PlayerGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new Circle())
        this.addComponent(new KeyboardMovement())
        this.addComponent(new PlayerFireComponent())
        
    }
}