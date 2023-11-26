import BaseballGame from './BaseballGame.js';
import { LOG_MESSAGE } from './constants.js';
import { printMessage } from './utils.js'

class App {
  constructor() {
    this.game = new BaseballGame();
  }

  async play() {
    printMessage(LOG_MESSAGE.start_game);
    await this.game.startGame();
  }
}

export default App;
