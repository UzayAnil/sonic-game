elements = () => {
	//create a button to start the game over // set display to none 
	const startOverBtn = document.createElement('button')
	startOverBtn.innerHTML = "START OVER"
	startOverBtn.style.display = "inline-block"
	const playBtn = document.createElement('button')
	playBtn.innerHTML = "PLAY"
	const pauseBtn = document.createElement('button')
	pauseBtn.innerHTML = "PAUSE"
	pauseBtn.setAttribute("id", "pause")
	const br = document.createElement('br')
	playBtn.style.display = "none"
	pauseBtn.style.display = "inline-block"
	const controls = document.createElement('div')
	controls.style.marginLeft = "auto";
	controls.style.marginRight = "auto";
	controls.style.width = gameScreenOne.canvas.width + "px" ;
//	document.body.appendChild(br)
	document.body.appendChild(controls)
	controls.appendChild(startOverBtn)
	controls.appendChild(playBtn)
	controls.appendChild(pauseBtn)
	startOverBtn.addEventListener('click', function() {
    location.reload()

  })
  pauseBtn.addEventListener('click', () => {
    runIt = false
    pauseBtn.style.display = "none"
    playBtn.style.display = "inline-block"
  })
  playBtn.addEventListener('click', () => {
    runIt = true
    window.requestAnimationFrame(render)
    playBtn.style.display = "none"
    pauseBtn.style.display = "inline-block"

  })
  const buttonsList = document.body.querySelectorAll('button')
  for (i=0; i<buttonsList.length; i++) {
    buttonsList[i].style.marginTop = "10px"
    buttonsList[i].style.marginLeft = "5%"
    buttonsList[i].style.height = "60px"
    buttonsList[i].style.width = "120px"
  }
}	
