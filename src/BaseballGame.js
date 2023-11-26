import { Console } from '@woowacourse/mission-utils';
import Generator from './Generator.js';
import { isValidGameInputDuringGame } from './validator.js';
import { getHintToUser } from './hintMaker.js';
import { LOG, HINT, GAME, ERROR } from './constants.js';
import { printMessage, throwError } from './utils.js'

class BaseballGame {
  constructor() {
    this.computer = new Generator();
  }

  async startGame() {
    await this.getUserInput();
  }

  async getUserInput() {
    const input = await Console.readLineAsync(LOG.input_number);
    this.handleUserInputDuringGame(input);
  }

  async recommendRestart() {
    await printMessage(LOG.correct_end);

    const input = await Console.readLineAsync(`${LOG.restart_input}\n`);
    this.handleUserInputEndGame(input);
  }

  handleUserInputDuringGame(input) {
    if (!isValidGameInputDuringGame(input)) {
      throwError(ERROR.incorrect_value);
    }

    const hintMessage = getHintToUser(this.computer.computerNumber, input);
    printMessage(hintMessage);

    if (hintMessage === HINT.all_strike) {
      this.recommendRestart();
      return;
    }
    this.getUserInput();
  }

  async handleUserInputEndGame(input) {
    const isValidGameInputEndGame = [GAME.restart, GAME.end];

    if (!isValidGameInputEndGame.includes(input)) {
      throwError(ERROR.incorrect_value);
      return;
    }
    if (input === GAME.restart) {
      this.restartGame();
      return;
    }
    if (input === GAME.end) {
      printMessage(LOG.end_game);
    }
  }

  restartGame() {
    this.computer.generateNewCorrectNumber();
    this.startGame();
  }
}

export default BaseballGame;
