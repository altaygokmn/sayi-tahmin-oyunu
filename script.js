'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function(){

const guess = Number(document.querySelector('.guess').value);
console.log(guess,typeof guess);
console.log(secretNumber, typeof secretNumber)

// input boş girilirse

if(!guess){
    displayMessage('Bir sayı giriniz!')
}
// kazanma halinde
else if(guess === secretNumber){
    displayMessage('Doğru Tahmin!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('.number').style.color = '#60b347';

    if(score > highScore){
        highScore = score;
        document.querySelector('.highscore').textContent = highscore;

    }
}

// sayıların eşleşmeme durumunda
else if(guess!== secretNumber){
    if(score > 1){
        displayMessage(guess<secretNumber ? 'Tahmininiz sayıdan düşük.':'Tahmininiz sayıdan yüksek.');
        document.querySelector('.score').textContent = score;
    }
    else{
        displayMessage('Oyunu kaybettiniz.');
        document.querySelector('.score').textContent = 0;
    }
}

});
document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Hadi yeniden başlayalım!');
    document.getElementById("numberId").innerHTML = "?";
    document.querySelector('.number').style.color = '#ccc';
    document.querySelector('.guess').textContent = '';
    document.querySelector('.number').style.color = '#333';
    document.querySelector('.number').style.width = '15rem';
});
