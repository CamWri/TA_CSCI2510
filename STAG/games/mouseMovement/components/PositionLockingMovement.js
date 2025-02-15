class PositionLockingMovement extends Component{
    constructor() {
        super()
        //The speed of an object(how far the object can travel in one frame)
        this.speed = 100
    }

    update() {
        let circleCenterX = this.parent.transform.x
        let circleCenterY = this.parent.transform.y


        let distance = Math.sqrt((Input.mousePosition.x - circleCenterX) ** 2 + (Input.mousePosition.y - circleCenterY) ** 2)

        if (distance < 5){
            this.parent.transform.x = Input.mousePosition.x
            this.parent.transform.y = Input.mousePosition.y
        } else{
            //Constantly updates the obejct towards the mouse

            let theta = Math.atan2(Input.mousePosition.y - circleCenterY, Input.mousePosition.x - circleCenterX)

            this.parent.transform.x += (this.speed * Math.cos(theta)/ Time.ms)
            this.parent.transform.y += (this.speed * Math.sin(theta) / Time.ms) 
        }

    }
}