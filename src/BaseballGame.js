import { Console } from '@woowacourse/mission-utils';
import RandomGenerator from './RandomGenerator.js';
import HintGenerator from './HintGenerator.js';
import { ERROR, LOG, GAME, HINT } from './common/constants.js';
import { printMessage, throwError } from './common/utils.js';
import isValidInputDuringGame from './common/validator.js';

class BaseballGame {
  // 랜덤 숫자 생성하기
  constructor() {
    this.computuer = new RandomGenerator();
  }

  // 게임 시작
  async startGame() {
    await this.getUserInput();
  }

  // 세 자리 숫자 입력받기
  async getUserInput() {
    const input = await Console.readLineAsync(LOG.input_number);
    this.handleUserInputDuringGame(input)
  }

  // 성공하면 재시작 여부 묻기
  async recommendRestart() {
    printMessage(LOG.correct_end);
    const input = await Console.readLineAsync(`${LOG.restart_input}\n`);
    this.handleUserInputEndGame(input);
  }

  handleUserInputDuringGame(input) {
    // 입력받은 숫자 유효성 검증해서 아니면 에러 뱉기
    if(!isValidInputDuringGame(input)) {
      throwError(ERROR.incorrect_value);
    }

    // 입력한 값에 따라 힌트 출력하기 -> HintGenerator 활용
    const hintMessage = HintGenerator.getHint(this.computuer.computerNumber, input);
    printMessage(hintMessage);

    // 스트라이크 -> 재시작 묻기
    if (hintMessage === HINT.all_strike) {
      this.recommendRestart();
      return;
    }

    // 아니면 -> 다시 입력 받기
    this.getUserInput();
  }
  
  // 재시작 여부 유효성 검증 -> 1이나 2 아니면 에러
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

  // 게임 재시작 로직
  restartGame() {
    this.computuer.generateNewNumber();
    this.startGame();
  }
}

export default BaseballGame;
