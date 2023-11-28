import { Random } from '@woowacourse/mission-utils';
import { GAME } from './common/constants.js';

class RandomGenerator {
  /**
  * RandomGenerator 클래스의 인스턴스를 생성하고, 랜덤 숫자를 생성한다.
  */
  constructor() {
    this.computerNumber = this.generateNumber();
  }

  /**
  * 게임 재시작 시 새로운 랜덤 숫자를 생성한다.
  */
  generateNewNumber() {
    this.computerNumber = this.generateNumber();
  }

  /**
  * GAME.size에 정의된 길이만큼 랜덤 숫자를 생성한다.
  * 생성된 숫자는 중복되지 않는다.
  * @returns {string} 생성된 랜덤 숫자 문자열
  */
  generateNumber() {
    const numbers = new Set();

    while (numbers.size < GAME.size) {
      const number = Random.pickNumberInRange(GAME.min_count, GAME.max_count);
      numbers.add(number);
    }

    return Array.from(numbers).join('');
  }
}

export default RandomGenerator;
