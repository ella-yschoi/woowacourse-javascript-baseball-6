import { HINT } from './common/constants.js';

class HintGenerator {
  // 숫자 형태로 받은 것을 문자열로 변환한 후 배열로 변환
  static convertNumberToArray(number) {
    // 숫자가 문자열이 아닐 경우 문자열로 변환
    const numberString = number.toString();
    return numberString.split('');
  }

  // 스트라이크 개수 계산 (유저 배열과 컴퓨터 배열을 비교: reduce 사용)
  static countStrike(userNumberArray, computerNumberArray) {
    return userNumberArray.reduce((strike, num, index) => {
      if (num === computerNumberArray[index]) {
        strike += 1;
      }
      return strike;
    }, 0);
  }

  // 볼 개수 계산 (유저 배열과 컴퓨터 배열 비교: filter 사용 -> 스트라이크 개수 빼기)
  static countBall(userNumberArray, computerNumberArray) {
    const commonNumbers = userNumberArray.filter(num => computerNumberArray.includes(num)).length;
    const strikeNumber = this.countStrike(userNumberArray, computerNumberArray);
    return commonNumbers - strikeNumber;
  }

  // 위의 계산식에서 리턴된 숫자를 다시 문자열로 변환
  static convertNumberToString(strikeNumber, ballNumber) {
    const hintParts = [];
    if (ballNumber > 0) hintParts.push(`${ballNumber}${HINT.ball}`);
    if (strikeNumber > 0) hintParts.push(`${strikeNumber}${HINT.strike}`);
    return hintParts.join(' ') || HINT.nothing;
  }

  // 변환된 유저 숫자와 컴퓨터 숫자를 비교해 힌트 제공 -> BaseballGame 클래스에서 사용 예정
  static getHint(computerNumber, userNumber) {
    const computerNumberArray = HintGenerator.convertNumberToArray(computerNumber);
    const userNumberArray = HintGenerator.convertNumberToArray(userNumber);

    const strikeNumber = HintGenerator.countStrike(computerNumberArray, userNumberArray);
    const ballNumber = HintGenerator.countBall(computerNumberArray, userNumberArray, strikeNumber);

    return HintGenerator.convertNumberToString(strikeNumber, ballNumber);
  }
}

export default HintGenerator;
