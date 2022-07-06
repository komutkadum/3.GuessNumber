let heading = document.getElementById('heading');
let input = document.getElementById('input');
let submit = document.getElementById('guess-button');
let previousGuess = document.getElementById('previous-guess');
let guessRemaining = document.getElementById('guess-remaining');
let errorMessage = document.getElementById('error-message');
let gameBox = document.getElementById('game');
let guessMessage = document.getElementById('guess-message');

let mainNumber = Math.floor(Math.random()*100);
let totalGuess = 10;

const play = () => {
    if(validate()){
        return;
    }
    if(input.value==mainNumber){
        gameBox.classList.remove('game');
        gameBox.classList.add('win-screen');
        gameBox.innerHTML = `<p>YOU GUESSED THE NUMBER ${mainNumber} CORRECT</p><button onclick='document.location.reload()'>Play Again</button>`
        return;
    }else if(input.value<mainNumber){
        guessMessage.style.display = 'block'
        guessMessage.classList.add('low-guess-message')
        guessMessage.classList.remove('high-guess-message')
        guessMessage.innerText = "TOO LOW! TRY AGAIN"
    }else {
        guessMessage.style.display = 'block'
        guessMessage.classList.add('high-guess-message')
        guessMessage.classList.remove('low-guess-message')
        guessMessage.innerText = "TOO HIGH! TRY AGAIN"
    }
    updateValues();
}
const updateValues = () => {
    totalGuess--;
    guessRemaining.innerText = `Guesses remaining : ${totalGuess}`;
    previousGuess.append(input.value+", ")
    input.value = "";
}

const validate = () => {
    if(input.value==='') {
        outputMessage('enter some input')
        return true;
    }
    if(parseInt(input.value)>100||parseInt(input.value)<0){
        outputMessage('enter a number less than 100 or greater than 0');
        return true;
    }
    if(Number.isNaN(input.value)){
        outputMessage('enter a number');
        return true;
    }
    if(totalGuess<=1){
        gameBox.classList.remove('game');
        gameBox.classList.add('gameover-screen');
        gameBox.innerHTML = `<p>GAME OVER! NUMBER WAS ${mainNumber}</p><button onclick='document.location.reload()'>Play Again</button>`
        return true;
    }
    return false
}

const outputMessage = (message) => {
    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 2000);
    errorMessage.style.display = 'block';
    errorMessage.innerText = message;
}