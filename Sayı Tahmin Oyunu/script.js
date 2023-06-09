'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let attempts = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('Bir sayı giriniz!');
  } else if (guess === secretNumber) {
    displayMessage('Doğru Tahmin!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.color = '#60b347';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore-value').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess < secretNumber ? 'Tahmininiz sayıdan düşük.' : 'Tahmininiz sayıdan yüksek.');
      document.querySelector('.score-value').textContent = --score;
    } else {
      displayMessage('Oyunu kaybettiniz.');
      document.querySelector('.score-value').textContent = 0;
    }
  }

  attempts++;
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  attempts = 0;

  displayMessage('Hadi yeniden başlayalım!');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.color = '#333';
  document.querySelector('.guess').value = '';
  document.querySelector('.score-value').textContent = score;
});

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.score-value').textContent = score;
  document.querySelector('.highscore-value').textContent = highScore;
});