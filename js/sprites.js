/////3///////

// set up static components

///////BACKGROUND
bg = new component(1600, screenH, "images/sonic-bg1.png", 0, 0, null, null, "background") // background image
levelAlert = new component("80px", "Consolas", "white", 100, 100, null, null, "text")
enemy = new component(null, null, "black", Math.floor(Math.random() * (((screenW * 1.5)+ bombDist) - (screenW + bombDist)) + (screenW + bombDist)), ground-30, null, null, "star", 10, 80, 20)
myScore = new component("50px", "Consolas", "white", 100, 40, null, null, "text")
myLives = new component("50px", "Consolas", "white", 400, 40, null, null, "text") 
bluePortal = new component(50, 85, "images/blue-portal-small.png", screenW, ground-30-55, null, null, "image")
orangePortal = new component(50, 85, "images/orange-portal-small.png", (screenW + 600), ground-30-55, null, null, "image")
finishLine = new component(100, 100, "images/finish-small.png", screenW, ground-80, null, null, "image")
success = new component(screenW, screenH, "images/big-sonic.png", 0, 0, null, null, "background")
jumpBtn = new component(150, 150, "rgba(200,0,0,.5)", screenW - 150, screenH - 150)
pauseBtn = new component(50, 50, "green", 200, 250)
startOverBtn = new component(50, 50, "green", 150, 200)
duckBtn = new component(50, 50, "green", 250, 200)
//testPiece = new component(50, 50, "purple", 300, 300)
/////SONIC SPRITE
// 73.25px wide/ 8 frames  585.6 total
// 80px height
sonicRun = new imgInit('images/sonic-sprites.png')
sonicSlide = new imgInit('images/sonic-slide.png')

sonic = new sprite({
width: 585,
height: 80,
imgSrc: sonicRun,
numberOfFrames: 8,
ticksPerFrame: 4,
x: 150,
y: sonicBottom,
dx: 10,
dy: 0,

}); // end sonic options


slideSonic = new sprite({
width: 299,
height: 80,
imgSrc: sonicSlide,
numberOfFrames: 4,
ticksPerFrame: 20,
x: 150,
y: 1000,
dx: 10,
dy: 0,


}) // Create sprite


redCoin = new sprite({
  width: 500,
  height: 50,
  imgSrc: new imgInit('images/red-coin-small.png'),
  numberOfFrames: 10,
  ticksPerFrame: 4,
  x: Math.floor(Math.random() * (((screenW * 1.5)+ bombDist) - (screenW + bombDist)) + (screenW + bombDist)),
  //x: Math.floor(Math.random() * ((screenW * 1.5) - screenW) + screenW),
  y: ground - 50,
  dx: 2,
  dy: 2,
}); // end red coin options

