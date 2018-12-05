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
var challenger1Feedback = document.querySelector('.challenger-1-feedback');




//EVENT LISTENERS
updateButton.addEventListener('click', getRandomNumber);




//FUNCTIONS
function getRandomNumber(e) {
  e.preventDefault();
  var randomNumber = Math.floor(Math.random() * 100);
  console.log(randomNumber);
}