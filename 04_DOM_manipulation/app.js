/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, prevDice1, prevDice2, playLimit;

init();

//Event listeners
document.querySelector('.btn-roll').addEventListener('click', rollButton);

function rollButton() {

    if(gamePlaying) {

        //1. Random number
        var dice1 = Math.floor(Math.random()*6)+1;
        var dice2 = Math.floor(Math.random()*6)+1;

        //Display the result
        var diceContainer = document.querySelector('.dice-container');
    
        diceContainer.style.display = 'block'
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

        //Update the round score IF the rolled number was NOT a 1
        if (dice1 !== 1 && dice2 !== 1) {            

            if( (dice1 === 6 && dice2 === 6) || (dice1 === 6 && ( prevDice1 === 6 || prevDice2 === 6 ) ) || (dice2 === 6 && ( prevDice1 ===6 || prevDice2 === 6 ) ) ) {

                //reset score for current player to 0
                scores[activePlayer] = 0;
                updateScore();
                nextPlayer();

            } else {
                // add score
                roundScore += dice1 + dice2;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
                prevDice1 = dice1;
                prevDice2 = dice2;
            }
        

        } else {
            // Next player
            nextPlayer();

        }

    }

}

document.querySelector('.btn-hold').addEventListener('click', function() {

    if (gamePlaying) {
        //add current score to global score
        scores[activePlayer] += roundScore;

        //update the UI
        updateScore();

        // undifiend 0, null or "" are coerced to false
        var input = document.getElementById('play-limit').value ? document.getElementById('play-limit').value : 100;

        // console.log(input);

        //check IF player won the game
        if  (scores[activePlayer] >= input) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!!!';
            document.querySelector('.dice-container').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }

});


function updateScore() {
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
}


function nextPlayer() {
    // Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');


    prevDice1 = 0;
    prevDice2 = 0;

    // diceDOM.style.display = 'none'; -> don't like it, I want ONE to stay

}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores=[0,0];
    activePlayer = 0;
    roundScore = 0;

    gamePlaying = true;

    document.querySelector('.dice-container').style.display = 'none';
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    //set palyer names
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');

}