redYoshi = new sprite({
  width: 500,
  height: 90,
  imgSrc: new imgInit('images/yoshi-500x90-right.png'),
  numberOfFrames: 5,
  ticksPerFrame: 3,
  x: 500,
  y: (screenH - 90 - screenH*.15),
  dx: 1,
  dy: 1
}); // end redYoshi options



    
// set up a constructor for each game piece
function component(width, height, color, x, y, dx, dy, type, spikes, outerRadius, innerRadius) {
  //instantiate variables
  this.type = type
  if (type == "image" || type == "background") {
    this.image = new Image();
    this.image.src = color;
  }
  this.spikes = spikes
  this.outerRadiu = outerRadius
  this.innerRadius = innerRadius
  this.width = width
  this.height = height
  this.color = color
  this.x = x
  this.y = y
  this.dx = dx
  this.dy = dy
    // create a method to reset the defaults on an object 
  this.setDefault = () => {
    this.width = width
    this.height = height
    this.color = color
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
  }
  this.draw = () => {
    ctx = gameScreenOne.ctx
    if (this.type == "image" || this.type == "background") {
      ctx.drawImage(this.image,
        this.x,
        this.y,
        this.width, this.height);
      if (this.type == "background") {
      ctx.drawImage(this.image, 
                this.x + this.width, 
                this.y,
                this.width, this.height);

    }
    }  else if (this.type == "text") {
      ctx.font = this.width + " " + this.height;
      ctx.fillStyle = color;
      ctx.fillText(this.text, this.x, this.y);
    } else if (this.type == "star"){

        rot=Math.PI/2*3;
      this.cx=this.x;
      this.cy=this.y;
      

      step=Math.PI/this.spikes;

      ctx.beginPath();
      ctx.moveTo(this.cx, this.cy-this.outerRadius)
      for(i=0;i<this.spikes;i++){
        this.myX=this.cx+Math.cos(rot)*this.outerRadius;
        this.myY=this.cy+Math.sin(rot)*this.outerRadius;
        ctx.lineTo(this.myX,this.myY)
        rot+=step

        this.myX=this.cx+Math.cos(rot)*this.innerRadius;
        this.myY=this.cy+Math.sin(rot)*this.innerRadius;
        ctx.lineTo(this.myX,this.myY)
        rot+=step
      }
      ctx.lineTo(this.cx,this.cy-this.outerRadius);
      ctx.closePath();
      ctx.lineWidth=5;
      ctx.strokeStyle=color;
      ctx.stroke();
      ctx.fillStyle='red';
      ctx.fill();
} else {
      ctx.fillStyle = color
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }
  }
  this.move = () => {
      // standard linear motion equation
      //this.x += this.dx
      //this.y += this.dy
    }
    /* beta testing wall bounce
    this.bounce = (otherObj) => {
         Still beta testing
        if (this.x <= otherObj.x || this.x + this.width >= otherObj.width) {
          this.dx = -this.dx
          gameScreenOne.wallHits++
        }
        if (this.y <= otherObj.y || this.y + this.height >= otherObj.height) {
          this.dy = -this.dy
          gameScreenOne.wallHits++
        }
        this.x += this.dx
        this.y += this.dy
          // a method to pause the game for testing
          /*
      if (firstSquare.x >= 100) {
        runIt = false
        startOverBtn.style.display = "block"
      }
      
      } // end wall bounce*/
    /* beta testing crash physics
  this.hitSomething = (otherObj) => {
      if (this.y > otherObj.y && this.y < otherObj.y + otherObj.height && (this.x + this.width >= otherObj.x || this.x <= otherObj.x + otherObj.width)) {
        this.dx = -this.dx
        this.x += this.dx
      }
      if (this.x > otherObj.x && this.x < +otherObj.x + otherObj.width && (this.y + this.height > otherObj.y || this.y < otherObj.y + otherObj.height)) {
        this.dy = -this.dy
        this.y += this.dy
      }
    } // end hitSomething
    */
  this.freeFall = () => {
      if (gameScreenOne.frameNo > 0) {
        this.dy += 0.16279039 / 60
        this.y += this.dy
      }
    } // end freefall
  this.portalCrash = (obj) => {
    myLeft = this.x
    
    if (myLeft >= obj.x && myLeft <= obj.x + (obj.width/obj.numberOfFrames) && this.y >= (obj.y - 10) && this.y <= obj.y + obj.height - (obj.height/2)) {
     // console.log('we crashed!')
      
      bomb = true
      //myCoins.push(redCoin)
      return bomb
    }
  }
  this.bombCrash = (obj) => {
    myLeft = this.x
    
    if (myLeft >= obj.x && myLeft <= obj.x + (obj.width/obj.numberOfFrames) && this.y >= (obj.y - 10) && this.y <= obj.y + obj.height) {
     // console.log('we crashed!')
      
      bomb = true
      //myCoins.push(redCoin)
      return bomb
    }
  }
  this.clicked = () => {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var clicked = true;
        if ((mybottom < gameScreenOne.y) || (mytop > gameScreenOne.y) || (myright < gameScreenOne.x) || (myleft > gameScreenOne.x)) {
            clicked = false;
        }
        return clicked;
    }
  /* crash test in BETA
  this.checkCrashX = (otherObj) => {
  crash = false
  if (this.y + this.height < otherObj.y  this.y > otherObj.y + otherObj.hthis.x + this.width < otherObj.x || this.x > otherObj.x + otherObj.w || ){
  crash = false} else {crash = true}
  return crash
  }// crashWith
  */
} // End component Constructor

