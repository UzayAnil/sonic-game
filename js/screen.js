//////2//////

// Create the game screen defaults
gameScreenOne = {
  canvas: document.createElement("canvas"),
  init() {
    this.canvas.width = screenW;
    this.canvas.height = screenH;
    this.canvas.style.display = "block"
    this.canvas.style.marginLeft = "auto";
    this.canvas.style.marginRight = "auto";
    this.canvas.x = 0;
    this.canvas.y = 0;
    this.canvas.style.background = 'lightblue'
    this.ctx = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    
    window.addEventListener('keydown', function (e) {
            gameScreenOne.keys = (gameScreenOne.keys || []);
            gameScreenOne.keys[e.keyCode] = (e.type == "keydown");
        })
        window.addEventListener('keyup', function (e) {
            gameScreenOne.keys[e.keyCode] = (e.type == "keydown");
          })

    /* single key press
    window.addEventListener('keydown', function(e) {
      gameScreenOne.key = e.keyCode;
    })
    window.addEventListener('keyup', function(e) {
      gameScreenOne.key = false;
    })
    */
  },
  run() {
    runIt = true;
    //console.time("test")//test for browser timing
    render()
  },

  // method to clear the screen
  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  },
}
