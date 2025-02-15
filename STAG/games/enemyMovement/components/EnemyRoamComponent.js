class EnemyRoamComponent extends Component{
    constructor(xMin, xMax, yMin, yMax) {
        super()
        //Range of X values this game object can move
        this.xRange = {min: xMin, max: xMax}

        //Range of Y values this game object can move
        this.yRange = {min: yMin, max: yMax}

        //The speed
        this.speed = 50

        //How long the gmae object waits when it reaches its point
        this.waitTime = 1000
        this.wait = false

        //Randomly generated x and y coordinate inside the bounds
        this.nextRoamCord = {x: Math.floor((Math.random() * (xMax - xMin)) + xMin) , y: Math.floor((Math.random() * (yMax - yMin)) + yMin)}
      }
      update() {
        //Use the distance formula to get the distance between the object and the next point
        let distance = Math.sqrt((this.nextRoamCord.x - this.parent.transform.x) ** 2 + (this.nextRoamCord.y - this.parent.transform.y) ** 2)
        
        if (distance > 5){
          //If you have to wait, decrease the countdown
          if(this.wait){
            this.waitTime -= Time.ms


            //If waittime is less than zero, reset the timer and set this.wait to false to allow movement again
            if (this.waitTime < 0){
              this.wait = false
              this.waitTime = 1000
            }
          } else {
            //Occurs when this.waitTime is False and is the movement towards the next point

            let theta = Math.atan2(this.nextRoamCord.y - this.parent.transform.y, this.nextRoamCord.x - this.parent.transform.x)
            this.parent.transform.x += (this.speed * Math.cos(theta)/ Time.ms)
            this.parent.transform.y += (this.speed * Math.sin(theta) / Time.ms) 
          }
    
      } else {
          //Generates the next corrdinate to go to and set this.wait to true so the object can wait

          this.nextRoamCord.x = Math.floor((Math.random() * (this.xRange.max - this.xRange.min)) + this.xRange.min)
          this.nextRoamCord.y = Math.floor((Math.random() *  (this.yRange.max - this.yRange.min)) + this.yRange.min)
          this.wait = true
      }
  }
}