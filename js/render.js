///// 1 /////

//starting variables
myCoins = [];
enemies = [];
screenW = 50 * 16;
screenH = 50 * 9;
sonicBottom = (screenH - 80 - 55)
ground = (screenH - 55)
crash = false
bomb = false
coinScore = 0;
frameNo = 0;
lives = 3

// grass is screenH - 70
// the render function
render = () => {
  gameScreenOne.clear() // clear screen

  
  for (i=0; i<enemies.length; i++){
  if ((enemy.x + enemy.width) < sonic.x) {
    enemies.pop(enemy[i])
    redCoin.x = Math.floor(Math.random() * ((screenW - 80) - 80) + 80)
  myCoins.push(redCoin)
  }
}
  if (lives == 0) {
    runIt = false
    document.getElementById('pause').style.display = "none"
  }
  frameNo++
  if (frameNo == 1) {
    myCoins.push(redCoin)
  }
  
  bg.draw() // draw the background
  /*
  if (gameScreenOne.keys && gameScreenOne.keys[39]) {
    bg.x -= sonic.dx;
    redCoin.x -= sonic.dx
    enemy.x -= sonic.dx
  }
  */
  /* left function
  if (gameScreenOne.keys && gameScreenOne.keys[37]) {
    bg.x += sonic.dx;
    redCoin.x += sonic.dx 

  }
  */

  if ((bg.x) <= (-screenW)) {
    bg.x = 0
  }
  for (i=0; i<myCoins.length; i++) {
    myCoins[i].sheetUpdate()
  myCoins[i].draw()
  if ((myCoins[i].x + myCoins[i].width) < sonic.x) {
    myCoins.pop(myCoins[i])
    redCoin.x = Math.floor(Math.random() * ((screenW - 80) - 200) + 200)
  myCoins.push(redCoin)
  }


   if (sonic.crashWith(redCoin)) {
    myCoins.pop(redCoin)
    crash = false
    redCoin.x = Math.floor(Math.random() * ((screenW - 80) - 200) + 200)
    rando = Math.floor(Math.random() * 3)
    enemy.x = (Math.floor(Math.random() * ((screenW - 80) - 400) + 400))
    console.log(rando)
    if (rando == 2) {
      enemies.push(enemy)
    } else {
      myCoins.push(redCoin)
    }

   }

  }
  for (i=0; i<enemies.length; i++) {
    
  enemies[i].draw()
}

for (i=0; i<enemies.length; i++){
if (enemies[i].crashWith(sonic)) {
  enemies.pop(enemies[i])
  lives--
  console.log("lives: "+ lives)
  redCoin.x = Math.floor(Math.random() * ((screenW - 80) - 80) + 80)
  myCoins.push(redCoin)
}
}
  
  //render the red coin
  
  //redCoin.xBounce()
  /*
  //render the yoshi
  redYoshi.sheetUpdate()
  redYoshi.draw()
  redYoshi.move()
  redYoshi.gravity()
  */
  sonic.sheetUpdate()
  sonic.draw()
  sonic.move()
  sonic.gravity()
  
   myScore.text="SCORE: " + coinScore;
    myScore.draw();
    myLives.text = "LIVES: " + lives;
    myLives.draw();
  
bg.x -= sonic.dx;
    redCoin.x -= sonic.dx
    enemy.x -= sonic.dx
  // check if runIt is true to animate, pause and play
  if (runIt) {
    window.requestAnimationFrame(render)
  }
  /*
  if (!crash) {
  redCoin.sheetUpdate()
  redCoin.draw()
  }
  */
}
