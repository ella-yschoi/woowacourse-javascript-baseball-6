import BaseballGame from './BaseballGame.js';
import { LOG } from './common/constants.js';
import { printMessage } from './common/utils.js';

class App {
  /**
  * App 클래스의 인스턴스를 생성하고, BaseballGame 인스턴스를 초기화한다.
  */
  constructor() {
    this.game = new BaseballGame();
  }

  /**
  * 게임을 시작하는 메서드
  * 게임 시작 메시지를 출력하고 BaseballGame 인스턴스의 startGame 메서드를 호출한다.
  */
  async play() {
    printMessage(LOG.start_game);
    await this.game.startGame();
  }
}

export default App;
