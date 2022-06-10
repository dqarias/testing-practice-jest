/** ********************** Task 1 *********************** */
// Write a function stringLength(string) that takes any
// string as an argument and returns its characters count.

const stringLength = (string) => {
  const countCharacter = string.length;
  if (countCharacter >= 1 && countCharacter <= 10) {
    return countCharacter;
  }
  throw new Error('Your string length is less equal than 1 or greater equal than 10');
};

/** ********************** Task 2 *********************** */
// Write a function reverseString(string) function.
// It should take a string as an argument and return it reversed.

const reverseString = (string) => {
  const array = string.split('');
  const newArray = [];
  let newString = '';
  for (let i = array.length - 1; i >= 0; i -= 1) {
    newArray.push(array[i]);
  }
  newString = newArray.join('');
  return newString;
};

/** ********************** Task 3 *********************** */
// Write a simple calculator class or object, which will
// have 4 methods: add, subtract, divide, and multiply.

class Calculator {
  static add(numbera, numberb) {
    const resultAdd = numbera + numberb;
    return resultAdd;
  }

  static sustract(numbera, numberb) {
    const resultSustract = numbera - numberb;
    return resultSustract;
  }

  static multiply(numbera, numberb) {
    const resultMultiply = numbera * numberb;
    return resultMultiply;
  }

  static divide(numbera, numberb) {
    const resultDivide = numbera / numberb;
    if (numberb === 0) {
      throw new Error('can not divide a number with 0');
    } else {
      return resultDivide;
    }
  }
}

/** ********************** Task 4 *********************** */
// capitalize(string) function.
const capitalize = (string) => {
  const stringCapitalize = string.slice(0, 1).toUpperCase();
  const stringLowerCase = string.slice(1);
  const result = stringCapitalize.concat(stringLowerCase);
  return result;
};

module.exports = {
  stringLength, reverseString, Calculator, capitalize,
};