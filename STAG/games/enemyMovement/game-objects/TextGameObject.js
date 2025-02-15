class TextGameObject extends GameObject{
    constructor(){
        super()

        this.transform.x = 0
        this.transform.y = 30

        let text = new Text()
        text.text = "Roaming Enemy is red and the Fixed Path Enemy is orange"
        this.addComponent(text)
    }
}