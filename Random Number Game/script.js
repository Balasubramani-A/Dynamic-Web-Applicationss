let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber)
function checkGuess() {
    let guessedNumber = parseInt(userInput.value);
    if(guessedNumber > randomNumber){
        gameResult.textContent = "Too High! try again";
        gameResult.style.backgroundColor =" #1e217c";
    }
    else if(guessedNumber < randomNumber){
        gameResult.textContent = "Too low! try again";
        gameResult.style.backgroundColor =" #1e217c";
    }
    else if(guessedNumber === randomNumber){
        gameResult.textContent = "Congradulations you got it right!";
        gameResult.style.backgroundColor ="green";
    }
    else{
        gameResult.textContent = "Provide a valid user input";
        gameResult.style.backgroundColor =" red";
    }
}