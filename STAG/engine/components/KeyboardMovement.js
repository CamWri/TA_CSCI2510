class KeyboardMovement extends Component {
    update() {
        let speed = 100
        if (Input.keysDown.includes("ArrowLeft"))
            this.parent.transform.x -= speed / Time.fps
        if (Input.keysDown.includes("ArrowRight"))
            this.parent.transform.x += speed / Time.fps
        if (Input.keysDown.includes("ArrowUp"))
            this.parent.transform.y -= speed / Time.fps
        if (Input.keysDown.includes("ArrowDown"))
            this.parent.transform.y += speed / Time.fps
    }
}