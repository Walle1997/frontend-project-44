import { question } from 'readline-sync';
import { getRandom } from '../helpers.js';
import startGame from '../index.js';

const answers = ['+', '-', '*'];

const descriptionGame = 'What is the result of the expression?';

function calcData() {
  const random = getRandom();
  const random2 = getRandom();
  const randomOperator = answers[getRandom(0, answers.length - 1)].slice(0, 1);
  const question = `${random} ${randomOperator} ${random2}`;
  const answer = calculateAnswer(random, random2, randomOperator);
  return [question, String(answer)];
}

function calculateAnswer(random, random2, randomOperator) {
  switch (randomOperator) {
    case '+':
      return random + random2;
    case '-':
      return random - random2;
    case '*':
      return random * random2;
    default:
      throw new Error(`There is no such operator like '${randomOperator}'!`);
  }
}

export default function startCalcGame() {
  startGame(descriptionGame, calcData);
}