const repeatString = function (word, repetitionTime) {
  if (repetitionTime < 0) {
    return "ERROR";
  } else if (repetitionTime === 0) {
    return "";
  }
  let string = "";
  for (let i = 0; i < repetitionTime; i++) {
    string += word;
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
