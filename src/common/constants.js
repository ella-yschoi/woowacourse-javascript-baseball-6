const LOG = Object.freeze({
  start_game: '숫자 야구 게임을 시작합니다.',
  input_number: '숫자를 입력해주세요 : ',
  correct_end: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  end_game: '게임 종료',
  restart_input: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
});

const HINT = Object.freeze({
  ball: '볼',
  strike: '스트라이크',
  nothing: '낫싱',
  all_strike: '3스트라이크',
});

const GAME = Object.freeze({
  min_count: 1,
  max_count: 9,
  size: 3,
  restart: '1',
  end: '2',
});

const REGEX = Object.freeze({
  positive_integer: /^[1-9]+$/,
});

const ERROR = Object.freeze({
  incorrect_value: '[ERROR] 숫자가 잘못된 형식입니다.',
});

export { LOG, HINT, GAME, REGEX, ERROR };