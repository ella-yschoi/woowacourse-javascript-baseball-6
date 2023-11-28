import { Console, Random } from '@woowacourse/mission-utils';
import { GAME, REGEX } from './constants.js';

/**
* 메시지를 출력한다.
* @param {string} message - 출력할 메시지
*/
const printMessage = (message) => Console.print(message);

/**
* 특정 범위 내에서 랜덤한 숫자를 생성한다.
* @param {number} min - 생성할 숫자의 최소값
* @param {number} max - 생성할 숫자의 최대값
* @returns {number} 생성된 랜덤 숫자
*/
const generateNumberInRange = (min, max) => Random.pickNumberInRange(min, max);

/**
* 에러 메시지와 함께 예외를 발생시킨다.
* @param {string} message - 에러 메시지
* @throws {Error} 메시지를 포함하는 에러
*/
const throwError = (message) => {
  throw new Error(message);
};

/**
* 주어진 입력값이 숫자로만 이루어져 있는지 확인한다.
* @param {string} input - 검증할 문자열
* @returns {boolean} 입력값이 숫자인 경우 true
*/
const isNumeric = (input) => REGEX.positive_integer.test(input);

/**
* 입력값의 모든 숫자가 고유한지 확인한다.
* @param {string|number} input - 검증할 입력값
* @returns {boolean} 입력값의 모든 숫자가 고유하면 true
*/
const isUniqueDigits = (input) => new Set(input.toString().split('')).size === GAME.size;

export { printMessage, generateNumberInRange, throwError, isNumeric, isUniqueDigits };
