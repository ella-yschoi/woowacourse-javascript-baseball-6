import { GAME } from './constants.js';
import { isNumeric, isUniqueDigits } from './utils.js';

export const isValidGameInputDuringGame = (userInputValue) => userInputValue.toString().length === GAME.size
  && isUniqueDigits(userInputValue) && isNumeric(userInputValue);
