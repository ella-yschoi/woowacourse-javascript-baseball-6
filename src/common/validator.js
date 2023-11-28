import { GAME } from './constants.js';
import { isNumeric, isUniqueDigits } from './utils.js'

const isValidInputDuringGame = (input) => {
  const inputToSting = input.toString();
  const isValidLength = inputToSting.length === GAME.size;
  const isInputNumeric = isNumeric(input);
  const hasUniqueValue = isUniqueDigits(input);

  return isValidLength && isInputNumeric && hasUniqueValue;
};

export default isValidInputDuringGame;