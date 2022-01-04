'use strict';

let secretNumber = Math.trunc(Math.random() * 50 + 1);
let score = 50;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess);
  // if the guess is 0
  if (!guess) {
    displayMessage('Please enter a number!');
  }

  //if the guess is equal to secret number
  else if (guess == secretNumber) {
    displayMessage(' you have won the match!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you lost ');
      document.querySelector('.score').textContent = 0;
    }
  }
  //if the guess is too high
  /*else if (guess > secretNumber) {
    if (score > 1) {
      displayMessage('too high');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you lost ');
    }
  }

  //if the guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      displayMessage('too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you lost');
    }
  }*/

  //To get back to original position...
  document.querySelector('.again').addEventListener('click', function () {
    score = 50;
    secretNumber = Math.trunc(Math.random() * 50) + 1;

    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
});
