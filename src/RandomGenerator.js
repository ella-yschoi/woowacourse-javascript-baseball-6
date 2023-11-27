import { GAME } from './common/constants.js';
import { generateNumberInRange } from './common/utils.js';

class RandomGenerator {
  constructor() {
    this.computerNumber = this.generateRandomNumber();
  }

  generateNewCorrectNumber() {
    this.computerNumber = this.generateRandomNumber();
  }

  generateRandomNumber() {
    const generatedNumber = new Set();

    while (generatedNumber.size < GAME.size) {
      const newComputerNumber = generateNumberInRange(GAME.min_count, GAME.max_count);
      generatedNumber.add(newComputerNumber);
    }

    return Array.from(generatedNumber).join('');
  }
}

export default RandomGenerator;
