import startGame from '../index.js';
import { getRandom } from '../helpers.js';

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
}

const descriptionGame = 'Find the greatest common divisor of given numbers.';
const gcdData = () => {
  const random = getRandom();
  const random2 = getRandom();
  const question = `${random} ${random2}`;
  const maxDivisorRandom = getGcd(random, random2);
  return [question, String(maxDivisorRandom)];
};
export default function startGcdGame() {
  startGame(descriptionGame, gcdData);
}
