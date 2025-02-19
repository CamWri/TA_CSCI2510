class ScoreTextGameObject extends GameObject {
    constructor(){
        super()
        this.transform.x = 0
        this.transform.y = 90
        this.addComponent(new Text())
    }
}