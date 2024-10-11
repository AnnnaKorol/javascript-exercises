

// 1st- possible solution

// const sumAll = function (array) {
/
//   array.sort((a, b) => a - b);/   let fullArray = [];
//   for (let i = array[0]; i <= array[1]; i++) {
//     fullArray.push(i);
//   }
//   let sum = fullArray.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
//   }, 0);
//   return sum;
// };



// Description to the function creation:

// function sumAll(arr) {
//     1) create new empty array, fullArray
//     2) create sort method on array to arrange [small, big]
//     3) for loop on sorted arr
//     4) push each value into fullArr

//     fullArr, run reduce method, creating one single output integer value
//     return value
// }



//2-nd possible solution

// const sumAll = function (start, end) {
// let sum = 0;
// for(let i = start; i<=end; i++) {
//     sum+=1;
// }
// return sum;
// };



const sumAll = function (min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";  //isInteger - static method determines whether the passed value is an integer(целым числом).
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) {
      const temp = min;
      min = max;
      max = temp;
    }
  
    // An alternative way to swap the values of min and max like above is to use the array destructuring syntax.
    // Here's an optional article on it: https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/
    // if (min > max) [min, max] = [max, min];
    
    let sum = 0;
    for (let i = min; i <= max; i++) {
      sum += i;
    }
    return sum;
  };


  // Do not edit below this line
module.exports = sumAll;
  