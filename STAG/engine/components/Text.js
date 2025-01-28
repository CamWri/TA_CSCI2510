class Text extends Component{
  constructor(){
    super()
    this.text = "[No Text]"
  }
  draw(ctx) {
    ctx.fillStyle = "black"
    ctx.font = "30px Times"
    ctx.fillText(this.text, this.parent.transform.x, this.parent.transform.y)
  }
}