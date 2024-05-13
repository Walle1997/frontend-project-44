import startGame from '../index.js';
import { getRandom, getRandomPrime } from '../helpers.js';

const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const primeData = () => {
  const question = getRandom(2);
  const indexPrime = getRandomPrime(question);
  if (indexPrime === 0) {
    return [question, 'yes'];
  }

  return [question, 'no'];
};
export default function startPrimeGame() {
  startGame(descriptionGame, primeData);
}
