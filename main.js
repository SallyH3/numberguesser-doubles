// GLOBAL VARIABLES

var minRangeInputBox = document.getElementById('min-range');
var maxRangeInputBox = document.getElementById('max-range');
var minRange = 1;
var maxRange = 100;
var currentMin = document.querySelector('#current-min');
var currentMax = document.querySelector('#current-max');
var updateButton = document.querySelector('#update');
var name1 = document.querySelector('#name-1');
var name2 = document.querySelector('#name-2');
var nameOneGuessInputBox = document.querySelector('#name-1-guess');
var nameTwoGuessInputBox = document.querySelector('#name-2-guess');
var nameOneGuess;
var nameTwoGuess;
var submitGuessButton = document.querySelector('#submit-guess');
var resetGameButton = document.querySelector('#reset-game');
var clearGameButton = document.querySelector('#clear-game');
var latestScoreNum1 = document.querySelector('#latest-score-num-1');
var latestScoreNum2 = document.querySelector('#latest-score-num-2');
var challenger1Feedback = document.querySelector('.challenger-1-feedback');
var challenger2Feedback = document.querySelector('.challenger-2-feedback');
var challenger1Name = document.querySelector('.latest-score-1-name');
var challenger2Name = document.querySelector('.latest-score-2-name');
var rightColumn = document.querySelector('.right-column');
var initialMin = 1;
var initialMax = 100;
var guessCount = 0;
var randomNumber = getRandomWithinRange(initialMin, initialMax);
console.log('test', randomNumber);




//EVENT LISTENERS

rightColumn.addEventListener('click', deleteWinnerCard);
submitGuessButton.addEventListener('click', submitListener);
name1.addEventListener('keyup', resetClearButtonEnableDisable);
name2.addEventListener('keyup', resetClearButtonEnableDisable);
document.querySelector('#name-1-guess').addEventListener('keyup', resetClearButtonEnableDisable);
document.querySelector('#name-2-guess').addEventListener('keyup', resetClearButtonEnableDisable);
resetGameButton.addEventListener('click', getRandomWithinRange);
clearGameButton.addEventListener('click', clearFields);

updateButton.addEventListener('click', function(e) {
  e.preventDefault();
  updateRandomNumber();
  checkInputIsNanMinRange(e);
  checkInputIsNanMaxRange(e);
});


//FUNCTIONS

function increaseDecreaseByTen() {
  minRangeInputBox.value = ((parseInt(minRangeInputBox.value)) -10);
  maxRangeInputBox.value = ((parseInt(maxRangeInputBox.value)) +10);
}

function deleteWinnerCard(e) {
  if(e.target.classList.contains('fas')) {
    e.target.closest('.winner-card').remove();
  }
}

function addPinkBorder(htmlInputElement) {
  htmlInputElement.classList.add('pink-border');
}

function removePinkBorder(htmlInputElement) {
  htmlInputElement.classList.remove('pink-border');
}

function checkInputIsNanMinRange(e) {
  e.preventDefault();
var parsedValue = parseInt(minRangeInputBox.value);
  if (isNaN(parsedValue)) {
    document.querySelector('.pink-error-message').innerHTML= 'that\'s not a number, try again';
  }
}

function checkInputIsNanMaxRange(e) {
  e.preventDefault();
var parsedValue = parseInt(maxRangeInputBox.value);
  if (isNaN(parsedValue)) {
    document.querySelector('.pink-error-message').innerHTML = 'that\'s not a number, try again';
  }
}

function checkInputIsNanChallengerOne() {
  var parsedValue = parseInt(nameOneGuessInputBox.value);
  if (isNaN(parsedValue)) {
    challenger1Feedback.innerText = 'that\'s not a number, try again';
  }
}

function checkInputIsNanChallengerTwo() {
  var parsedValue = parseInt(nameTwoGuessInputBox.value);
  if (isNaN(parsedValue)) {
    challenger2Feedback.innerText = 'that\'s not a number, try again';
  }
}

function resetClearButtonEnableDisable() {
  var inputFields = document.querySelectorAll('.user-input');
  for(var i = 0; i < inputFields.length; i++) {
    if (inputFields[i].value) {
      clearGameButton.disabled = false;
      resetGameButton.disabled = false;
    }
  }
}

function clearFields(e) {
  e.preventDefault();
  name1.value = '';
  name2.value = '';
  document.querySelector('#name-1-guess').value = '';
  document.querySelector('#name-2-guess').value = '';
}

