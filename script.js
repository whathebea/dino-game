let dino = document.querySelector('.dino');
let background = document.querySelector('.background');
let isJumping = false;
let position = 0;

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        if(!isJumping) {
        jump();
        }
    }

}

function jump() {
    let upInterval = setInterval(() => {
        if (position >= 150) {
          
            clearInterval(upInterval);
    
          let downInterval = setInterval(() => {
            
            if (position <= 0) {
              clearInterval(downInterval);
              isJumping = false;
            } 
            
            else {
              position -= 20;
              dino.style.bottom = position + 'px';
            }
          }, 25);
        } 
        
        else {
          position += 20;
          dino.style.bottom = position + 'px';
        }
      }, 25);
    }
    
function createCactus() {
    const cactus = document.createElement('div');

    let cactusPos = 1000;
    let randomTime = Math.random() * 6000;


    cactus.classList.add('cactus');

    cactus.style.left = 1000 + 'px';

    background.appendChild(cactus);

    let leftInterval = setInterval (() => {

        if(cactusPos < -60) {

            clearInterval(leftInterval);
            background.removeChild(cactus);

        } else if  ( cactusPos > 0 && cactusPos < 60 && position < 60 ) {
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="gameover">Game over!</h1>';
            setTimeout(function(){ 
                location.reload();
            }, 2500);
        }
        else {
            cactusPos -= 10;
            cactus.style.left = cactusPos + 'px';

        }
    }, 25);

    setTimeout(createCactus, randomTime);
}

createCactus();

document.addEventListener('keyup', handleKeyUp);