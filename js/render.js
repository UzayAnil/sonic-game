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
bombDist = 400
hitBlue = false
// grass is screenH - 70
// the render function
render = () => {
  gameScreenOne.clear() // clear screen
  if (slideSonic.x >= finishLine.x + 1600){  

    runIt = false
      
    
  }
    
    bg.draw() // draw the background
  

  if (gameScreenOne.x && gameScreenOne.y) {
    
        
        if (pauseBtn.clicked()) {
            //testPiece.y += 1;
        }
        if (startOverBtn.clicked()) {
            //testPiece.x += -1;
        }
        if (duckBtn.clicked()) {
            //testPiece.x += 1;
        }
    }
    jumpBtn.draw();        
    //pauseBtn.draw();        
    //startOverBtn.draw();        
    //duckBtn.draw();                                
    //testPiece.draw();
  if (slideSonic.x >= finishLine.x + 800){
    
    success.draw()
    
      enemy.x = 3000
      redCoin.x = 3000
    }
  if ((finishLine.x + finishLine.width) <= sonic.x) {
    sonic.x = -100
      
      slideSonic.x += sonic.dx
      slideSonic.y = sonicBottom
    
    levelAlert.text = "LEVEL CLEARED"
    

  } else {
    levelAlert.text = ""
  }
  
  
    
  
  
  
  
  
  for (i=0; i<enemies.length; i++){
  if ((enemy.x + enemy.width) < 0) {
    enemies.pop(enemy[i])
    sonic.dx = 10 + (coinScore/5)
    redCoin.x = Math.floor(Math.random() * (((screenW * 1.5)+ bombDist) - (screenW + bombDist)) + (screenW + bombDist))
    //redCoin.x = Math.floor(Math.random() * ((screenW * 1.5) - screenW) + screenW)
  myCoins.push(redCoin)
  }
}
  if (lives == 0) {
    
	//$(gameScreenOne.canvas).remove()

runIt = false
    
  }
  frameNo++
  if (frameNo == 1) {
    myCoins.push(redCoin)
  }
  
  
  /*
  if (gameScreenOne.keys && gameScreenOne.keys[39]) {
    bg.x -= sonic.dx;
    redCoin.x -= sonic.dx
    enemy.x -= sonic.dx
  }
$("canvas").on("tap",function(){
  if (sonic.y == sonicBottom) {
sonic.y -= 200
}
});
  */
  /* left function
  if (gameScreenOne.keys && gameScreenOne.keys[37]) {
    bg.x += sonic.dx;
    redCoin.x += sonic.dx 

  }
  */

  if ((bg.x) <= -(screenW)) {
    bg.x = 0
  }
 
  for (i=0; i<myCoins.length; i++) {
    myCoins[i].sheetUpdate()
  myCoins[i].draw()
  if ((myCoins[i].x + myCoins[i].width) < sonic.x) {
    myCoins.pop(myCoins[i])
    redCoin.x = Math.floor(Math.random() * (((screenW * 1.5)+ bombDist) - ((screenW/2) + bombDist)) + ((screenW/2) + bombDist))
    //redCoin.x = Math.floor(Math.random() * ((screenW - 80) - 200) + 200)
  myCoins.push(redCoin)
  }


   if (sonic.crashWith(redCoin)) {
    coinScore++
      bombDist += 0.5
      sonic.dx = 10 + (coinScore/5)
      //console.log("coin Score!" + coinScore)
    myCoins.pop(redCoin)
    crash = false
    redCoin.x = Math.floor(Math.random() * (((screenW * 1.5)+ bombDist) - (screenW + bombDist)) + (screenW + bombDist))
    rando = Math.floor(Math.random() * 3)
    enemy.x = Math.floor(Math.random() * (((screenW * 1.5)+ bombDist) - (screenW + bombDist)) + (screenW + bombDist))
    //console.log(rando)
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

if (enemies[i].bombCrash(sonic)) {
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
    
  levelAlert.draw()

    if (sonic.y < sonicBottom) {
      bg.x -= sonic.dx + 5
    redCoin.x -= sonic.dx + 5
    enemy.x -= sonic.dx + 5
    } else {
      if (sonic.x < finishLine.x + 400) {
      bg.x -= sonic.dx;
    redCoin.x -= sonic.dx
    enemy.x -= sonic.dx
  }
    }
   // document.getElementsByTagName('h1')[0].innerHTML = "Score: " + coinScore  
    bluePortal.draw()
    

    if (coinScore >= 20 && coinScore < 25 || coinScore >= 65 && coinScore < 75 || coinScore >= 40 && coinScore < 50 || coinScore >= 85 && coinScore < 100) {
       
      bluePortal.x -= sonic.dx
    } else {
      bluePortal.x = screenW
    }
  

  if (sonic.x >= bluePortal.x && sonic.x <= bluePortal.x + bluePortal.width && sonic.y + sonic.height >= bluePortal.y ) {
      hitBlue = true
        sonic.y = 1050
      console.log('hit blue portal')
  
      
}
if (hitBlue) {
orangePortal.x -= sonic.dx
}
if (orangePortal.x <= 150 || coinScore >= 100) {
   //   console.log("less")
      sonic.y = sonicBottom
      finishLine.x -= sonic.dx
      
  }
  finishLine.draw()
  
    slideSonic.sheetUpdate()
    slideSonic.draw()
    orangePortal.draw()
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
