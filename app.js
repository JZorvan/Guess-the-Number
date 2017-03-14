'use strict';

let guess;
let attempts = 0;
let correct = false;

const getRandomNum = (limit) => {
  const num = Math.floor(Math.random() * limit) + 1; 
  return num;
}

const targetNum = getRandomNum(10);

do {
	guess = prompt("Guess the number between 1 and 10.");
	attempts++;
	if (parseInt(guess) === targetNum) {
		correct = true;
	}
} while (!correct)

document.write(`<p>You guessed correctly!</p>`);
document.write(`<p>It took you ${attempts} tries.</p>`);
