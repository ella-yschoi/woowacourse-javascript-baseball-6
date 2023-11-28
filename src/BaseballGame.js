import { Console } from '@woowacourse/mission-utils';
import RandomGenerator from './RandomGenerator.js';
import HintGenerator from './HintGenerator.js';
import { ERROR, LOG, GAME, HINT } from './common/constants.js';
import { printMessage, throwError } from './common/utils.js';
import isValidInputDuringGame from './common/validator.js';

class BaseballGame {
  /**
  * BaseballGame 클래스의 인스턴스를 생성한다.
  * 랜덤 숫자 생성기 인스턴스를 초기화한다.
  */
  constructor() {
    this.computuer = new RandomGenerator();
  }

  /**
  * 게임 시작과 동시에 사용자로부터 숫자를 입력받는다.
  */
  async startGame() {
    await this.getUserInput();
  }

  /**
  * 사용자로부터 세 자리 숫자를 입력받는다.
  */
  async getUserInput() {
    const input = await Console.readLineAsync(LOG.input_number);
    this.handleUserInputDuringGame(input)
  }

  /**
  * 사용자가 정답을 맞췄을 경우, 게임 재시작 여부를 묻는다.
  */
  async recommendRestart() {
    printMessage(LOG.correct_end);
    const input = await Console.readLineAsync(`${LOG.restart_input}\n`);
    this.handleUserInputEndGame(input);
  }

  /**
  * 게임 중 사용자의 입력을 처리한다.
  * @param {string} input - 사용자로부터 입력받은 숫자.
  */
  handleUserInputDuringGame(input) {
    if(!isValidInputDuringGame(input)) {
      throwError(ERROR.incorrect_value);
    }

    const hintMessage = HintGenerator.getHint(this.computuer.computerNumber, input);
    printMessage(hintMessage);

    if (hintMessage === HINT.all_strike) {
      this.recommendRestart();
      return;
    }

    this.getUserInput();
  }
  
  /**
  * 게임 종료 후 사용자의 입력을 처리한다.
  * @param {string} input - 사용자로부터 입력받은 숫자.
  */
  async handleUserInputEndGame(input) {
    const isValidRecommendValue = [GAME.restart, GAME.end];

    if (!isValidRecommendValue.includes(input)) {
      throwError(ERROR.incorrect_value);
      return;
    }
    if (input === GAME.restart) {
      this.restartGame();
      return;
    }
    if (input === GAME.end) {
      printMessage(LOG.end_game)
    }
  }

  /**
  * 게임을 재시작한다.
  */
  restartGame() {
    this.computuer.generateNewNumber();
    this.startGame();
  }
}

export default BaseballGame;
