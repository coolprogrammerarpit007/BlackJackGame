`use strict`;

// challenge:1

// let age = 22;
// if (age >= 21) {
//   console.log(`Welcome to the club!!`);
// } else {
//   console.log(`Sorry, try next year.`);
// }

// challenge: 2
// let age = 100;

// if (age < 100) {
//   console.log(
//     `Not Eligible, you have still ${
//       100 - age
//     } years short to get your greeting card from the king.`
//   );
// } else if (age === 100) {
//   console.log(`Here is your birthday card from the king.`);
// } else {
//   console.log(
//     `Not eligible,you have already got your greeting card from king ${
//       age - 100
//     } years ago. `
//   );
// }

// Array Challenge

// const myProfile = [
//   `I have 2 years experience in copmuter programming`,
//   `Completed my engineering with honors`,
//   `Completed certifications with microoft,google`,
//   `My Skills are: HTML,CSS,JS,REACTJS,API,BOOTSTRAP`,
// ];
// console.log(myProfile);

// Challenge 5

// const mySelf = [`Arpit Mishra`, 24, true];
// console.log(mySelf[0]);
// console.log(mySelf[1]);
// console.log(mySelf[2]);

// challenges 6

// let messages = [
//   `Hey, how's it going`,
//   `I am great, how about you?`,
//   `All good working on my portfolio`,
// ];

// let newMsg = `Same here!`;
// messages.push(newMsg);
// console.log(messages);
// messages.pop();
// console.log(messages);

// challenge 7
// for (let count = 10; count <= 100; count += 10) {
//   console.log(count);
// }

// challenge 8

// let arr = [7, 8, 9];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// challenge 9
// let sentence = [`Hello`, `my`, `name`, `is`, `Arpit`];
// const greetingEl = document.getElementById(`greeting-el`);
// sentence.push(`Mishra`);
// for (let i = 0; i < sentence.length; i++) {
//   greetingEl.textContent += sentence[i] + ` `;
// }

// challenge 10

// let player1Time = 102;
// let player2Time = 107;
// function totalRaceTime() {
//   return player1Time + player2Time;
// }

// let totalTime = totalRaceTime();
// console.log(totalTime);

// challenge 11

// function rollDice() {
//   return Math.floor(Math.random() * 6) + 1;
// }

// challenge 12
// let hasSolvedChallenge = false;
// let hasHintsLeft = false;

// if (hasSolvedChallenge === false && hasHintsLeft === false) {
//   showSolution();
// }

// function showSolution() {
//   console.log(`Showing the solution.....`);
// }
// state variables

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = ``;

// DOM ELEMENTS
const startGameBtn = document.getElementById(`btn`);
const newGameBtn = document.getElementById(`new-btn`);
const msgEl = document.getElementById(`message-el`);
const sumEl = document.getElementById(`sum-el`);
const cardsEl = document.getElementById(`cards-el`);
let player = {
  playerName: `Arpit`,
  playerChips: 178,
};

const playerEl = document.getElementById(`player-el`);
playerEl.textContent = player.playerName + ": $" + player.playerChips;
// getRandomCard function

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  // console.log(randomNumber);
  if (randomNumber === 1) {
    randomNumber = 11;
  } else if (randomNumber > 10) {
    randomNumber = 10;
  }
  return randomNumber;
}
// StartCame function

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  sum = firstCard + secondCard;
  cards = [firstCard, secondCard];
  renderGame();
}
// renderCame function
const renderGame = function () {
  // render out first card and second card
  cardsEl.textContent = `Cards:  `;
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += ` ` + cards[i];
  }

  // render out all the cards
  sumEl.textContent = `Sum: ${sum}`;
  if (sum <= 20) {
    message = `Do you want to draw a new card?`;
  } else if (sum === 21) {
    message = `Congratulations! you got the BlackJack`;
    hasBlackJack = true;
  } else {
    message = `Sorry, you lose your money!`;
    isAlive = false;
  }
  msgEl.textContent = message;
};

// New Game function
const newGame = function () {
  // console.log(`New Game`);
  if (isAlive && hasBlackJack === false) {
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);
    renderGame();
  }
  // console.log(cards);
};
// Adding Event Listener to startGame btn

startGameBtn.addEventListener(`click`, startGame);

// Adding Event Listener to newGame btn

newGameBtn.addEventListener(`click`, newGame);
