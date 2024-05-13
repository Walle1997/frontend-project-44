import { getQuestion } from './helpers.js';

const UserHello = () => {
  console.log('Welcome to the Brain Games!');
  const name = getQuestion('May I have your name? ');
  return `Hello, ${name}!`;
};
export default UserHello;
