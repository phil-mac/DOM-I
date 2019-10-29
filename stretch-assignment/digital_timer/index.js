const digits = document.querySelector('.digits');

const secondTens = document.querySelector('#secondTens');
const secondOnes = document.querySelector('#secondOnes');

const msHundreds = document.querySelector('#msHundreds');
const msTens = document.querySelector('#msTens');

buttonCont = document.querySelector('.buttonCont');

document.querySelector('body').style.flexDirection = 'column';

const startButton = document.createElement('button');
startButton.textContent = "Run";
startButton.style.background = 'lightgreen';
startButton.style.color = 'white';
startButton.style.fontSize = '2rem';
startButton.style.padding = '20px 0';
startButton.style.width = "200px";
buttonCont.appendChild(startButton);

startButton.addEventListener('click', (event) =>{
    time = 0;
    timeString = '';
    digits.style.color = 'black';
    startButton.textContent = "Running";
    startButton.style.background = 'lightgrey';
    startButton.disabled = true;
    runTimer();
    // setInterval(function(){
        
    // }, 10000)
});

let time = 0;
let timeString = '';

const runTimer = function(){
    setInterval(function(){
        if (time < 10){
            time = Math.round(time * 100)/100;
            timeString = time.toString();
            console.log(timeString);
            secondTens.textContent = '0';
            secondOnes.textContent = timeString[0];
            msHundreds.textContent = timeString[2];
            if(timeString[3]){
                msTens.textContent = timeString[3];
            }else{
                msTens.textContent = '0';
            }

    
        }else{
            secondTens.textContent = '1';
            secondOnes.textContent = '0';
            msHundreds.textContent = '0';
            msTens.textContent = '0';
            digits.style.color = 'red';

            startButton.style.background = 'lightgreen';
            startButton.disabled = false;
            startButton.textContent = "Run";
        }
        time += 0.01;
    }, 10);
}


