import startGame from '../index.js';
import { getRandom } from '../helpers.js';

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

const descriptionGame = 'What number is missing in the progression?';
const progressionData = () => {
  const random = getRandom();
  const random2 = getRandom();
  const result = getProgressionRandom(random, random2);
  const elementRandom = Math.floor(Math.random() * ((result.length - 1) - 1 + 1) + 1);
  const answer = result.slice(elementRandom, elementRandom + 1);
  if (result.length === 10) {
    result.splice(elementRandom, 1, '..');
  }
  const question = result.join(' ');
  return [question, String(answer)];
};
export default function startProgressionGame() {
  startGame(descriptionGame, progressionData);
}
