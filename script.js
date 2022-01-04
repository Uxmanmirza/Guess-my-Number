'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
// console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  // if the guess is 0
  if (!guess) {
    document.querySelector('.message').textContent = 'Please enter a number!';
  }

  //if the guess is equal to secret number
  else if (guess == secretNumber) {
    document.querySelector('.message').textContent = ' you have won the match!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
  }
  //if the guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost ';
    }
  }

  //if the guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost';
    }
  }

  //To get back to original position...
  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    // displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
});
