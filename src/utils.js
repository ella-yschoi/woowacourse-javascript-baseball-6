import { Console, Random } from '@woowacourse/mission-utils';
import { GAME, REGEX } from './constants.js';

const printMessage = (message) => Console.print(message);

const generateNumberInRange = (min, max) => Random.pickNumberInRange(min, max);

const throwError = (message, condition = true) => {
  if (condition) throw new Error(message);
};

const isNumeric = (userInputValue) => REGEX.positive_integer.test(userInputValue);

const isUniqueDigits = (userInputValue) => new Set(userInputValue.toString().split('')).size === GAME.size;

const convertStringToArray = (string) => string.split('');

export {
  printMessage, generateNumberInRange, throwError, isNumeric, isUniqueDigits, convertStringToArray,
};
