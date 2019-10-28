const secondTens = document.querySelector('#secondTens');
const secondOnes = document.querySelector('#secondOnes');

const msHundreds = document.querySelector('#msHundreds');
const msTens = document.querySelector('#msTens');

secondTens.textContent = '0';

let time = 0;
let timeString = '';

// const increment = function(){
//     if (time < 10){

//         time = Math.round(time * 100)/100;
//         timeString = time.toString();

//         secondOnes.textContent = timeString[0];
//         msHundreds.textContent = timeString[2];
//         msTens.textContent = timeString[3];

//         setTimeout(increment, 10)
//     }else{
//         secondTens.textContent = '1';
//         secondOnes.textContent = '0';
//         msHundreds.textContent = '0';
//         msTens.textContent = '0';
//         document.querySelector('.digits').style.color = 'red';
//     }
//     time += 0.01;
// }

// increment();


setInterval(function(){
    if (time < 10){

        time = Math.round(time * 100)/100;
        timeString = time.toString();

        secondOnes.textContent = timeString[0];
        msHundreds.textContent = timeString[2];
        msTens.textContent = timeString[3];

        // setTimeout(increment, 10)
    }else{
        secondTens.textContent = '1';
        secondOnes.textContent = '0';
        msHundreds.textContent = '0';
        msTens.textContent = '0';
        document.querySelector('.digits').style.color = 'red';
    }
    time += 0.01;
}, 10);

// increment();