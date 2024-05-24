/* eslint-disable no-undef */
import readlineSync from 'readline-sync';

const getRandom = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const getQuestion = (description) => readlineSync.question(description);

function getGcd(a, b) {
  let t = a;
  let c = b;
  while (t !== c) {
    if (t > c) {
      t -= c;
    } else {
      c -= t;
    }
  }
  return t;
};

const getProgressionRandom = (a, b) => {
  let n = 1;
  let elementProgression = a + b;
  const result = [a, elementProgression];
  while (n < 9) {
    elementProgression += b;
    result.push(elementProgression);
    n += 1;
  }
  return result;
};

function getRandomPrime(randomNum) {
  const counter = 10;
  let counter2 = 0;
  for (let i = 2; i <= counter; i += 1) {
    if (randomNum === i) {
      counter2 += 0;
    } else if (randomNum % i === 0) {
      counter2 += 1;
    }
  }
  return counter2;
}

export {
  getGcd, getProgressionRandom, getQuestion, getRandomPrime, getRandom,
};
