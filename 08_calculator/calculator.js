const add = function (addend1, addend2) {
  return addend1 + addend2;
};

const subtract = function (minuend, subtrahend) {
  return minuend - subtrahend;
};

const sum = function (array) {
  return array.reduce((Summand1, Summand2) => Summand1 + Summand2, 0);
};

const multiply = function (values) {
  return values.reduce((multiplicand, multiplier) => multiplicand * multiplier);
};

const power = function (base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function (n) {
  //0! = 1, 1! = 1
  if (
    n >= 0 &&
    n <= 1 //or (n === 1)
  ) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// 2-nd solution for the factorial :
// function factorial(n) {
//   let result = 1;
//   while (n > 0) {
//     result *= n;
//     n -= 1;
//   }
//   return result;
// }


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

// add, subtract, get the sum, multiply, get the power, and find the factorial

// 2-nd solution for the factorial :
// function factorial(n) {
//   let result = 1;
//   while (n > 0) {
//     result *= n;
//     n -= 1;
//   }
//   return result;
// }
