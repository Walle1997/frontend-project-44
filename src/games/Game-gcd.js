/* eslint-disable import/extensions */

import startGame from '../index.js';
import { getNod, getRandom } from '../helpers.js';

const descriptionGame = 'Find the greatest common divisor of given numbers.';
const gcdData = () => {
  const random = getRandom();
  const random2 = getRandom();
  const question = `${random} ${random2}`;
  const maxDivisorRandom = getNod(random, random2);
  return [question, String(maxDivisorRandom)];
};
export default function startGcdGame() {
  startGame(descriptionGame, gcdData);
}
