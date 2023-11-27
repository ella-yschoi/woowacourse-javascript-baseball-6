import BaseballGame from './BaseballGame.js';
import { LOG } from './common/constants.js';
import { printMessage } from './common/utils.js';

class App {
  constructor() {
    this.game = new BaseballGame();
  }

  async play() {
    printMessage(LOG.start_game);
    await this.game.startGame();
  }
}

export default App;
