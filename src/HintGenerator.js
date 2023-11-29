import { HINT } from './common/constants.js';

class HintGenerator {
  static convertNumberToArray(number) {
    return number.split('');
  }

  static countStrike(computerNumberArray, userNumberArray) {
    return computerNumberArray.reduce((strikeCount, number, index) => {
      let newStrikeCount = strikeCount;
      if (number === userNumberArray[index]) {
        newStrikeCount += 1;
      }
      return newStrikeCount;
    }, 0);
  }

  static countBall(computerNumberArray, userNumberArray, strikeNumber) {
    const commonNumbers = computerNumberArray.filter((num) => userNumberArray.includes(num)).length;
    return commonNumbers - strikeNumber;
  }

  static convertNumberToString(strikeNumber, ballNumber) {
    const hintParts = [];
    if (ballNumber > 0) hintParts.push(`${ballNumber}${HINT.ball}`);
    if (strikeNumber > 0) hintParts.push(`${strikeNumber}${HINT.strike}`);
    return hintParts.join(' ') || HINT.nothing;
  }

  static getHint(computerNumber, userNumber) {
    const computerNumberArray = HintGenerator.convertNumberToArray(computerNumber);
    const userNumberArray = HintGenerator.convertNumberToArray(userNumber);

    const strikeNumber = HintGenerator.countStrike(computerNumberArray, userNumberArray);
    const ballNumber = HintGenerator.countBall(computerNumberArray, userNumberArray, strikeNumber);

    return HintGenerator.convertNumberToString(strikeNumber, ballNumber);
  }
}

export default HintGenerator;
