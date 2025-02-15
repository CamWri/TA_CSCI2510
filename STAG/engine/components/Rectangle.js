class Rectangle extends Component{
  constructor(){
    super()
    this.fillStyle = "green"
    this.strokeStyle = "purple"
    this.lineWidth = 5
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.fillStyle
    ctx.strokeStyle = this.strokeStyle
    ctx.lineWidth = this.lineWidth 
    ctx.rect(this.parent.transform.x, this.parent.transform.y, 300, 100)
    ctx.fill()    
    ctx.stroke()
  }
}