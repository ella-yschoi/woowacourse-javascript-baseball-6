import { Random } from '@woowacourse/mission-utils';
import { GAME } from './common/constants.js';

class RandomGenerator {
  constructor() {
    this.generateComputerNumber = new this.generateNumber();
  }

  generateNewNumber() {
    this.generateComputerNumber = new this.generateNumber();
  }

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
