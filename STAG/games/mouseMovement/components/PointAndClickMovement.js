class PointAndClickMovement extends Component{
    constructor() {
        super()
        //Speed variable
        this.speed = 100

        this.shouldMove = false

        this.clickedXCord
        this.clickedYCord
    }

    update() {
        //Gets the X and Y coordinates of the mouse and allows the object to move
        if (Input.mouseDown){
            this.shouldMove = true

            this.clickedXCord = Input.mousePosition.x
            this.clickedYCord = Input.mousePosition.y
        }

        //If you should move, calculate the distance between the clicked points and the current location of this object
        if (this.shouldMove){
            let distance = Math.sqrt((this.clickedXCord - this.parent.transform.x)** 2 + (this.clickedYCord - this.parent.transform.y)**2)

            //If the distance is short, prevent this object from moving and snap it to the position that was clicked
            if (distance < 5){
                this.shouldMove = false

                this.parent.transform.x = this.clickedXCord
                this.parent.transform.y = this.clickedYCord

            } else{
                //Use tanget to get the angle
                let theta = Math.atan2(this.clickedYCord - this.parent.transform.y, this.clickedXCord - this.parent.transform.x)
    
                //Use X = Rcos(theta) and Y = Rsin(theta) to update the position of the object
                this.parent.transform.x += (this.speed * Math.cos(theta)) / Time.ms
                this.parent.transform.y += (this.speed * Math.sin(theta)) / Time.ms 
            }
        } 
    }    
}