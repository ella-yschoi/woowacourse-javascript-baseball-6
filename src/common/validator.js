import { GAME } from './constants.js';
import { isNumeric, isUniqueDigits } from './utils.js'

/**
* 숫자 야구 게임 중 사용자의 입력이 유효한지 검증하는 함수.
* 입력값의 길이는 GAME.size(3)여야 하며, 숫자만 포함하고 각 숫자는 고유해야 한다.
* 
* @param {number|string} input - 사용자로부터 입력받은 숫자
* @returns {boolean} 입력값이 유효한지 여부를 나타내는 true/false 값
*/
const isValidInputDuringGame = (input) => {
  const inputToSting = input.toString();
  const isValidLength = inputToSting.length === GAME.size;
  const isInputNumeric = isNumeric(input);
  const hasUniqueValue = isUniqueDigits(input);

  return isValidLength && isInputNumeric && hasUniqueValue;
};

export default isValidInputDuringGame;