function imgInit(color) {
  myImg = new Image()
  myImg.src = color
  return myImg
}

function sprite(options) {
  //this = {}
  
  this.frameIndex = 0
  this.tickCount = 0
  this.ticksPerFrame = options.ticksPerFrame || 0
  this.numberOfFrames = options.numberOfFrames || 1
  this.width = options.width;
  this.height = options.height;
  this.image = options.imgSrc;
  this.x = options.x || 0;
  this.y = options.y || 0;
  this.dx = options.dx || 0;
  this.dy = options.dy || 0;
  this.sheetUpdate = () => {
    this.tickCount += 1;
    if (this.tickCount > this.ticksPerFrame) {
      this.tickCount = 0;
      // If the current frame index is in range
      if (this.frameIndex < this.numberOfFrames - 1) {
        // Go to the next frame
        this.frameIndex += 1;
      } else {
        this.frameIndex = 0;
      }
    }
  }
  this.draw = () => {
      // Draw the animation
      gameScreenOne.ctx.drawImage(
        this.image, this.frameIndex * this.width / this.numberOfFrames, 0, this.width / this.numberOfFrames, this.height, this.x, this.y, this.width / this.numberOfFrames, this.height);
    } // end draw
  this.move = () => {
    //if (gameScreenOne.key && gameScreenOne.key == 37) {this.x += -4; }
    //if (gameScreenOne.key && gameScreenOne.key == 39) {this.x += 4; }
    if (sonic.y == sonicBottom && gameScreenOne.keys && gameScreenOne.keys[38] ) {
    sonic.dy = -5
    sonic.y += sonic.dy  
    gameScreenOne.key = false; 
    }

    if (sonic.y == sonicBottom && gameScreenOne.x && gameScreenOne.y) {
/*
if (jumpBtn.clicked()) {
            if (sonic.y >= sonicBottom) {
    
  
}
}*/
sonic.dy = -200
    sonic.y += sonic.dy 
gameScreenOne.x = false
            gameScreenOne.y = false
        
      }
/* jquery tap
$("canvas").on("tap",function(){
if (sonic.y >= sonicBottom) {
    
  sonic.y -= 200

}

});
*/
    //if (gameScreenOne.key && gameScreenOne.key == 40) {this.x += 2; }
     
  }
  this.gravity = () => {
    if (this.y < sonicBottom){
    this.y += 8;
  }
  }

  this.xBounce = () => {
    this.x += this.dx;
    if (this.x + (this.width / this.numberOfFrames) >= gameScreenOne.canvas.width || this.x <= 0) {
      this.dx = -this.dx
    }
  }
  this.crashWith = (obj) => {
    myRight = (this.x + (this.width / this.numberOfFrames))
    if (
      myRight >= obj.x && // right inside obj body
      myRight <= obj.x + (obj.width/obj.numberOfFrames) && // right inside obj x 
      this.y + this.height >= obj.y && // my bottom lower than obj top
      this.y <= obj.y + obj.height) {
     // console.log('we crashed!')
      
      crash = true
      //myCoins.push(redCoin)
      return crash
    }
}
   /*
    for (i=0; i < 1; i++) {
        console.log(this.x + " this.x px") 
        console.log((this.width / this.numberOfFrames) + " this.width px")
        console.log(obj.x + " obj.x px")
      }
      */
      
  
} // end sprite options