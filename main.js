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
var initialMin = 1;
var initialMax = 100;
var randomNumber = getRandomWithinRange(initialMin, initialMax);
console.log('test', randomNumber);




//EVENT LISTENERS

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
  checkInputIsNanChallengerOne();
  checkInputIsNanChallengerTwo();
});


//FUNCTIONS

function addPinkBorder(htmlInputElement) {
  htmlInputElement.classList.add('pink-border');
}

function removePinkBorder(htmlInputElement) {
  htmlInputElement.classList.remove('pink-border');
}

function checkInputIsNanChallengerOne() {
  var parsedValue = parseInt(nameOneGuessInputBox.value);
  if (isNaN(parsedValue)) {
    challenger1Feedback.innerText = 'That\'s not a number, try again';
}
}

function checkInputIsNanChallengerTwo() {
  var parsedValue = parseInt(nameTwoGuessInputBox.value);
  if (isNaN(parsedValue)) {
    challenger2Feedback.innerText = 'That\'s not a number, try again';
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
  // minRange = Math.ceil(minRange);
  // maxRange = Math.floor(maxRange);
  return Math.floor(Math.random() * (givenMax - givenMin)) + givenMin;
}


function submitListener(e) {
  e.preventDefault();
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
    challenger1Feedback.innerText = 'That\'s too high';
} else if (nameOneGuess < randomNumber) {
    challenger1Feedback.innerText = 'That\'s too low';
  } else if (nameOneGuess === randomNumber) {
    challenger1Feedback.innerText = 'BOOM!';
      }
   }

function submitGuessPlayerTwo(e) {
  e.preventDefault();
  nameTwoGuess = parseInt(nameTwoGuessInputBox.value);
  latestScoreNum2.innerText = nameTwoGuess;
  if (nameTwoGuess > randomNumber){
    challenger2Feedback.innerText = 'That\'s too high';
} else if (nameTwoGuess < randomNumber) {
    challenger2Feedback.innerText = 'That\'s too low';
  } else if (nameTwoGuess === randomNumber) {
    challenger2Feedback.innerText = 'BOOM!';
      }
   }

    function outsideRangeErrorChallenger1() {
  if(nameOneGuess < minRange || nameOneGuess > maxRange) {
    challenger1Feedback.innerText = 'Sorry, that\'s outside the range you set, try again';
  } 
}

  function outsideRangeErrorChallenger2() {
    if(nameTwoGuess < minRange || nameTwoGuess > maxRange) {
    challenger2Feedback.innerText = 'Sorry, that\'s outside the range you set, try again';
  } 
}

   function minMaxErrorMessage() {
    if (maxRange < minRange) {
      challenger1Feedback.innerText = 'Sorry, your max entry is lower than your min entry, try again';
      addPinkBorder(minRangeInputBox);
      addPinkBorder(maxRangeInputBox);
      return false;
    } else {
      removePinkBorder(minRangeInputBox);
      removePinkBorder(maxRangeInputBox);
      return true;
    }

 }

 //move the error feedback below min and max input fields









































// function outsideRangeError(e) {
//   e.preventDefault();
//   if (nameOneGuess.value < minRange.value || nameOneGuess.value > maxRange.value) {
//     console.log('name1guess', nameOneGuess.value);
//     console.log('chall1feedback', challenger1Feedback);
//     challenger1Feedback.innerText = 'Sorry, that\'s outside the range you set, try again';
// } else {
//   submitGuessPlayerOne(e);
// }
// }

// function submitGuessPlayerOne(e) {
//   e.preventDefault();
//   latestScoreNum1.innerText = nameOneGuess.value;
//   if (nameOneGuess.value == randomNumber) {
//     challenger1Feedback.innerText = 'BOOM!';
//   } else if (nameOneGuess.value < randomNumber && nameOneGuess >= minRange.value) {
//     challenger1Feedback.innerText = 'That\'s too low'; 
// } else if (nameOneGuess.value > randomNumber && nameOneGuess<= maxRange.value) {
//     challenger1Feedback.innerText = 'That\'s too high';
//     } 
// }





//when you click the submit

// function submitGuessPlayerTwo(e) {
//   e.preventDefault();
//   latestScoreNum2.innerText = nameTwoGuess.value;
//   if (nameTwoGuess.value == randomNumber) {
//     challenger2Feedback.innerText = 'BOOM!';
//     } else if (nameTwoGuess.value < minRange.value || nameTwoGuess.value > maxRange.value) {
//     challenger2Feedback.innerText = 'Sorry, that\'s outside the range you set, try again';
//   } else if (nameTwoGuess.value < randomNumber) {
//     challenger2Feedback.innerText = 'That\'s too low'; 
//   } else if (nameTwoGuess.value > randomNumber){
//     challenger2Feedback.innerText = 'That\'s too high';
// }
// }
