//generate random Number 
let randomNumber = parseInt(Math.random()*100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas'); 

const p = document.createElement('p');

let previousGuesses = [];
let numofGuesses = 1;
let playGame = true; // whether the game is currently active.

//event listener for submit button(user input)
if (playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if (isNaN(guess)){
        alert('Please enter a valid number');
    } else if (guess < 1 || guess > 100){
        alert('Please enter a number between 1 and 100');
    } else {
        previousGuesses.push(guess);
        if (numofGuesses === 11){ //took all 10 guesses
            displayGuesses(guess);
            displayMessage(`Game Over! The number was ${randomNumber}`);
            endGame();
        } else {
            displayGuesses(guess);
            checkGuess(guess);
        }
    }
}//number between 1-100

function checkGuess(guess){
    if (guess === randomNumber){
        displayMessage(`Congratulations! You guessed it right! The number was ${randomNumber}`);
        endGame();
    } else if (guess < randomNumber){
        displayMessage(`Your guess is too low!`);
    } else if (guess > randomNumber){
        displayMessage(`Your guess is too high!`);
    }

} //guess is low , high or correct

function displayGuesses(guess){
    //clean up values
    userInput.value = '';
    guessSlot.innerHTML += `${guess} , `;
    numofGuesses++;
    remaining.innerHTML = `You have ${11 - numofGuesses} guesses remaining.`;

} //display previous guesses

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
} //display message to user

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(){
        randomNumber = parseInt(Math.random()*100 + 1);
        previousGuesses = [];
        numofGuesses = 1;
        guessSlot.innerHTML = '';
        lowOrHi.innerHTML = '';
        remaining.innerHTML = `${11 - numofGuesses} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}
