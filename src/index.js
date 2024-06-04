import readlineSync from 'readline-sync';

const countIterations = 3;

export default function startGame(descriptionGame, getGame) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(descriptionGame);
  for (let i = 0; i < countIterations; i += 1) {
    const [question, correctAnswer] = getGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer:');
    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
}
