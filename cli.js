import readlineSync from 'readline-sync';
 const welcomeMessage = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May i have your name? ');
    console.log(`Hello, ${userName}!`);
 };

 export default welcomeMessage;
