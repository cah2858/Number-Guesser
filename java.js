var randomNumber = Math.floor(Math.random() * 100) + 1;
var userInput = document.querySelector('#input');
var hint = document.querySelector('#hint');
var previousGuess = document.querySelector('h3');

var guessButton = document.querySelector('#guess-btn');
var clearButton = document.querySelector('#clear');
var resetButton = document.querySelector('#reset-btn');

guessButton.addEventListener('click', collectGuess);

function collectGuess() {
  event.preventDefault();
  var userGuess = parseInt(userInput.value);
  if (userGuess > 100 || userGuess < 1) {
  alert('Uh oh. Please enter a number between 1 and 100.');
  return;
}

previousGuess.innerText = userGuess;

  if (userGuess === randomNumber) {
    hint.innerText = ('BOOM!');
  } else if (userGuess > randomNumber) {
    hint.innerText = ('That is too high');
  } else {
    hint.innerText = ('That is too low');
  }
}

// clearButton.addEventListener('click', clearButtons);

// function clearButtons() {
//   guessButton.disabled = true;
//   clearButton.disabled = true;
//   resetButton.disabled = true;
// }

resetButton.addEventListener('click', refreshPage);

function refreshPage() {
  location.reload();  
}

userInput.addEventListener('keyup', function() {
  event.preventDefault()
  var truth = userINput.value === "";
    guessButton.disabled = truth;
    clearButton.disabled = truth;
    resetButton.disabled = truth;
    guessButton.disabled = !truth;
    clearButton.disabled = !truth;
    resetButton.disabled = !truth;
});