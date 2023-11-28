import { HINT } from './common/constants.js';

class HintGenerator {
  /**
  * 주어진 숫자를 문자열 배열로 변환한다.
  * @param {number|string} number - 변환할 숫자는 문자열이 아닐 경우 문자열로 변환된다.
  * @returns {string[]} 숫자의 각 자리를 요소로 하는 문자열 배열
  */
  static convertNumberToArray(number) {
    const numberString = number.toString();
    return numberString.split('');
  }

  /**
  * 스트라이크의 개수를 계산한다.
  * @param {string[]} userNumberArray - 사용자의 숫자 배열
  * @param {string[]} computerNumberArray - 컴퓨터의 숫자 배열
  * @returns {number} 스트라이크의 개수
  */
  static countStrike(userNumberArray, computerNumberArray) {
    return userNumberArray.reduce((strike, num, index) => {
      if (num === computerNumberArray[index]) {
        strike += 1;
      }
      return strike;
    }, 0);
  }

  /**
  * 볼의 개수를 계산한다.
  * @param {string[]} userNumberArray - 사용자의 숫자 배열
  * @param {string[]} computerNumberArray - 컴퓨터의 숫자 배열
  * @returns {number} 볼의 개수
  */
  static countBall(userNumberArray, computerNumberArray) {
    const commonNumbers = userNumberArray.filter(num => computerNumberArray.includes(num)).length;
    const strikeNumber = this.countStrike(userNumberArray, computerNumberArray);
    return commonNumbers - strikeNumber;
  }

  /**
  * 계산된 스트라이크와 볼의 개수를 문자열로 변환한다.
  * @param {number} strikeNumber - 스트라이크의 개수
  * @param {number} ballNumber - 볼의 개수
  * @returns {string} 스트라이크와 볼의 상태를 설명하는 문자열
  */
  static convertNumberToString(strikeNumber, ballNumber) {
    const hintParts = [];
    if (ballNumber > 0) hintParts.push(`${ballNumber}${HINT.ball}`);
    if (strikeNumber > 0) hintParts.push(`${strikeNumber}${HINT.strike}`);
    return hintParts.join(' ') || HINT.nothing;
  }

  /**
  * 컴퓨터의 숫자와 사용자의 숫자를 비교하여 힌트를 제공한다.
  * @param {number|string} computerNumber - 컴퓨터의 숫자
  * @param {number|string} userNumber - 사용자의 숫자
  * @returns {string} 게임의 현재 상태에 대한 힌트
  */
  static getHint(computerNumber, userNumber) {
    const computerNumberArray = HintGenerator.convertNumberToArray(computerNumber);
    const userNumberArray = HintGenerator.convertNumberToArray(userNumber);

    const strikeNumber = HintGenerator.countStrike(computerNumberArray, userNumberArray);
    const ballNumber = HintGenerator.countBall(computerNumberArray, userNumberArray, strikeNumber);

    return HintGenerator.convertNumberToString(strikeNumber, ballNumber);
  }
}

export default HintGenerator;
