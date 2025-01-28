class Input {
    /** Store input states for our game */
    static keysDown = []

    /** Respond to key up events */
    static keyup(e) {
        let index = Input.keysDown.indexOf(e.code)
        Input.keysDown.splice(index, 1)
    }

    /** Respond to key down events */
    static keydown(e) {
        if (!Input.keysDown.includes(e.code))
            Input.keysDown.push(e.code)
    }
}