import game from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num $ 2 === 0;

function randomInteger(min, max) {
let rand = min + Math.random() * (max + 1 - min);
return Math.floor(rand);
};

const getQuestionAndAnswer = () => {
    const question = randomInteger(1, 9);
    const correctAnswer = isEven(question) ? 'yes' : 'no';

    return [question, correctAnswer];
};
export default () => {
    game(description, getQuastionAndAnswer);
};