function updateRandomNumber() {
  minRange = parseInt(minRangeInputBox.value);
  maxRange = parseInt(maxRangeInputBox.value);
  var isValidRange = minMaxErrorMessage();
  if(isValidRange === true) {
  randomNumber = getRandomWithinRange(minRange, maxRange); 
  currentMin.innerText = minRange;
  currentMax.innerText = maxRange;
  }
  console.log(randomNumber);
}

function updateChallengerNames() {
  challenger1Name.innerText = name1.value;
  challenger2Name.innerText = name2.value;
}

 
function getRandomWithinRange(givenMin, givenMax) { 
  return Math.floor(Math.random() * (givenMax - givenMin)) + givenMin;
}


function submitListener(e) {
  e.preventDefault();
  guessCount++;
  submitGuessPlayerOne(e);
  submitGuessPlayerTwo(e);
  outsideRangeErrorChallenger1(e);
  outsideRangeErrorChallenger2(e);
  updateChallengerNames();
  checkInputIsNanChallengerOne();
  checkInputIsNanChallengerTwo();
}

function submitGuessPlayerOne(e) {
  e.preventDefault();
  nameOneGuess = parseInt(nameOneGuessInputBox.value);
  latestScoreNum1.innerText = nameOneGuess;
  if (nameOneGuess > randomNumber){
    challenger1Feedback.innerText = 'that\'s too high';
} else if (nameOneGuess < randomNumber) {
    challenger1Feedback.innerText = 'that\'s too low';
  } else if (nameOneGuess === randomNumber) {
    challenger1Feedback.innerText = 'BOOM!';
    increaseDecreaseByTen();
    addWinnerCard(name1.value);
      }
   }

function submitGuessPlayerTwo(e) {
  e.preventDefault();
  nameTwoGuess = parseInt(nameTwoGuessInputBox.value);
  latestScoreNum2.innerText = nameTwoGuess;
  if (nameTwoGuess > randomNumber){
    challenger2Feedback.innerText = 'that\'s too high';
} else if (nameTwoGuess < randomNumber) {
    challenger2Feedback.innerText = 'that\'s too low';
  } else if (nameTwoGuess === randomNumber) {
    challenger2Feedback.innerText = 'BOOM!';
    increaseDecreaseByTen();
    addWinnerCard(name2.value);
      }
   }

    function outsideRangeErrorChallenger1() {
  if(nameOneGuess < minRange || nameOneGuess > maxRange) {
    challenger1Feedback.innerText = 'sorry, that\'s outside the range you set, try again';
  } 
}

  function outsideRangeErrorChallenger2() {
    if(nameTwoGuess < minRange || nameTwoGuess > maxRange) {
    challenger2Feedback.innerText = 'sorry, that\'s outside the range you set, try again';
  } 
}

   function minMaxErrorMessage() {
    if (maxRange < minRange) {
      document.querySelector('.pink-error-message').innerHTML = `<img src="error-icon.svg"> Max entry is lower than min entry, try again`;
      addPinkBorder(minRangeInputBox);
      addPinkBorder(maxRangeInputBox);
      return false;
    } else {
      document.querySelector('.pink-error-message').innerHTML = '';
      removePinkBorder(minRangeInputBox);
      removePinkBorder(maxRangeInputBox);
      return true;
    }
 }

 function addWinnerCard(winner) {
  var element = document.createElement('section');
  var challengerOneName = name1.value.toUpperCase();
  var challengerTwoName = name2.value.toUpperCase();
  var winner = winner.toUpperCase();    
  element.className = 'winner-card'; 
    element.innerHTML =
    `<div class="challenger-card-names">
    <p class="chall-one-name">${challengerOneName}</p>
    <p class="vs">VS</p>
    <p class="chall-two-name">${challengerTwoName}</p>
    </div>
    <hr>
    <p class="large-display-name">${winner}</p>
    <p class="winner-text">WINNER</p>
    <hr>
    <div class="card-footer">
    <div class="guesses-container">
    <span class="number-of-guesses">${guessCount}</span>
    <span class="guesses-text">GUESSES</span>
    </div>
    <div class="minutes-container">
    <span class="time-taken-display">1.35</span>
    <span class="minutes-text">MINUTES</span>
    <span class="delete-icon">
    <i class="fas fa-times-circle"></i>
    </span>
    </div>
    </div>  
    `;
    guessCount = 0;
    document.querySelector('.right-column').appendChild(element);
 }