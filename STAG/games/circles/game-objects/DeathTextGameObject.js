class DeathTextGameObject extends GameObject {
    constructor(){
        super()

        let text = new Text()
        text.text = "You Died"
        this.addComponent(text)
    }
}