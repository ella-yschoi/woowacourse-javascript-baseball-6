import { HINT } from './constants.js';
import { convertStringToArray } from './utils.js';

const countStrike = (computerNumber, userNumber) => {
  let strikeNumber = 0;
  const computerNumberArray = convertStringToArray(computerNumber);
  const userNumberArray = convertStringToArray(userNumber);

  for (let i = 0; i < computerNumber.length; i+=1) {
    if (computerNumberArray[i] === userNumberArray[i]) {
      strikeNumber += 1;
    }
  }

  return strikeNumber;
};

const countBall = (computerNumber, userNumber, strikeNumber) => {
  const computerNumberArray = convertStringToArray(computerNumber);
  const userNumberArray = convertStringToArray(userNumber);
  const commonNumbers = computerNumberArray.filter((number) => userNumberArray.includes(number)).length;

  return commonNumbers - strikeNumber;
};

const convertNumberToString = (strikeNumber, ballNumber) => {
  let hintMessage = '';

  if (ballNumber > 0) {
    hintMessage += `${ballNumber}${HINT.ball} `;
  }

  if (strikeNumber > 0) {
    hintMessage += `${strikeNumber}${HINT.strike}`;
  }

  if (!hintMessage) {
    hintMessage += HINT.nothing }

  return hintMessage;
};

export const getHintToUser = (computerNumber, userNumber) => {
  const strikeNumber = countStrike(computerNumber, userNumber);
  const ballNumber = countBall(computerNumber, userNumber, strikeNumber);
  const hintMessage = convertNumberToString(strikeNumber, ballNumber);

  return hintMessage;
};
