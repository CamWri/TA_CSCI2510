class ButtonGameObject extends GameObject{
    constructor(){
        super()

        //Manually adjust the rectangles colors and add the component to the ButtonGameObject
        let rectangle = new Rectangle()
        rectangle.fillStyle = "black"
        rectangle.strokeStyle = "blue"
        this.addComponent(rectangle)

        //Component to change the color of the game object 
        this.addComponent(new ButtonControllerComponent())
        
    }
}