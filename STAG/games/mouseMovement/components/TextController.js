class TextController extends Component{
    constructor(){
        super()
    }

    update(){
        //Search the current scene to find the Player Game Object to see the value of shouldFollow
        let movementType = currentScene.gameObjects.find(go => go.constructor.name == "PlayerGameObject").shouldFollow

        //Search to find the parents Text Game Object
        let textGameObjectText = this.parent.components.find(c=>c.constructor.name == "Text")


        //Depending on the movement type, you switch between the text being these two phrases
        if (movementType){
            textGameObjectText.text = "The object follows your mouse"
        } else {
            textGameObjectText.text = "The object goes to your last click position"
        }
    }
}