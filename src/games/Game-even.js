import startGame from '../index.js';
import { getRandom } from '../helpers.js';

const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const evenData = () => {
  const answer = ['yes', 'no'];
  const question = getRandom();
  if (question % 2 === 0) {
    return [question, answer[0]];
  } if (question % 2 === 1) {
    return [question, answer[1]];
  }
  return false;
};
export default function startEvenGame() {
  startGame(descriptionGame, evenData);
}
