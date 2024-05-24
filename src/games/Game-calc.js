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
  return [question, answer];
}

// eslint-disable-next-line no-shadow
function calculateAnswer(randomOperator, random, random2, answer) {
  if (randomOperator === '+') {
    answer = random + random2;
  } else if (randomOperator === '-') {
    answer = random - random2;
  } else if (randomOperator === '*') {
    answer = random * random2;
  }
  return answer;
}

export default function startCalcGame() {
  startGame(descriptionGame, calcData);
}
