import { Random } from '@woowacourse/mission-utils';
import { GAME } from './common/constants';

class RandomGenerator {

  static generateComputerNumber() {
    const numbers = new Set();
    while (numbers.size < GAME.size) {
      const number = Random.pickNumberInRange(GAME.min_count, GAME.max_count);
      numbers.add(number);
    }
    return Array.from(numbers).join('');
  }
}

export default RandomGenerator;
