class TextGameObject extends GameObject{
    constructor(){
        super()

        this.transform.x = 0
        this.transform.y = 30

        let text = new Text()
        text.text = ""
        
        this.addComponent(text)

        this.addComponent(new TextController())
    }
}