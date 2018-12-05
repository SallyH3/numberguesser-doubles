// GLOBAL VARIABLES
var minRange = document.querySelector('#min-range');
var maxRange = document.querySelector('#max-range');
var updateButton = document.querySelector('#update');
var name1 = document.querySelector('#name-1');
var name2 = document.querySelector('#name-2');
var nameOneGuess = document.querySelector('#name-1-guess');
var nameTwoGuess = document.querySelector('#name-2-guess');
var submitGuessButton = document.querySelector('#submit-guess');
var resetGameButton = document.querySelector('#reset-game');
var clearGameButton = document.querySelector('#clear-game');
var latestScoreNum1 = document.querySelector('#latest-score-num-1');
var latestScoreNum2 = document.querySelector('#latest-score-num-2');
var challenger1Feedback = document.querySelector('.challenger-1-feedback');
var challenger2Feedback = document.querySelector('.challenger-2-feedback');
var min = 1;
var max = 100;
var range = max - min;
var randomNumber = Math.floor(Math.random() * (range + 1) + min);


//EVENT LISTENERS
updateButton.addEventListener('click', getRandomNumber);
submitGuessButton.addEventListener('click', submitGuess);



//FUNCTIONS

function getRandomNumber(e) {
  e.preventDefault();
  randomNumber = Math.floor(Math.random() * (range + 1) + min);
  console.log(randomNumber);
  return randomNumber;
}

function submitGuess(e) {
  e.preventDefault();
  latestScoreNum1.innerText = nameOneGuess.value;
  if (nameOneGuess.value === randomNumber) {
    challenger1Feedback.innerText = 'BOOM!';
  } else if (nameOneGuess.value < randomNumber) {
    challenger1Feedback.innerText = 'That\'s too low';
  } else {
    challenger1Feedback.innerText = 'That\'s too high';
  }
}

//grab input values and check against randomnumber.
//if number is too low, then feedback will be number too low
//if number too high, then feedback will be number too high
//if number is correct, then feedback will display 'boom'