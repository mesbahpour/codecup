const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

buttons.forEach(button => {
    button.addEventListener('click', function handleClick(event) {
      body.setAttribute('style',`background-color: ${button.id}`);
    });
  });