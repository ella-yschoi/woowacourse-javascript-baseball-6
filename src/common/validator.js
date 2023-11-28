import { ERROR, GAME } from './constants';
import { isNumeric } from './utils'

const isValidGameInputDuringGame = (input) => {
  if (!isNumeric(input)) {
    throwError(ERROR.incorrect_value);
    return false;
  }

  const number = parseInt(input, 10);
  if (number < GAME.min_count || number > GAME.max_count) {
    throwError(ERROR.incorrect_value);
    return false;
  }

  if (input !== GAME.size) {
    throwError(ERROR.incorrect_value);
    return false;
  }

  if (!isUniqueDigits(number)) {
    throwError(ERROR.incorrect_value);
    return false;
  }

  return true;
};

export default isValidGameInputDuringGame;