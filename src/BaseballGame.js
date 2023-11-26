import { Console } from '@woowacourse/mission-utils';
import Generator from './Generator.js';
import { isValidGameInputDuringGame } from './validator.js';
import { getHintToUser } from './hintMaker.js';
import { LOG_MESSAGE, HINT_MESSAGE, GAME_SELECT, ERROR_MESSAGE } from './constants.js';
import { printMessage, throwError } from './utils.js'

class BaseballGame {
  constructor() {
    this.computer = new Generator();
  }

  async startGame() {
    await this.getUserInput();
  }

  async getUserInput() {
    const input = await Console.readLineAsync(LOG_MESSAGE.input_number);
    this.handleUserInputDuringGame(input);
  }

  async recommendRestart() {
    await printMessage(LOG_MESSAGE.correct_end);

    const input = await Console.readLineAsync(`${LOG_MESSAGE.restart_input}\n`);
    this.handleUserInputEndGame(input);
  }

  handleUserInputDuringGame(input) {
    if (!isValidGameInputDuringGame(input)) {
      throwError(ERROR_MESSAGE.incorrect_value);
    }

    const hintMessage = getHintToUser(this.computer.computerNumber, input);
    printMessage(hintMessage);

    if (hintMessage === HINT_MESSAGE.all_strike) {
      this.recommendRestart();
      return;
    }
    this.getUserInput();
  }

  async handleUserInputEndGame(input) {
    const isValidGameInputEndGame = [GAME_SELECT.restart, GAME_SELECT.end];

    if (!isValidGameInputEndGame.includes(input)) {
      throwError(ERROR_MESSAGE.incorrect_value);
      return;
    }
    if (input === GAME_SELECT.restart) {
      this.restartGame();
      return;
    }
    if (input === GAME_SELECT.end) {
      printMessage(LOG_MESSAGE.end_game);
    }
  }

  restartGame() {
    this.computer.generateNewCorrectNumber();
    this.startGame();
  }
}

export default BaseballGame;
