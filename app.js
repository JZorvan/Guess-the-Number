'use strict';

let guess;
let attempts = 0;

const getRandomNum = (limit) => {
  var num = Math.floor(Math.random() * limit) + 1; 
  return num;
}

const targertNum = getRandomNum(10);
