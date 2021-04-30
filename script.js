'use strict';
// Selecting elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // 3. Check for rolled 1
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    if (player0.classList.contains('player--active')) {
      current0El.textContent = currentScore;
    } else if (player1.classList.contains('player--active')) {
      current1El.textContent = currentScore;
    }
  } else if (dice === 1) {
    //   switch to next player
    currentScore = 0;
    current0El.textContent = currentScore;
    current1El.textContent = currentScore;
    if (player0.classList.contains('player--active')) {
      player0.classList.remove('player--active');
      player1.classList.add('player--active');
    } else {
      player1.classList.remove('player--active');
      player0.classList.add('player--active');
    }
  }
});

//   Hold button fuctionality
btnHold.addEventListener('click', function () {
  if (currentScore !== 0) {
    if (player0.classList.contains('player--active')) {
      currentScore += score0El.textContent * 1;
      score0El.textContent = currentScore;
      if (score0El.textContent * 1 >= 100) {
        document.getElementById('name--0').textContent = 'PLAYER 1 WINS 🏆';
        btnRoll.setAttribute('disabled', 'true');
        btnHold.setAttribute('disabled', 'true');
      }
      player0.classList.remove('player--active');
      player1.classList.add('player--active');
    } else if (player1.classList.contains('player--active')) {
      currentScore += score1El.textContent * 1;
      score1El.textContent = currentScore;
      if (score1El.textContent * 1 >= 100) {
        document.getElementById('name--1').textContent = 'PLAYER 2 WINS 🏆';
        btnRoll.setAttribute('disabled', 'true');
        btnHold.setAttribute('disabled', 'true');
      }
      player1.classList.remove('player--active');
      player0.classList.add('player--active');
    }
    currentScore = 0;
    current1El.textContent = currentScore;
    current0El.textContent = currentScore;
  }
});

// New game button functionality

btnNew.addEventListener('click', function () {
  diceEl.classList.add('hidden');
  player1.classList.remove('player--active');
  player0.classList.add('player--active');
  currentScore = 0;
  current1El.textContent = currentScore;
  current0El.textContent = currentScore;
  score0El.textContent = currentScore;
  score1El.textContent = currentScore;
  document.getElementById('name--0').textContent = 'PLAYER 1';
  document.getElementById('name--1').textContent = 'PLAYER 2';
  btnRoll.removeAttribute('disabled');
  btnHold.removeAttribute('disabled');
});

// Function check activity player

// const checkActive = function (playerAdd, playerRemove) {
//   `player${playerRemove}`.classList.remove('player--active');
//   `player${playerAdd}`.classList.add('player--active');
// };
