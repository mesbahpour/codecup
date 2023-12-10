let square = document.getElementById('square');

document.addEventListener("keydown", function(event) {

  event.preventDefault();
  
  const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
  const shiftKeyPressed = event.shiftKey;

  let pixelsToMove = 1;
  
  if(shiftKeyPressed) {
    pixelsToMove = 10;
  }

  switch (key) { // change to event.key to key to use the above variable
    
    case "ArrowLeft":
      square.style.left = square.offsetLeft - pixelsToMove + 'px';
      break;

    case "ArrowRight":
      square.style.left = square.offsetLeft + pixelsToMove + 'px';
      break;
    
    case "ArrowUp":
      square.style.top = square.offsetTop - pixelsToMove + 'px';
      break;

    case "ArrowDown": 
      square.style.top = square.offsetTop + pixelsToMove + 'px';
      break;

  }

});