import { GAME } from './constants.js';
import { isNumeric, isUniqueDigits } from './utils.js';

const isValidGameInputDuringGame = (input) => {
  const inputStr = input.toString();
  const isCorrectLength = inputStr.length === GAME.size;
  const isInputNumeric = isNumeric(input);
  const hasUniqueDigits = isUniqueDigits(input);

  return isCorrectLength && isInputNumeric && hasUniqueDigits;
};

export default isValidGameInputDuringGame;
