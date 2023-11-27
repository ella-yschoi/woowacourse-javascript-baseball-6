import { Console, Random } from '@woowacourse/mission-utils';
import { GAME, REGEX } from './constants.js';

const printMessage = (message) => Console.print(message);

const generateNumberInRange = (min, max) => Random.pickNumberInRange(min, max);

const throwError = (message) => {
throw new Error(message);
};

const isNumeric = (input) => REGEX.positive_integer.test(input);

const isUniqueDigits = (input) => {
  const inputString = input.toString();
  const digits = inputString.split('');
  const uniqueDigits = new Set(digits);
  return uniqueDigits.size === GAME.size;
};

export { printMessage, generateNumberInRange, throwError, isNumeric, isUniqueDigits };