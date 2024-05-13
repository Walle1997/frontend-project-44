import { getQuestion } from './helpers.js';

export default function startGame(descriptionGame, getGame) {
  const countIterations = 3;

  console.log('Welcome to the Brain Games!');
  const name = getQuestion('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(descriptionGame);
  for (let i = 0; i < countIterations; i += 1) {
    const [question, correctAnswer] = getGame();
    console.log(`Question: ${question}`);
    const userAnswer = getQuestion('Your answer:');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
}
