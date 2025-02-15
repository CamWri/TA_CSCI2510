class EnemyFixedPathComponent extends Component{
    constructor(pathList){
        super()

        //The list of coordinates the this object will go to
        //Ex: [[100,100], [50, 50]]
        //In the example, the game object will move between (100, 100) and (50, 50)
        this.pathList = pathList

        //The index of the coordinate the object is heading to
        this.currentIndex = 0

        //A variable to keep track of the current point
        this.currentPoint = pathList[0]

        this.speed = 75
    }

    update(){    
        //Distance formula between the current point the object is going to and the object itself
        let distance = Math.sqrt((this.currentPoint[0] - this.parent.transform.x) ** 2 + (this.currentPoint[1] - this.parent.transform.y)** 2)
        
        //If the distance is close, you go to the next value in pathList and change the currentPoint
        //If its not close, then you move to that point
        if (distance < 5){
            if (this.currentIndex <= this.currentPoint.length){
                this.currentIndex++
            } else {
                this.currentIndex = 0
            }
            
            this.currentPoint = this.pathList[this.currentIndex]
        } else {
            //Calculated the theta between the next point in the path and the current (x,y) coordinate
            let theta = Math.atan2(this.currentPoint[1] - this.parent.transform.y, this.currentPoint[0] - this.parent.transform.x)

            //Then used Polar Coordinate Functions x = R * cos(theta) and y = R * sin(theta) to move to the next spot
            this.parent.transform.x += (this.speed * Math.cos(theta)/ Time.ms)
            this.parent.transform.y += (this.speed * Math.sin(theta) / Time.ms) 
        }
    }
}