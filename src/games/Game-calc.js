import { getRandom } from '../helpers.js';
import startGame from '../index.js';

const answers = ['+', '-', '*'];
const descriptionGame = 'What is the result of the expression?';
const calcData = () => {
  let answer = 0;
  const random = getRandom();
  const random2 = getRandom();
  const randomOperator = answers[getRandom(0, answers.length - 1)].slice(0, 1);
  const question = `${random} ${randomOperator} ${random2}`;
  if (randomOperator === '+') {
    answer = random + random2;
  } else if (randomOperator === '-') {
    answer = random - random2;
  } else if (randomOperator === '*') {
    answer = random * random2;
  }
  return [question, String(answer)];
};
export default function startCalcGame() {
  startGame(descriptionGame, calcData);
}
