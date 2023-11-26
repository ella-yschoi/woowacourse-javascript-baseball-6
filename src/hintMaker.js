import { HINT } from './constants.js';

const countStrike = (computerNumber, userNumber) => {
  let strikeNumber = 0;
  const computerNumberArray = computerNumber.split('');
  const userNumberArray = userNumber.split('');

  for (let i = 0; i < computerNumber.length; i+=1) {
    if (computerNumberArray[i] === userNumberArray[i]) {
      strikeNumber += 1;
    }
  }

  return strikeNumber;
};

const countBall = (computerNumber, userNumber, strikeNumber) => {
  const computerNumberArray = computerNumber.split('');
  const userNumberArray = userNumber.split('');
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
