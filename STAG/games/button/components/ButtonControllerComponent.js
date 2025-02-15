class ButtonControllerComponent extends Component{
    constructor(){
        super()

        //Variable to keep track of if the mouse is hovering over the button
        this.isHovering = false
    }

    update(){
        //This is a hard coded collisions system where you check if the mouse is in the x and y bounds of the button

        //If you wanted to modularize it to adjust, in the rectangle component in the game engine, you would need to have
            //your width and length as constructor variables (just like the fillStyle and fillStroke) 
        
        if ((Input.mousePosition.x > this.parent.transform.x && Input.mousePosition.x < this.parent.transform.x + 300) 
            && (Input.mousePosition.y > this.parent.transform.y && Input.mousePosition.y < this.parent.transform.y + 100)){
            this.isHovering = true
        } else {
            this.isHovering = false
        }

        //If hovering and clicking, change the button to red
        if (this.isHovering && Input.mouseDown){
            this.parent.components[1].fillStyle = "red"
        }

        //If hovering and not clicking, change the button to yellow
        if (this.isHovering && !Input.mouseDown){
            this.parent.components[1].fillStyle = "yellow"
        }

        //If not hovering and not clicking, change the button to black
        if (!this.isHovering && !Input.mouseDown){
            this.parent.components[1].fillStyle = "black"
        }
    }
}