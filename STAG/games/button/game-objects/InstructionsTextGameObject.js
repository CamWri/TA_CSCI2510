class InstructionsTextGameObject extends GameObject{
    constructor(){
        super()

        this.transform.x = 0
        this.transform.y = 30

        let text = new Text()
        text.text = "Hover your mouse and click the button"
        
        this.addComponent(text)
    }
}