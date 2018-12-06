// GLOBAL VARIABLES

var minRange = document.querySelector('#min-range');
var maxRange = document.querySelector('#max-range');
var currentMin = document.querySelector('#current-min');
var currentMax = document.querySelector('#current-max');
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
var randomNumber = Math.floor(Math.random() * 100);


//EVENT LISTENERS

updateButton.addEventListener('click', getRandomNumber);
submitGuessButton.addEventListener('click', submitGuessPlayerOne);
submitGuessButton.addEventListener('click', submitGuessPlayerTwo);
name1.addEventListener('keyup', resetClearButtonEnableDisable);
name2.addEventListener('keyup', resetClearButtonEnableDisable);
nameOneGuess.addEventListener('keyup', resetClearButtonEnableDisable);
nameTwoGuess.addEventListener('keyup', resetClearButtonEnableDisable);



//FUNCTIONS

function resetClearButtonEnableDisable() {
  var inputFields = document.querySelectorAll('.user-input');
  for(var i = 0; i < inputFields.length; i++) {
    if (inputFields[i].value) {
      clearGameButton.disabled = false;
      resetGameButton.disabled = false;
    }
  }
}

function getRandomNumber(e) {
  e.preventDefault();
  //TODO Choose random number from range instead of hardcoding 100
  randomNumber = Math.floor(Math.random() * 100);
  var minRangeInput = minRange.value;
  var maxRangeInput = maxRange.value;
  currentMin.innerText = minRangeInput;
  currentMax.innerText = maxRangeInput;
  console.log(randomNumber);
  return randomNumber;
}

function submitGuessPlayerOne(e) {
  e.preventDefault();
  latestScoreNum1.innerText = nameOneGuess.value;
  if (nameOneGuess.value > randomNumber){
    challenger1Feedback.innerText = 'That\'s too high';
} else if (nameOneGuess.value < randomNumber) {
    challenger1Feedback.innerText = 'That\'s too low';
  } else {
    challenger1Feedback.innerText = 'BOOM!';
      }
   }

function submitGuessPlayerTwo(e) {
  e.preventDefault();
  latestScoreNum2.innerText = nameTwoGuess.value;
  if (nameTwoGuess.value > randomNumber){
    challenger2Feedback.innerText = 'That\'s too high';
} else if (nameTwoGuess.value < randomNumber) {
    challenger2Feedback.innerText = 'That\'s too low';
  } else {
    challenger2Feedback.innerText = 'BOOM!';
      }
   }
