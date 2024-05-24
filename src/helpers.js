/* eslint-disable no-undef */
import readlineSync from 'readline-sync';

const getRandom = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const getQuestion = (description) => readlineSync.question(description);


export { getQuestion, getRandom };
