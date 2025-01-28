class ScoreTextGameObject extends GameObject {
    constructor(){
        super()
        this.transform.x = 0
        this.transform.y = 30
        this.addComponent(new Text())
    }
}