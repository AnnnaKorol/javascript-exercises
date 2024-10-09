const repeatString = function (word, repetitionTime) {
  if (repetitionTime < 0) return "Error";
  let string = "";
  for (let i = 0; i < 3; i++) {
    string += word;
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
