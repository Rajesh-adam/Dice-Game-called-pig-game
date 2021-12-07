// console.log(dice)
// document.querySelector('#current--' + activePlayer).textContent = dice;
// var x = document.querySelector('#score--0').textContent;





var scores, roundScore, activePlayer, gameStatus = true;
initialize();

document.querySelector('.btn--roll').addEventListener('click', function() {
    if (gameStatus) {
        var dice = Math.floor(Math.random() * 6) + 1;
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = dice + '.png';
        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current--' + activePlayer).textContent = roundScore;

        } else { nextPlayer(); }
    }

});
document.querySelector('.btn--hold').addEventListener('click', function() {
    if (gameStatus) {
        scores[activePlayer] += roundScore;
        document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 100) {
            document.querySelector('#name--' + activePlayer).textContent = 'WINNER!!!';
            document.querySelector('.dice').style.display = 'none';
            gameStatus = false;
        } else { nextPlayer(); }

    }
});
document.querySelector('.btn--new').addEventListener('click', initialize);

function initialize() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamStatus = true;
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score--0').textContent = 0;
    document.getElementById('score--1').textContent = 0;
    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;
    document.getElementById('name--0').textContent = 'Player 1';
    document.getElementById('name--1').textContent = 'Player 2';
}

function nextPlayer() {

    activePlayer = activePlayer ? 0 : 1;

    roundScore = 0;
    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;
    document.querySelector('.player--' + 0).classList.toggle('player--active');
    document.querySelector('.player--' + 1).classList.toggle('player--active');

    document.querySelector('.dice').style.display = 'none';
}
