class InstructionsTextGameObject extends GameObject{
    constructor(){
        super()

        this.transform.x = 0
        this.transform.y = 30

        let text = new Text()
        text.text = "Arrow keys to move, avoid collision with other circle"
        
        this.addComponent(text)

    }
}